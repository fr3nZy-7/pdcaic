// Booking form data from frontend
export interface BookingFormData {
    patient_name: string;
    patient_email?: string;
    patient_phone: string;
    service_id: string;
    preferred_date: string;
    preferred_time: string;
    notes?: string;
    event_type_id: string;
    event_type_name: string;
  }
  
  // Cal.com event type structure
  export interface CalcomEventType {
    id: string;
    title: string;
    slug: string;
    duration: number;
    description?: string;
    schedulingType?: string;
  }
  
  // Cal.com booking response
  export interface CalcomBookingResponse {
    id: number;
    uid: string;
    title: string;
    description?: string;
    startTime: string;
    endTime: string;
    attendees: Array<{
      name: string;
      email: string;
      timeZone: string;
    }>;
    user: {
      name: string;
      email: string;
    };
  }
  
  // Available time slots
  export interface TimeSlot {
    time: string;
    available: boolean;
    eventTypeId?: string;
  }
  
  // Service from Supabase
  export interface Service {
    id: string;
    title: string;
    short_description?: string;
    duration_minutes?: number;
    is_active: boolean;
  }
  
  // Appointment status
  export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
  
  // Complete appointment record
  export interface Appointment {
    id: string;
    patient_name: string;
    patient_email: string;
    patient_phone: string;
    service_id: string;
    preferred_date: string;
    preferred_time: string;
    status: AppointmentStatus;
    notes?: string;
    admin_notes?: string;
    event_type_id?: string;
    event_type_name?: string;
    created_at: string;
    updated_at: string;
  }
  
  // API Response types
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
  }
  
  // Booking creation response
  export interface BookingSuccess {
    appointmentId: string;
    calcomBookingId?: string;
    message: string;
  }
  