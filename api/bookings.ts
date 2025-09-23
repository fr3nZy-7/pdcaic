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

// Format date and time for Cal.com API
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
  
  const fullDate = new Date(`${datePart}T${hour24.toString().padStart(2, '0')}:${minutes}:00`);
  return fullDate.toISOString();
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
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

  return res.status(405).json({ success: false, error: 'Method not allowed' });
}

// Handle booking creation
async function handleCreateBooking(req: VercelRequest, res: VercelResponse) {
  try {
    const {
      patient_name,
      patient_email,
      patient_phone,
      service_id,
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
              source: 'padmanaabhdental.clinic',
              service_id: service_id
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

    // Save to Supabase database
    const { data: appointment, error: supabaseError } = await supabase
      .from('appointments')
      .insert({
        patient_name,
        patient_email: processedEmail,
        patient_phone,
        service_id,
        preferred_date,
        preferred_time,
        notes,
        event_type_id,
        event_type_name,
        status: calcomBookingId ? 'confirmed' : 'pending',
        admin_notes: calcomError ? `Cal.com error: ${calcomError}` : null
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

// Handle get appointments (for admin dashboard later)
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
