import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DatePickerProps {
  selectedDate?: string; // YYYY-MM-DD
  onDateSelect: (date: string) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateSelect,
  minDate = new Date(),
  maxDate,
  disabled = false,
  className = ""
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  // Generate calendar days
  const generateCalendarDays = () => {
    const start = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const end = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startDate = new Date(start);
    startDate.setDate(start.getDate() - start.getDay()); // Start from Sunday

    const days = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) { // 6 weeks * 7 days
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  };

  const isDateDisabled = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) return true;
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    
    // Disable Sundays (assuming clinic is closed)
    if (date.getDay() === 0) return true;
    
    return false;
  };

  const isCurrentMonth = (date: Date): boolean => {
    return date.getMonth() === currentMonth.getMonth();
  };

  const isSelected = (date: Date): boolean => {
    return selectedDate === formatDate(date);
  };

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return;
    onDateSelect(formatDate(date));
    setIsOpen(false);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const days = generateCalendarDays();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const displayDate = selectedDate 
    ? new Date(selectedDate).toLocaleDateString('en-IN', { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    : "Select a date";

  return (
    <div className={`relative ${className}`}>
      <Button
        type="button"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        className="w-full justify-between text-left font-normal"
      >
        <span className={selectedDate ? "text-gray-900" : "text-gray-500"}>
          {displayDate}
        </span>
        <Calendar className="h-4 w-4 opacity-50" />
      </Button>

      {isOpen && (
        <div className="absolute z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-80">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={prevMonth}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <h3 className="font-semibold text-gray-900">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={nextMonth}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Day labels */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((date, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleDateClick(date)}
                disabled={isDateDisabled(date)}
                className={`
                  p-2 text-sm rounded-md transition-colors duration-200
                  ${!isCurrentMonth(date) ? 'text-gray-400' : 'text-gray-900'}
                  ${isDateDisabled(date) 
                    ? 'cursor-not-allowed text-gray-300 bg-gray-50' 
                    : 'hover:bg-blue-50 cursor-pointer'
                  }
                  ${isSelected(date) 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : ''
                  }
                `}
              >
                {date.getDate()}
              </button>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-3 text-xs text-gray-500 text-center">
            Clinic closed on Sundays
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default DatePicker;
