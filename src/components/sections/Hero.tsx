import BookAppointmentButton from "@/components/common/BookAppointmentButton";
import WhatsAppUsButton from "@/components/common/WhatsAppUsButton";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-dental-light to-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <img
          src="/images/common/short-logo-wo-name.svg"
          alt="Padmanaabh Dental Clinic & Implant Centre"
          className="w-25 h-auto mb-8 rounded-lg shadow-lg"
        />
        <h1 className="font-display text-5xl md:text-6xl font-bold text-dental-dark mb-6">
          Padmanaabh Dental Clinic
          <span className="block text-dental-primary">& Implant Centre</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Your smile is our priority. Experience world-class dental care with state-of-the-art 
          technology and compassionate specialists dedicated to your oral health.
        </p>
        
          <BookAppointmentButton />
          <WhatsAppUsButton />
        
      </div>
    </section>
  );
}