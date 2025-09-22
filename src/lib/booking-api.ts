// Frontend API client for booking system (Vite + Vercel)
import type { ApiResponse, Service, CalcomEventType, TimeSlot, BookingFormData, BookingSuccess } from '@/types/booking';

const API_BASE = '/api'; // Same as before, but now points to Vercel functions

// Generic API call helper
const apiCall = async <T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();
    
    if (!response.ok) {
      return {
        success: false,
        error: data.error || `HTTP error! status: ${response.status}`
      };
    }

    return data;
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error'
    };
  }
};

// Get active services for dropdown
export const getServices = async (): Promise<ApiResponse<Service[]>> => {
  return apiCall<Service[]>('/services'); // → /api/services.ts
};

// Get Cal.com event types (excluding "Visit to Other Clinic")
export const getEventTypes = async (): Promise<ApiResponse<CalcomEventType[]>> => {
  return apiCall<CalcomEventType[]>('/event-types'); // → /api/event-types.ts
};

// Get available time slots for a specific date and event type
export const getAvailableSlots = async (
  eventTypeId: string,
  date: string
): Promise<ApiResponse<TimeSlot[]>> => {
  return apiCall<TimeSlot[]>(`/slots?eventTypeId=${eventTypeId}&date=${date}`); // → /api/slots.ts
};

// Create a new booking
export const createBooking = async (bookingData: BookingFormData): Promise<ApiResponse<BookingSuccess>> => {
  return apiCall<BookingSuccess>('/create-booking', { // → /api/create-booking.ts
    method: 'POST',
    body: JSON.stringify(bookingData),
  });
};

// Get appointments (for admin dashboard later)
export const getAppointments = async (status?: string): Promise<ApiResponse<any[]>> => {
  const query = status ? `?status=${status}` : '';
  return apiCall<any[]>(`/create-booking${query}`); // → /api/create-booking.ts (GET method)
};

// Utility functions for frontend (same as before)
export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
};

export const formatTime = (time: string): string => {
  const [timePart, period] = time.split(' ');
  if (!period) {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  }
  return time;
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/[^0-9]/g, ''));
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default {
  getServices,
  getEventTypes,
  getAvailableSlots,
  createBooking,
  getAppointments,
  formatDate,
  formatTime,
  validatePhone,
  validateEmail,
};
