import React from 'react';
import { Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { TimeSlot } from '@/types/booking';

interface TimeSlotsProps {
  slots: TimeSlot[];
  selectedTime?: string;
  onTimeSelect: (time: string) => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
  slots,
  selectedTime,
  onTimeSelect,
  loading = false,
  disabled = false,
  className = ""
}) => {
  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-center">
          <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-blue-600" />
          <p className="text-gray-500 text-sm">Loading available time slots...</p>
        </div>
      </div>
    );
  }

  if (!slots.length) {
    return (
      <div className={`text-center p-8 ${className}`}>
        <Clock className="h-12 w-12 mx-auto mb-4 text-gray-300" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No slots available</h3>
        <p className="text-gray-500 text-sm">
          Please select a different date or contact the clinic directly.
        </p>
      </div>
    );
  }

  // Group slots by morning/afternoon/evening
  const groupSlotsByTime = (slots: TimeSlot[]) => {
    const morning: TimeSlot[] = [];
    const afternoon: TimeSlot[] = [];
    const evening: TimeSlot[] = [];

    slots.forEach(slot => {
      const time = slot.time.toLowerCase();
      if (time.includes('am') || (time.includes('pm') && time.startsWith('12'))) {
        morning.push(slot);
      } else if (time.includes('pm') && (time.startsWith('1') || time.startsWith('2') || time.startsWith('3'))) {
        afternoon.push(slot);
      } else {
        evening.push(slot);
      }
    });

    return { morning, afternoon, evening };
  };

  const { morning, afternoon, evening } = groupSlotsByTime(slots);

  const TimeGroup: React.FC<{ title: string; slots: TimeSlot[]; icon: React.ReactNode }> = 
    ({ title, slots, icon }) => {
    if (!slots.length) return null;

    return (
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <h4 className="font-medium text-gray-900">{title}</h4>
          <span className="text-xs text-gray-500">({slots.length} slots)</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {slots.map((slot, index) => (
            <Button
              key={index}
              type="button"
              variant={selectedTime === slot.time ? "default" : "outline"}
              size="sm"
              onClick={() => onTimeSelect(slot.time)}
              disabled={!slot.available || disabled}
              className={`
                text-sm transition-all duration-200
                ${selectedTime === slot.time 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'hover:border-blue-300'
                }
                ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {slot.time}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={className}>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900 mb-1">Available Time Slots</h3>
        <p className="text-sm text-gray-500">Select a time that works best for you</p>
      </div>

      <TimeGroup 
        title="Morning" 
        slots={morning} 
        icon={<Clock className="h-4 w-4 text-orange-500" />} 
      />
      
      <TimeGroup 
        title="Afternoon" 
        slots={afternoon} 
        icon={<Clock className="h-4 w-4 text-yellow-500" />} 
      />
      
      <TimeGroup 
        title="Evening" 
        slots={evening} 
        icon={<Clock className="h-4 w-4 text-purple-500" />} 
      />

      {selectedTime && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">
              Selected: {selectedTime}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlots;
