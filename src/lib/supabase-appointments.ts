// src/lib/supabase-appointments.ts
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';
import type { BookingFormData } from './types';

type AppointmentInsert = Database['public']['Tables']['appointments']['Insert'];
type AppointmentRow = Database['public']['Tables']['appointments']['Row'];

// Create appointment in Supabase
export const createSupabaseAppointment = async (
  bookingData: BookingFormData,
  calcomBookingId?: string
): Promise<AppointmentRow> => {
  try {
    // Generate email if not provided (for Supabase storage)
    const email = bookingData.email?.trim() || `${bookingData.mobile}@pdcaic.in`;
    
    // Parse date and time from selectedDateTime
    const appointmentDateTime = new Date(bookingData.selectedDateTime);
    const preferredDate = appointmentDateTime.toISOString().split('T')[0]; // YYYY-MM-DD
    const preferredTime = appointmentDateTime.toTimeString().split(' ')[0]; // HH:MM:SS

    const appointmentData: AppointmentInsert = {
      patient_name: bookingData.name,
      patient_email: email,
      patient_phone: bookingData.mobile,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
      notes: `Service: ${bookingData.serviceType}${bookingData.complaint ? `\nAdditional notes: ${bookingData.complaint}` : ''}`,
      status: 'pending',
      admin_notes: calcomBookingId ? `Cal.com Booking ID: ${calcomBookingId}` : null,
    };

    const { data, error } = await supabase
      .from('appointments')
      .insert([appointmentData])
      .select()
      .single();

    if (error) {
      console.error('Supabase appointment creation error:', error);
      throw new Error(`Failed to save appointment: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error('Error creating Supabase appointment:', error);
    throw error;
  }
};

// Get appointments (for admin dashboard later)
export const getAppointments = async (
  filters?: {
    status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    date?: string;
    limit?: number;
  }
): Promise<AppointmentRow[]> => {
  try {
    let query = supabase
      .from('appointments')
      .select('*')
      .order('preferred_date', { ascending: true });

    if (filters?.status) {
      query = query.eq('status', filters.status);
    }

    if (filters?.date) {
      query = query.eq('preferred_date', filters.date);
    }

    if (filters?.limit) {
      query = query.limit(filters.limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching appointments:', error);
      throw new Error(`Failed to fetch appointments: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('Error in getAppointments:', error);
    throw error;
  }
};

// Update appointment status
export const updateAppointmentStatus = async (
  appointmentId: string,
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled',
  adminNotes?: string
): Promise<AppointmentRow> => {
  try {
    const updateData: any = {
      status,
      updated_at: new Date().toISOString(),
    };

    if (adminNotes) {
      updateData.admin_notes = adminNotes;
    }

    const { data, error } = await supabase
      .from('appointments')
      .update(updateData)
      .eq('id', appointmentId)
      .select()
      .single();

    if (error) {
      console.error('Error updating appointment status:', error);
      throw new Error(`Failed to update appointment: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error('Error in updateAppointmentStatus:', error);
    throw error;
  }
};

// Get today's appointments (for quick dashboard view)
export const getTodaysAppointments = async (): Promise<AppointmentRow[]> => {
  const today = new Date().toISOString().split('T')[0];
  return getAppointments({ date: today });
};

// Get pending appointments (need confirmation)
export const getPendingAppointments = async (): Promise<AppointmentRow[]> => {
  return getAppointments({ status: 'pending' });
};

// Search appointments by patient phone (for WhatsApp workflow)
export const searchAppointmentsByPhone = async (phone: string): Promise<AppointmentRow[]> => {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('patient_phone', phone)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error searching appointments by phone:', error);
      throw new Error(`Failed to search appointments: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('Error in searchAppointmentsByPhone:', error);
    throw error;
  }
};

// Get appointment statistics (for dashboard)
export const getAppointmentStats = async () => {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('status')
      .gte('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()); // Last 30 days

    if (error) throw error;

    const stats = {
      total: data?.length || 0,
      pending: data?.filter(a => a.status === 'pending').length || 0,
      confirmed: data?.filter(a => a.status === 'confirmed').length || 0,
      completed: data?.filter(a => a.status === 'completed').length || 0,
      cancelled: data?.filter(a => a.status === 'cancelled').length || 0,
    };

    return stats;
  } catch (error) {
    console.error('Error getting appointment stats:', error);
    throw error;
  }
};