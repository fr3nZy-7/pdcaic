// src/lib/calcom-api.ts
import type { BookingFormData, CalcomBookingResponse, CalcomEventType } from '@/lib/types';
import { createSupabaseAppointment } from './supabase-appointments';

const CALCOM_API_BASE = 'https://api.cal.com/v1';
const API_KEY = import.meta.env.VITE_CALCOM_API_KEY;
const EVENT_TYPE_ID = import.meta.env.VITE_CALCOM_EVENT_TYPE_ID;

// Helper function to make API calls
const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${CALCOM_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'cal-api-version': '2024-06-14',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'API call failed' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Get available time slots for a specific date
export const getAvailableSlots = async (date: string): Promise<string[]> => {
  try {
    const response = await apiCall(`/slots?eventTypeId=${EVENT_TYPE_ID}&startTime=${date}T00:00:00.000Z&endTime=${date}T23:59:59.000Z`);
    return response.slots || [];
  } catch (error) {
    console.error('Error fetching available slots:', error);
    throw error;
  }
};

// Create a new booking (Cal.com only, used internally by hybrid function)
export const createBooking = async (bookingData: BookingFormData): Promise<CalcomBookingResponse> => {
  try {
    // Generate email if not provided
    const email = bookingData.email?.trim() || `${bookingData.mobile}@pdcaic.in`;
    
    const payload = {
      start: bookingData.selectedDateTime,
      eventTypeId: EVENT_TYPE_ID,
      responses: {
        name: bookingData.name,
        email: email,
        phone: bookingData.mobile,
        notes: `Service: ${bookingData.serviceType}${bookingData.complaint ? `\nNotes: ${bookingData.complaint}` : ''}`,
      },
      metadata: {
        userProvidedEmail: !!bookingData.email,
        primaryContact: 'whatsapp',
        actualMobile: bookingData.mobile,
        serviceType: bookingData.serviceType,
        source: 'website',
        createdAt: new Date().toISOString(),
      },
      timeZone: 'Asia/Kolkata',
    };

    const response = await apiCall('/bookings', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    return response;
  } catch (error) {
    console.error('Error creating Cal.com booking:', error);
    throw error;
  }
};

// Get event types (to verify your setup)
export const getEventTypes = async (): Promise<CalcomEventType[]> => {
  try {
    const response = await apiCall('/event-types');
    return response.event_types || [];
  } catch (error) {
    console.error('Error fetching event types:', error);
    throw error;
  }
};

// Cancel/reschedule booking (if needed later)
export const updateBooking = async (bookingId: string, updates: Partial<BookingFormData>): Promise<CalcomBookingResponse> => {
  try {
    const response = await apiCall(`/bookings/${bookingId}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });

    return response;
  } catch (error) {
    console.error('Error updating booking:', error);
    throw error;
  }
};

// Create a hybrid booking (Cal.com + Supabase)
export const createHybridBooking = async (bookingData: BookingFormData): Promise<{
  calcomBooking: CalcomBookingResponse;
  supabaseAppointment: any;
}> => {
  try {
    // Step 1: Create Cal.com booking first (for calendar/scheduling)
    const calcomBooking = await createBooking(bookingData);
    
    // Step 2: Create Supabase appointment (for your records)
    const supabaseAppointment = await createSupabaseAppointment(bookingData, calcomBooking.id);
    
    return {
      calcomBooking,
      supabaseAppointment
    };
  } catch (error) {
    console.error('Hybrid booking creation failed:', error);
    
    // If Cal.com fails, still try to save to Supabase as backup
    if (error instanceof Error && error.message.includes('Cal.com')) {
      console.log('Cal.com failed, saving to Supabase only...');
      try {
        const supabaseAppointment = await createSupabaseAppointment(bookingData);
        throw new Error(`Calendar booking failed, but appointment saved. ID: ${supabaseAppointment.id}`);
      } catch (supabaseError) {
        throw new Error('Both Cal.com and Supabase booking failed');
      }
    }
    
    throw error;
  }
};

// Create a Supabase-only booking (fallback when Cal.com has issues)
export const createSupabaseOnlyBooking = async (bookingData: BookingFormData): Promise<any> => {
  try {
    console.log('Creating Supabase-only booking...');
    const supabaseAppointment = await createSupabaseAppointment(bookingData);
    
    return {
      calcomBooking: null,
      supabaseAppointment,
      message: 'Appointment saved to our system. We will confirm via WhatsApp shortly.'
    };
  } catch (error) {
    console.error('Supabase-only booking failed:', error);
    throw error;
  }
};

// Validate API connection (useful for testing)
export const validateApiConnection = async (): Promise<boolean> => {
  try {
    await getEventTypes();
    return true;
  } catch (error) {
    console.error('Cal.com API connection failed:', error);
    return false;
  }
};