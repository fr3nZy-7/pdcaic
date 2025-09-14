import { Phone, MessageCircle } from "lucide-react";

const FloatingActionButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Call Button */}
      <a
        href="tel:+919999999999"
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 group"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-white" />
      </a>
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 group"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </div>
  );
};

export default FloatingActionButtons;