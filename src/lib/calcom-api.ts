// src/lib/calcom-api.ts - FIXED Cal.com API Integration

import type { BookingFormData, CalcomBookingResponse, CalcomEventType } from '../types/booking';

const CALCOM_API_BASE = 'https://api.cal.com/v1';
const API_KEY = import.meta.env.VITE_CALCOM_API_KEY;

// Helper function to make API calls - FIXED VERSION
const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  try {
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
  } catch (error) {
    console.error('Cal.com API Error:', error);
    throw error;
  }
};

// Validate API connection
export const validateApiConnection = async (): Promise<boolean> => {
  if (!API_KEY) {
    console.error('Cal.com API key not found');
    return false;
  }

  try {
    await apiCall('/me');
    return true;
  } catch (error) {
    console.error('API validation failed:', error);
    return false;
  }
};

// Get all event types
export const getEventTypes = async (): Promise<CalcomEventType[]> => {
  try {
    const response = await apiCall('/event-types');
    return response.event_types || [];
  } catch (error) {
    console.error('Failed to fetch event types:', error);
    return [];
  }
};

// Get available time slots for a specific date and event type
export const getAvailableSlots = async (
  eventTypeId: string,
  date: string // YYYY-MM-DD format
): Promise<string[]> => {
  try {
    const response = await apiCall(
      `/slots/available?eventTypeId=${eventTypeId}&startTime=${date}T00:00:00.000Z&endTime=${date}T23:59:59.000Z`
    );
    
    return response.slots?.map((slot: any) => {
      const time = new Date(slot.time);
      return time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    }) || [];
  } catch (error) {
    console.error('Failed to fetch available slots:', error);
    return [];
  }
};

// Create a booking - This will be handled by backend API route
export const createCalcomBooking = async (
  eventTypeId: string,
  bookingData: {
    name: string;
    email: string;
    start: string; // ISO date string
    timeZone: string;
    responses?: Record<string, any>;
  }
): Promise<CalcomBookingResponse> => {
  try {
    const response = await apiCall('/bookings', {
      method: 'POST',
      body: JSON.stringify({
        eventTypeId: parseInt(eventTypeId),
        start: bookingData.start,
        responses: {
          name: bookingData.name,
          email: bookingData.email,
          ...bookingData.responses
        },
        timeZone: bookingData.timeZone || 'Asia/Kolkata',
        language: 'en',
        metadata: {},
      }),
    });

    return response;
  } catch (error) {
    console.error('Failed to create Cal.com booking:', error);
    throw error;
  }
};

// Get specific event type details
export const getEventTypeDetails = async (eventTypeId: string): Promise<CalcomEventType | null> => {
  try {
    const response = await apiCall(`/event-types/${eventTypeId}`);
    return response.event_type || null;
  } catch (error) {
    console.error(`Failed to fetch event type ${eventTypeId}:`, error);
    return null;
  }
};

// Cancel a booking
export const cancelCalcomBooking = async (bookingId: string): Promise<boolean> => {
  try {
    await apiCall(`/bookings/${bookingId}`, {
      method: 'DELETE',
    });
    return true;
  } catch (error) {
    console.error('Failed to cancel booking:', error);
    return false;
  }
};

// Reschedule a booking
export const rescheduleCalcomBooking = async (
  bookingId: string,
  newStart: string,
  timeZone: string = 'Asia/Kolkata'
): Promise<CalcomBookingResponse | null> => {
  try {
    const response = await apiCall(`/bookings/${bookingId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        start: newStart,
        timeZone: timeZone,
      }),
    });
    return response;
  } catch (error) {
    console.error('Failed to reschedule booking:', error);
    return null;
  }
};

// Utility function to format date for Cal.com API
export const formatDateForCalcom = (date: string, time: string): string => {
  // Convert date (YYYY-MM-DD) and time (HH:MM AM/PM) to ISO string
  const [datePart] = date.split('T');
  const [timePart, period] = time.split(' ');
  const [hours, minutes] = timePart.split(':');
  
  let hour24 = parseInt(hours);
  if (period?.toUpperCase() === 'PM' && hour24 !== 12) {
    hour24 += 12;
  } else if (period?.toUpperCase() === 'AM' && hour24 === 12) {
    hour24 = 0;
  }
  
  const fullDate = new Date(`${datePart}T${hour24.toString().padStart(2, '0')}:${minutes}:00.000Z`);
  return fullDate.toISOString();
};

// Default export for convenience
export default {
  validateApiConnection,
  getEventTypes,
  getAvailableSlots,
  createCalcomBooking,
  getEventTypeDetails,
  cancelCalcomBooking,
  rescheduleCalcomBooking,
  formatDateForCalcom,
};
