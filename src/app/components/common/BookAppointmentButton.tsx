const BookAppointmentButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center gap-2   /* NEW → aligns icon + text */

        rounded-full font-semibold text-white
        bg-gradient-to-b from-[#00ABDA] via-[#02739D] to-[#00ABDA]
        shadow-md transition-all duration-200

        px-4 py-2 text-sm           /* base (mobile) */
        sm:px-6 sm:py-3 sm:text-base /* small screens and up */
        md:px-8 md:py-4 md:text-lg   /* medium screens and up */

        hover:from-[#007EAC] hover:via-[#014761] hover:to-[#007EAC]
        active:from-[#26B9EF] active:via-[#1A92BE] active:to-[#2DBDF2]
      "
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
