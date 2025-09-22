// Supabase operations for appointments (backup/fallback)
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';
import type { BookingFormData } from '@/types/booking';

type AppointmentInsert = Database['public']['Tables']['appointments']['Insert'];
type AppointmentRow = Database['public']['Tables']['appointments']['Row'];

// Create appointment directly in Supabase (fallback if API fails)
export const createSupabaseAppointment = async (
  bookingData: BookingFormData
): Promise<{ success: boolean; data?: AppointmentRow; error?: string }> => {
  try {
    // Process email (convert mobile to email if needed)
    const processedEmail = bookingData.patient_email?.trim() || 
      `${bookingData.patient_phone.replace(/[^0-9]/g, '')}@padmanaabhdental.clinic`;

    const appointmentData = {
      patient_name: bookingData.patient_name,
      patient_email: processedEmail,
      patient_phone: bookingData.patient_phone,
      service_id: bookingData.service_id,
      preferred_date: bookingData.preferred_date,
      preferred_time: bookingData.preferred_time,
      notes: bookingData.notes,
      event_type_id: bookingData.event_type_id,
      event_type_name: bookingData.event_type_name,
      status: 'pending', // Will be confirmed manually
      admin_notes: 'Created via direct Supabase (API fallback)'
    } as AppointmentInsert;

    const { data, error } = await supabase
      .from('appointments')
      .insert(appointmentData)
      .select()
      .single();

    if (error) {
      console.error('Supabase appointment error:', error);
      return {
        success: false,
        error: error.message
      };
    }

    return {
      success: true,
      data
    };
  } catch (error) {
    console.error('Create appointment error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create appointment'
    };
  }
};

// Get appointments for admin dashboard
export const getAppointmentsByStatus = async (
  status?: string,
  limit: number = 50
): Promise<{ success: boolean; data?: AppointmentRow[]; error?: string }> => {
  try {
    let query = supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (status) {
      query = query.eq('status', status as any);
    }

    const { data, error } = await query;

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    return {
      success: true,
      data: data || []
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch appointments'
    };
  }
};

// Update appointment status
export const updateAppointmentStatus = async (
  id: string,
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled',
  adminNotes?: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const { error } = await supabase
      .from('appointments')
      .update({ 
        status, 
        admin_notes: adminNotes,
        updated_at: new Date().toISOString()
      })
      .eq('id', id);

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update appointment'
    };
  }
};

export default {
  createSupabaseAppointment,
  getAppointmentsByStatus,
  updateAppointmentStatus,
};
