import React, { useState, useEffect } from 'react';
import { X, User, Phone, Mail, FileText, Loader2, AlertCircle, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DatePicker from '@/components/ui/DatePicker';
import TimeSlots from '@/components/ui/TimeSlots';
import { getEventTypes, getAvailableSlots, createBooking } from '@/lib/booking-api';
import type { CalcomEventType, TimeSlot, BookingFormData } from '@/types/booking';
import GlassmorphismCard from './GlassmorphismCard';

interface BookingFormProps {
  showModal?: boolean;
  onSuccess?: (data: any) => void;
  onCancel?: () => void;
}

interface FormData {
  patient_name: string;
  patient_email: string;
  patient_phone: string;
  preferred_date: string;
  preferred_time: string;
  notes: string;
}

interface FormErrors {
  patient_name?: string;
  patient_phone?: string;
  patient_email?: string;
  event_type?: string;
  preferred_date?: string;
  preferred_time?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({
  showModal = false,
  onSuccess,
  onCancel
}) => {
  const [formData, setFormData] = useState<FormData>({
    patient_name: '',
    patient_email: '',
    patient_phone: '',
    preferred_date: '',
    preferred_time: '',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [eventTypes, setEventTypes] = useState<CalcomEventType[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedEventType, setSelectedEventType] = useState<CalcomEventType | null>(null);

  const [loadingEventTypes, setLoadingEventTypes] = useState(true);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'conflict'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    loadEventTypes();
  }, []);

  useEffect(() => {
    if (formData.preferred_date && selectedEventType) {
      loadTimeSlots(selectedEventType.id, formData.preferred_date);
    } else {
      setTimeSlots([]);
    }
  }, [formData.preferred_date, selectedEventType]);

  const loadEventTypes = async () => {
    setLoadingEventTypes(true);
    try {
      const response = await getEventTypes();
      if (response.success && response.data) setEventTypes(response.data);
    } catch (error) {
      console.error('Failed to load event types:', error);
    } finally {
      setLoadingEventTypes(false);
    }
  };

  const loadTimeSlots = async (eventTypeId: string, date: string) => {
    setLoadingSlots(true);
    setFormData(prev => ({ ...prev, preferred_time: '' }));
    try {
      const response = await getAvailableSlots(eventTypeId, date);
      if (response.success && response.data) setTimeSlots(response.data);
      else setTimeSlots([]);
    } catch (error) {
      setTimeSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleEventTypeChange = (eventTypeId: string) => {
    const eventType = eventTypes.find(et => et.id == eventTypeId) || null;
    setSelectedEventType(eventType);
    setFormData(prev => ({ ...prev, preferred_date: '', preferred_time: '' }));
    setTimeSlots([]);
    if (eventType && formErrors.event_type) {
      setFormErrors(prev => ({ ...prev, event_type: undefined }));
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
    // Clear conflict status when user makes changes
    if (submitStatus === 'conflict') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!selectedEventType) errors.event_type = 'Please select a type of appointment';
    if (!formData.preferred_date) errors.preferred_date = 'Please select a date';
    if (!formData.preferred_time) errors.preferred_time = 'Please select a time';
    if (!formData.patient_name.trim()) errors.patient_name = 'Name is required';
    if (!formData.patient_phone.trim()) errors.patient_phone = 'Mobile number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.patient_phone.replace(/[^0-9]/g, ''))) errors.patient_phone = 'Enter a valid 10-digit number';
    if (
      (selectedEventType && selectedEventType.title.toLowerCase().includes('video consultation'))
      && !formData.patient_email.trim()
    ) {
      errors.patient_email = 'Email is required for video consultation';
    }
    if (formData.patient_email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.patient_email)) {
      errors.patient_email = 'Please enter a valid email address';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !selectedEventType) return;

    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      const bookingData: BookingFormData = {
        patient_name: formData.patient_name.trim(),
        patient_email: formData.patient_email.trim() || undefined,
        patient_phone: formData.patient_phone.trim(),
        service_id: '', // not used in new form
        preferred_date: formData.preferred_date,
        preferred_time: formData.preferred_time,
        notes: formData.notes.trim() || undefined,
        event_type_id: selectedEventType.id,
        event_type_name: selectedEventType.title
      };

      const response = await createBooking(bookingData);
      
      if (response.success && response.data) {
        setSubmitStatus('success');
        setSubmitMessage(response.data.message);
        // CHANGED: Call onSuccess immediately and reset form
        onSuccess?.(response.data);
        resetForm(); // Reset form immediately after success
      } else {
        // Check for conflict error (409 status)
        if (response.error?.includes('Time slot no longer available') || response.error?.includes('409')) {
          setSubmitStatus('conflict');
          setSubmitMessage('This time slot has been booked by another patient. Please refresh and select a different time.');
          // Refresh time slots to show updated availability
          if (selectedEventType) {
            loadTimeSlots(selectedEventType.id, formData.preferred_date);
          }
        } else {
          setSubmitStatus('error');
          setSubmitMessage(response.error || 'Failed to book appointment');
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      patient_name: '',
      patient_email: '',
      patient_phone: '',
      preferred_date: '',
      preferred_time: '',
      notes: ''
    });
    setFormErrors({});
    setSelectedEventType(null);
    setTimeSlots([]);
    setSubmitStatus('idle');
    setSubmitMessage('');
  };

  const handleClose = () => {
    resetForm();
    onCancel?.();
  };

  // REMOVED: Success modal component entirely

  const formContent = (
    <GlassmorphismCard className="w-full max-w-2xl mx-auto text-shade bg-primary/20 backdrop-blur-3xl border border-white/30 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-shade">
          <img src="/images/icons/tooth-tick.svg" className="h-8 w-8" alt="Tooth Icon" />
          Appointment Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-800">Booking Failed</h4>
                <p className="text-red-700 text-sm">{submitMessage}</p>
              </div>
            </div>
          )}

          {submitStatus === 'conflict' && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-orange-800">Time Slot Unavailable</h4>
                <p className="text-orange-700 text-sm">{submitMessage}</p>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="mt-2 text-orange-700 border-orange-300"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, preferred_time: '' }));
                    if (selectedEventType) {
                      loadTimeSlots(selectedEventType.id, formData.preferred_date);
                    }
                    setSubmitStatus('idle');
                    setSubmitMessage('');
                  }}
                >
                  Refresh Available Times
                </Button>
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="event-type-select">
              Type of Appointment <span className="text-red-500">*</span>
            </Label>
            {loadingEventTypes ? (
              <div className="flex items-center justify-center p-4 border border-gray-300 rounded-lg">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Loading types...
              </div>
            ) : (
              <select
                id="event-type-select"
                value={selectedEventType?.id || ''}
                onChange={e => handleEventTypeChange(e.target.value)}
                className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                  formErrors.event_type ? 'border-red-500' : 'border-input bg-background'
                }`}
              >
                <option value="">Select...</option>
                {eventTypes.map(et => (
                  <option key={et.id} value={et.id}>
                    {et.title} {et.duration ? `(${et.duration} min)` : ''}
                  </option>
                ))}
              </select>
            )}
            {formErrors.event_type && (
              <p className="text-red-500 text-sm mt-1">{formErrors.event_type}</p>
            )}
          </div>

          <div>
            <Label>Preferred Date <span className="text-red-500">*</span></Label>
            <DatePicker
              selectedDate={formData.preferred_date}
              onDateSelect={date => handleInputChange('preferred_date', date)}
              disabled={!selectedEventType}
            />
            {formErrors.preferred_date && (
              <p className="text-red-500 text-sm mt-1">{formErrors.preferred_date}</p>
            )}
          </div>

          {formData.preferred_date && selectedEventType && (
            <div>
              <Label>Preferred Time <span className="text-red-500">*</span></Label>
              <TimeSlots
                slots={timeSlots}
                selectedTime={formData.preferred_time}
                onTimeSelect={time => handleInputChange('preferred_time', time)}
                loading={loadingSlots}
              />
              {formErrors.preferred_time && (
                <p className="text-red-500 text-sm mt-1">{formErrors.preferred_time}</p>
              )}
            </div>
          )}

          <div>
            <Label htmlFor="patient-name">Name <span className="text-red-500">*</span></Label>
            <Input
              id="patient-name"
              type="text"
              value={formData.patient_name}
              onChange={e => handleInputChange('patient_name', e.target.value)}
              placeholder="Enter your name"
              className={formErrors.patient_name ? 'border-red-500' : ''}
            />
            {formErrors.patient_name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.patient_name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="patient-phone">Mobile Number <span className="text-red-500">*</span></Label>
            <Input
              id="patient-phone"
              type="tel"
              value={formData.patient_phone}
              onChange={e => handleInputChange('patient_phone', e.target.value)}
              placeholder="10-digit mobile number"
              className={formErrors.patient_phone ? 'border-red-500' : ''}
            />
            {formErrors.patient_phone && (
              <p className="text-red-500 text-sm mt-1">{formErrors.patient_phone}</p>
            )}
          </div>

          <div>
            <Label htmlFor="patient-email">
              Email {selectedEventType && selectedEventType.title.toLowerCase().includes('video consultation') ? <span className="text-red-500">*</span> : <span className="text-gray-500">(Optional)</span>}
            </Label>
            <Input
              id="patient-email"
              type="email"
              value={formData.patient_email}
              onChange={e => handleInputChange('patient_email', e.target.value)}
              placeholder="your@email.com"
              className={formErrors.patient_email ? 'border-red-500' : ''}
            />
            {formErrors.patient_email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.patient_email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="notes">Additional Notes <span className="text-gray-500">(Optional)</span></Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={e => handleInputChange('notes', e.target.value)}
              placeholder="Any specific concerns or requirements..."
              rows={3}
              className="pl-2"
            />
          </div>

          <div className="flex gap-3 pt-4">
            {showModal && (
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={submitting}
                className="flex-1"
              >
                Cancel
              </Button>
            )}
            <Button
              type="submit"
              disabled={submitting || !selectedEventType}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Booking...
                </>
              ) : (
                'Book Appointment'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </GlassmorphismCard>
  );

  if (showModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
        <div className="relative w-full max-w-2xl">
          <Button
            variant="outline"
            size="sm"
            onClick={handleClose}
            className="absolute -top-2 -right-2 z-10 bg-white"
          >
            <X className="h-4 w-4" />
          </Button>
          {formContent}
        </div>
      </div>
    );
  }

  return formContent;
};

export default BookingForm;
