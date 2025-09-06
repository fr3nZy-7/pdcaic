interface WhatsAppButtonProps {
  onClick?: () => void;
}

const WhatsAppButton = ({ onClick }: WhatsAppButtonProps) => {
  return (
    <div
      className="
        p-[2px] rounded-full
        bg-gradient-to-r from-[#007099] via-[#02739D] to-[#00ABDA]
      "
    >
      <button
        onClick={onClick}
        className="
          flex items-center gap-2
          rounded-full font-semibold
          bg-white shadow-md transition-all duration-200
          
          px-4 py-2 text-sm
          sm:px-6 sm:py-3 sm:text-base
          md:px-8 md:py-4 md:text-lg
          
          hover:bg-[#E6F8FF]
          active:bg-[#FFFFFF]
          text-[#007099]   /* text color */
        "
      >
        <img
          src="/images/common/1xwhatsapp-icon.svg"
          alt="WhatsApp icon"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        WhatsApp Us!
      </button>
    </div>
  );
};

export default WhatsAppButton;
