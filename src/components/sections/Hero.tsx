import BookAppointmentButton from "@/components/common/BookAppointmentButton";
import WhatsAppUsButton from "@/components/common/WhatsAppUsButton";
import GlassCard from "@/components/common/GlassCard";

export default function Hero() {
  return (
    <section
  className="relative bg-cover bg-center bg-no-repeat min-h-screen py-32 px-4"
  style={{ backgroundImage: "url('/images/bg.jpg')" }}
>
  {/* Optional overlay for better text readability */}
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="relative max-w-6xl mx-auto text-center">
    <GlassCard className="p-10 max-w-4xl mx-auto">
      <h1 className="font-display text-5xl md:text-6xl font-bold text-dental-dark mb-6">
        Padmanaabh Dental Clinic
        <span className="block text-dental-primary">& Implant Centre</span>
      </h1>

      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Your smile is our priority. Experience world-class dental care with
        state-of-the-art technology and compassionate specialists dedicated to
        your oral health.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <BookAppointmentButton />
        <WhatsAppUsButton />
      </div>
    </GlassCard>
  </div>
</section>

  );
}
