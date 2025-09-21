// src/lib/types.ts
// Existing types from your Supabase (keeping them intact)
export type { Json, Database, Tables, TablesInsert, TablesUpdate, Enums } from '@/integrations/supabase/types';

// Booking form data that user fills out
export interface BookingFormData {
  name: string;
  mobile: string;
  email?: string; // Optional - will be auto-generated if not provided
  serviceType: string; // Selected dental service
  complaint?: string; // Additional details/notes
  selectedDateTime: string; // ISO string format
  preferredTimeSlot?: 'morning' | 'afternoon' | 'evening';
}

// Cal.com API response types
export interface CalcomBookingResponse {
  id: string;
  uid: string;
  title: string;
  startTime: string;
  endTime: string;
  attendees: Array<{
    email: string;
    name: string;
    timeZone: string;
  }>;
  user: {
    email: string;
    name: string;
    timeZone: string;
  };
  metadata?: {
    userProvidedEmail?: boolean;
    primaryContact?: string;
    actualMobile?: string;
    source?: string;
    createdAt?: string;
  };
}

// Cal.com event type structure
export interface CalcomEventType {
  id: number;
  title: string;
  slug: string;
  length: number;
  description?: string;
  locations: Array<{
    type: string;
    address?: string;
  }>;
}

// Available time slots
export interface TimeSlot {
  time: string;
  available: boolean;
  datetime: string; // ISO string
}

// Form validation errors
export interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  serviceType?: string;
  complaint?: string;
  selectedDateTime?: string;
}

// Booking states for UI
export type BookingState = 'idle' | 'loading' | 'success' | 'error';

// Success response after booking
export interface BookingSuccess {
  bookingId: string;
  confirmationMessage: string;
  whatsappMessage: string;
  patientEmail?: string;
}

// Time preference options
export const TIME_PREFERENCES = {
  morning: 'Morning (9 AM - 12 PM)',
  afternoon: 'Afternoon (2 PM - 5 PM)', 
  evening: 'Evening (5 PM - 7 PM)'
} as const;

// Common dental services (for dropdown/suggestions)
export const DENTAL_SERVICES = [
  'General Consultation',
  'Dental Cleaning/Scaling', 
  'Root Canal Treatment',
  'Tooth Extraction',
  'Dental Filling',
  'Crown/Bridge Work',
  'Dental Implant Consultation',
  'Orthodontic Consultation',
  'Teeth Whitening',
  'Emergency Dental Care',
  'Follow-up Visit',
  'Other'
] as const;

export type ServiceType = typeof DENTAL_SERVICES[number];

// Phone number validation pattern
export const PHONE_REGEX = /^[6-9]\d{9}$/; // Indian mobile number pattern

// Email validation (basic)
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form validation utilities type
export interface ValidationResult {
  isValid: boolean;
  errors: FormErrors;
}

// Props for BookingForm component
export interface BookingFormProps {
  onSuccess?: (booking: BookingSuccess) => void;
  onCancel?: () => void;
  className?: string;
  showModal?: boolean;
  defaultValues?: Partial<BookingFormData>;
}

// Props for BookingButton modifications
export interface BookAppointmentButtonProps {
  onClick?: () => void;
  className?: string;
  showBookingForm?: boolean;
}