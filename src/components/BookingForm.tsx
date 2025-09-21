// src/components/BookingForm.tsx
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlassmorphismCard from '@/components/GlassmorphismCard';
import { 
  Calendar,
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageSquare,
  Stethoscope,
  X,
  CheckCircle,
  Loader2,
  AlertTriangle
} from "lucide-react";
import { createHybridBooking, getAvailableSlots } from '@/lib/calcom-api';
import type { 
  BookingFormData, 
  BookingFormProps, 
  FormErrors, 
  BookingState
} from '@/lib/types';
import { 
  PHONE_REGEX, 
  EMAIL_REGEX, 
  DENTAL_SERVICES,
  TIME_PREFERENCES
} from '@/lib/types';

const BookingForm = ({ 
  onSuccess, 
  onCancel, 
  className = "",
  showModal = true,
  defaultValues = {}
}: BookingFormProps) => {
  // Form state
  const [formData, setFormData] = useState<BookingFormData>({
    name: defaultValues.name || '',
    mobile: defaultValues.mobile || '',
    email: defaultValues.email || '',
    serviceType: defaultValues.serviceType || '',
    complaint: defaultValues.complaint || '',
    selectedDateTime: defaultValues.selectedDateTime || '',
    preferredTimeSlot: defaultValues.preferredTimeSlot || 'morning'
  });

  // UI state
  const [bookingState, setBookingState] = useState<BookingState>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Validate form data
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!PHONE_REGEX.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    // Email validation (only if provided)
    if (formData.email && formData.email.trim() && !EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service type validation
    if (!formData.serviceType.trim()) {
      newErrors.serviceType = 'Please select a service type';
    }

    // Date/time validation
    if (!formData.selectedDateTime) {
      newErrors.selectedDateTime = 'Please select a date and time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setBookingState('loading');

    try {
      const response = await createHybridBooking(formData);
      
      setBookingState('success');
      setShowSuccess(true);

      // Call success callback if provided
      if (onSuccess) {
        onSuccess({
          bookingId: response.calcomBooking.id,
          confirmationMessage: 'Appointment booked successfully in both calendar and our system!',
          whatsappMessage: 'We will contact you on WhatsApp shortly',
          patientEmail: formData.email || undefined
        });
      }

      // Auto-close success message after 4 seconds
      setTimeout(() => {
        setShowSuccess(false);
        if (onCancel) onCancel(); // Close modal
      }, 4000);

    } catch (error) {
      console.error('Booking failed:', error);
      setBookingState('error');
      
      // Reset to idle after 3 seconds
      setTimeout(() => setBookingState('idle'), 3000);
    }
  };

  // Handle input changes
  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear specific field error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Load available slots when date changes
  useEffect(() => {
    if (selectedDate) {
      getAvailableSlots(selectedDate)
        .then(setAvailableSlots)
        .catch(console.error);
    }
  }, [selectedDate]);

  // Generate date options (next 30 days, excluding Sundays)
  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Sundays (assuming clinic is closed)
      if (date.getDay() !== 0) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-IN', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates;
  };

  // Success message component
  const SuccessMessage = () => (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-bold text-shade mb-2">Appointment Booked Successfully!</h3>
      <p className="text-gray-600 mb-4">
        Thank you, {formData.name}. Your appointment request has been submitted.
      </p>
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <p className="text-blue-800 font-medium">We'll contact you on WhatsApp shortly</p>
        <p className="text-blue-600 text-sm mt-1">Mobile: {formData.mobile}</p>
        <p className="text-blue-600 text-sm">Service: {formData.serviceType}</p>
        {formData.email && (
          <p className="text-blue-600 text-sm">Email: {formData.email}</p>
        )}
      </div>
    </div>
  );

  const dateOptions = generateDateOptions();

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name field */}
      <div>
        <label className="flex items-center gap-2 font-medium text-gray-700 mb-2">
          <User className="h-4 w-4 text-primary" />
          Your Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder="Enter your full name"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Mobile field */}
      <div>
        <label className="flex items-center gap-2 font-medium text-gray-700 mb-2">
          <Phone className="h-4 w-4 text-primary" />
          Mobile Number
        </label>
        <input
          type="tel"
          value={formData.mobile}
          onChange={(e) => handleInputChange('mobile', e.target.value)}
          placeholder="Enter 10-digit mobile number"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.mobile ? 'border-red-500' : 'border-gray-300'
          }`}
          maxLength={10}
        />
        {errors.mobile && (
          <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
        )}
        <p className="text-primary text-sm mt-1">We'll contact you via WhatsApp</p>
      </div>

      {/* Email field (optional) */}
      <div>
        <label className="flex items-center gap-2 font-medium text-gray-700 mb-2">
          <Mail className="h-4 w-4 text-gray-400" />
          Email <span className="text-sm text-gray-500">(optional)</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder="Leave blank if you don't have email"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
        <p className="text-gray-500 text-sm mt-1">Only needed for online rescheduling</p>
      </div>

      {/* Service Type Selection */}
      <div>
        <label className="flex items-center gap-2 font-medium text-gray-700 mb-2">
          <Stethoscope className="h-4 w-4 text-primary" />
          Service Needed
        </label>
        <select
          value={formData.serviceType}
          onChange={(e) => handleInputChange('serviceType', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.serviceType ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select service type</option>
          {DENTAL_SERVICES.map(service => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
        )}
      </div>

      {/* Additional Notes */}
      <div>
        <label className="flex items-center gap-2 font-medium text-gray-700 mb-2">
          <MessageSquare className="h-4 w-4 text-gray-400" />
          Additional Notes <span className="text-sm text-gray-500">(optional)</span>
        </label>
        <textarea
          value={formData.complaint}
          onChange={(e) => handleInputChange('complaint', e.target.value)}
          placeholder="Any specific concerns or additional information..."
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
        />
        <p className="text-gray-500 text-sm mt-1">Help us prepare for your visit</p>
      </div>

      {/* Preferred Date */}
      <div>
        <label className="flex items-center gap-2 font-medium text-gray-700 mb-2">
          <Calendar className="h-4 w-4 text-primary" />
          Preferred Date
        </label>
        <select
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            handleInputChange('selectedDateTime', '');
          }}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.selectedDateTime ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a date</option>
          {dateOptions.map(date => (
            <option key={date.value} value={date.value}>
              {date.label}
            </option>
          ))}
        </select>
      </div>

      {/* Preferred Time */}
      <div>
        <label className="flex items-center gap-2 font-medium text-gray-700 mb-2">
          <Clock className="h-4 w-4 text-primary" />
          Preferred Time
        </label>
        <select
          value={formData.preferredTimeSlot}
          onChange={(e) => handleInputChange('preferredTimeSlot', e.target.value as keyof typeof TIME_PREFERENCES)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          {Object.entries(TIME_PREFERENCES).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <p className="text-gray-500 text-sm mt-1">We'll confirm exact time via WhatsApp</p>
      </div>

      {errors.selectedDateTime && (
        <p className="text-red-500 text-sm">{errors.selectedDateTime}</p>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        disabled={bookingState === 'loading'}
        className="w-full bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-200"
      >
        {bookingState === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Booking Appointment...
          </>
        ) : bookingState === 'error' ? (
          <>
            <AlertTriangle className="h-4 w-4 mr-2" />
            Try Again
          </>
        ) : (
          <>
            <CheckCircle className="h-4 w-4 mr-2" />
            Book Appointment
          </>
        )}
      </Button>

      {bookingState === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-800 text-sm">
            Booking failed. Please try again or call us directly.
          </p>
        </div>
      )}

      {/* Contact info */}
      <div className="text-center pt-4 border-t">
        <p className="text-gray-600 text-sm">
          Need help? Call us at{' '}
          <a href="tel:+919876543210" className="text-primary font-medium">
            +91 98765 43210
          </a>
        </p>
      </div>
    </form>
  );

  if (!showModal) {
    // Page-embedded version
    return (
      <div className={`booking-form-container ${className}`}>
        {showSuccess ? <SuccessMessage /> : formContent}
      </div>
    );
  }

  // Modal version
  return (
    <div className={`booking-form-container ${className}`}>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="relative max-w-md w-full max-h-[90vh] overflow-y-auto">
          <GlassmorphismCard className="bg-white/95 backdrop-blur-xl shadow-2xl">
            {/* Close button */}
            <button
              onClick={onCancel}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>

            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-shade">
                Book Your Appointment
              </CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we'll contact you shortly
              </p>
            </CardHeader>

            <CardContent className="p-6 pt-0">
              {showSuccess ? <SuccessMessage /> : formContent}
            </CardContent>
          </GlassmorphismCard>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;