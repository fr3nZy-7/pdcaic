import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const CALCOM_API_BASE = 'https://api.cal.com/v1';
const CALCOM_API_KEY = process.env.CALCOM_API_KEY;

// Cal.com API helper using apiKey query param (v1 auth)
const calcomApiCall = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${CALCOM_API_BASE}${endpoint}${endpoint.includes('?') ? '&' : '?'}apiKey=${CALCOM_API_KEY}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'cal-api-version': '2024-06-14',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Cal.com API call failed' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// FIXED: Proper timezone handling for Cal.com API
const formatDateTimeForCalcom = (date: string, time: string): string => {
  const [datePart] = date.split('T');
  const [timePart, period] = time.split(' ');
  const [hours, minutes] = timePart.split(':');

  let hour24 = parseInt(hours);
  if (period?.toUpperCase() === 'PM' && hour24 !== 12) {
    hour24 += 12;
  } else if (period?.toUpperCase() === 'AM' && hour24 === 12) {
    hour24 = 0;
  }

  // Create date string in IST timezone
  const istDateTimeString = `${datePart}T${hour24.toString().padStart(2, '0')}:${minutes}:00+05:30`;
  
  // Convert IST to UTC properly
  const utcDate = new Date(istDateTimeString);
  
  return utcDate.toISOString();
};

// Convert mobile to email if email not provided
const processEmail = (email?: string, mobile?: string): string => {
  if (email && email.trim()) {
    return email.trim();
  }

  if (mobile && mobile.trim()) {
    const cleanMobile = mobile.replace(/[^0-9]/g, '');
    return `${cleanMobile}@padmanaabhdental.clinic`;
  }

  throw new Error('Either email or mobile number is required');
};

// Check for booking conflicts using existing schema
const checkBookingConflict = async (supabase: any, eventTypeId: string, date: string, time: string) => {
  const { data: existingBookings, error } = await supabase
    .from('appointments')
    .select('id, patient_name, status')
    .eq('event_type_id', eventTypeId)
    .eq('preferred_date', date)
    .eq('preferred_time', time)
    .in('status', ['confirmed', 'pending']);

  if (error) {
    console.error('Error checking booking conflicts:', error);
    return { hasConflict: false, conflictDetails: null };
  }

  return {
    hasConflict: existingBookings && existingBookings.length > 0,
    conflictDetails: existingBookings?.[0] || null
  };
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    return handleCreateBooking(req, res);
  }

  if (req.method === 'GET') {
    return handleGetAppointments(req, res);
  }

  if (req.method === 'DELETE') {
    return handleCancelBooking(req, res);
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' });
}

// Handle booking creation with conflict detection
async function handleCreateBooking(req: VercelRequest, res: VercelResponse) {
  try {
    const {
      patient_name,
      patient_email,
      patient_phone,
      preferred_date,
      preferred_time,
      notes,
      event_type_id,
      event_type_name
    } = req.body;

    // Validate required fields
    if (!patient_name || !patient_phone || !preferred_date || !preferred_time || !event_type_id) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    if (!supabaseUrl || !supabaseAnonKey) {
      return res.status(500).json({
        success: false,
        error: 'Supabase configuration missing'
      });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Check for booking conflicts
    const { hasConflict, conflictDetails } = await checkBookingConflict(
      supabase, 
      event_type_id, 
      preferred_date, 
      preferred_time
    );

    if (hasConflict) {
      return res.status(409).json({
        success: false,
        error: 'Time slot no longer available',
        message: 'This time slot has been booked by another patient. Please select a different time.',
        conflictDetails
      });
    }

    // Process email (use mobile if email not provided)
    const processedEmail = processEmail(patient_email, patient_phone);

    // Format datetime for Cal.com
    const calcomDateTime = formatDateTimeForCalcom(preferred_date, preferred_time);

    let calcomBookingId = null;
    let calcomError: string | null = null;

    // Try to create Cal.com booking
    try {
      if (CALCOM_API_KEY) {
        const calcomResponse = await calcomApiCall('/bookings', {
          method: 'POST',
          body: JSON.stringify({
            eventTypeId: parseInt(event_type_id),
            start: calcomDateTime,
            responses: {
              name: patient_name,
              email: processedEmail,
              notes: notes || '',
              phone: patient_phone
            },
            timeZone: 'Asia/Kolkata',
            language: 'en',
            metadata: {
              source: 'padmanaabhdental.clinic'
            },
          }),
        });

        calcomBookingId = calcomResponse.id;
        console.log('Cal.com booking created:', calcomBookingId);
      }
    } catch (error) {
      console.error('Cal.com booking failed:', error);
      calcomError = error instanceof Error ? error.message : 'Cal.com booking failed';
      // Continue to save in Supabase even if Cal.com fails
    }

    // Prepare admin notes with Cal.com booking ID or error
    let adminNotes: string | null = null;
    if (calcomBookingId) {
      adminNotes = `Cal.com booking ID: ${calcomBookingId}`;
    } else if (calcomError) {
      adminNotes = `Cal.com error: ${calcomError}`;
    }

    // Save to Supabase database using exact schema
    const { data: appointment, error: supabaseError } = await supabase
      .from('appointments')
      .insert({
        patient_name,
        patient_email: processedEmail,
        patient_phone,
        preferred_date,
        preferred_time,
        notes,
        event_type_id,
        event_type_name,
        status: calcomBookingId ? 'confirmed' : 'pending',
        admin_notes: adminNotes,
        assigned_to: null
      })
      .select()
      .single();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return res.status(500).json({
        success: false,
        error: 'Failed to save appointment'
      });
    }

    // Success response
    const response = {
      success: true,
      data: {
        appointmentId: appointment.id,
        calcomBookingId,
        message: calcomBookingId
          ? 'Appointment booked successfully and calendar updated!'
          : 'Appointment saved! Calendar booking pending - Dr. Neha will confirm manually.'
      }
    };

    // Add warning if Cal.com failed
    if (calcomError) {
      response.data.message += ` (Note: ${calcomError})`;
    }

    return res.status(200).json(response);
  } catch (error) {
    console.error('Booking API error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}

// Handle booking cancellation
async function handleCancelBooking(req: VercelRequest, res: VercelResponse) {
  try {
    const { appointmentId } = req.query;

    if (!appointmentId || Array.isArray(appointmentId)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid appointment ID'
      });
    }

    if (!supabaseUrl || !supabaseAnonKey) {
      return res.status(500).json({
        success: false,
        error: 'Supabase configuration missing'
      });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Get appointment details
    const { data: appointment, error: fetchError } = await supabase
      .from('appointments')
      .select('*')
      .eq('id', appointmentId)
      .single();

    if (fetchError || !appointment) {
      return res.status(404).json({
        success: false,
        error: 'Appointment not found'
      });
    }

    // Extract Cal.com booking ID from admin_notes if exists
    let calcomBookingId = null;
    if (appointment.admin_notes && appointment.admin_notes.includes('Cal.com booking ID:')) {
      const match = appointment.admin_notes.match(/Cal\.com booking ID: (\d+)/);
      calcomBookingId = match ? match[1] : null;
    }

    // Cancel in Cal.com if booking ID exists
    let calcomCancelError: string | null = null;
    if (calcomBookingId && CALCOM_API_KEY) {
      try {
        await calcomApiCall(`/bookings/${calcomBookingId}`, {
          method: 'DELETE',
        });
        console.log('Cal.com booking cancelled:', calcomBookingId);
      } catch (error) {
        console.error('Cal.com cancellation failed:', error);
        calcomCancelError = error instanceof Error ? error.message : 'Cal.com cancellation failed';
      }
    }

    // Update appointment status to cancelled
    const { error: updateError } = await supabase
      .from('appointments')
      .update({
        status: 'cancelled',
        admin_notes: calcomCancelError 
          ? `Cancelled. Cal.com error: ${calcomCancelError}` 
          : 'Cancelled successfully'
      })
      .eq('id', appointmentId);

    if (updateError) {
      console.error('Supabase update error:', updateError);
      return res.status(500).json({
        success: false,
        error: 'Failed to cancel appointment'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Appointment cancelled successfully. The time slot is now available for other patients.'
    });

  } catch (error) {
    console.error('Cancel booking error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

// Handle get appointments
async function handleGetAppointments(req: VercelRequest, res: VercelResponse) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      return res.status(500).json({
        success: false,
        error: 'Supabase configuration missing'
      });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { status, limit } = req.query;
    const limitNum = parseInt(limit as string || '50');

    let query = supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limitNum);

    if (status) {
      query = query.eq('status', status);
    }

    const { data: appointments, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to fetch appointments'
      });
    }

    return res.status(200).json({
      success: true,
      data: appointments || []
    });
  } catch (error) {
    console.error('Get appointments error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}
