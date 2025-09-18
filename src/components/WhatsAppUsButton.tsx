interface WhatsAppUsButtonProps {
  onClick?: () => void;
  className?: string;
}

const WhatsAppUsButton = ({ onClick, className = "" }: WhatsAppUsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2
        rounded-full font-semibold font-heading
        bg-white shadow-md transition-all duration-200
        
        px-4 py-2 text-sm           
        sm:px-6 sm:py-3 sm:text-base 
        md:px-7 md:py-3 md:text-md
        
        hover:bg-[#E6F8FF]
        active:bg-[#FFFFFF]
        text-[#007099]   /* text color */
        
        ${className}
      `}
    >
      <img
        src="/images/common/1xwhatsapp-icon.svg"
        alt="WhatsApp icon"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
      WhatsApp Us!
    </button>
  );
};

export default WhatsAppUsButton;