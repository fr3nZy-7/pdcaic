// src/components/BookAppointmentButton.tsx
interface BookAppointmentButtonProps {
  eventSlug?: string;
  className?: string;
}

const BookAppointmentButton = ({ eventSlug, className = "" }: BookAppointmentButtonProps) => {
  const handleClick = () => {
    // Navigate to the booking page, passing the slug as a query parameter
    let url = '/book-appointment';
    if (eventSlug) {
      url += `?eventSlug=${eventSlug}`;
    }
    window.location.href = url;
  };

  return (
    <button
      onClick={handleClick}
      className={`
        flex items-center justify-center gap-2
        rounded-full font-semibold text-white font-heading
        bg-gradient-to-b from-[#00ABDA] via-[#02739D] to-[#00ABDA]
        shadow-md transition-all duration-200
        
        px-4 py-2 text-sm
        sm:px-6 sm:py-3 sm:text-base
        md:px-7 md:py-3 md:text-md
        
        hover:from-[#007EAC] hover:via-[#014761] hover:to-[#007EAC]
        active:from-[#26B9EF] active:via-[#1A92BE] active:to-[#2DBDF2]
        
        ${className}
      `}
    >
      <img
        src="/images/common/1xbookappticon.svg"
        alt="Book Timeslot icon"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
      Book Appointment
    </button>
  );
};

export default BookAppointmentButton;