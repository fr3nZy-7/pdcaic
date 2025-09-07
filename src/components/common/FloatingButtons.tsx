'use client';

import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const handleCallClick = () => {
    window.open('tel:+917507325539', '_self');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to book an appointment at Padmanaabh Dental Clinic.');
    const whatsappUrl = `https://wa.me/917507325539?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      zIndex: 1000
    }}>
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
          transition: 'all 0.3s ease',
          transform: 'scale(1)'
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLButtonElement).style.transform = 'scale(1.1)';
          (e.target as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.4)';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.transform = 'scale(1)';
          (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
        }}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle 
          size={24} 
          color="white" 
          style={{ pointerEvents: 'none' }}
        />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCallClick}
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#007099',
          borderRadius: '50%',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 112, 153, 0.3)',
          transition: 'all 0.3s ease',
          transform: 'scale(1)'
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLButtonElement).style.transform = 'scale(1.1)';
          (e.target as HTMLButtonElement).style.backgroundColor = '#00ABDA';
          (e.target as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(0, 171, 218, 0.4)';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.transform = 'scale(1)';
          (e.target as HTMLButtonElement).style.backgroundColor = '#007099';
          (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0, 112, 153, 0.3)';
        }}
        aria-label="Call us now"
      >
        <Phone 
          size={24} 
          color="white" 
          style={{ pointerEvents: 'none' }}
        />
      </button>
    </div>
  );
};

export default FloatingButtons;