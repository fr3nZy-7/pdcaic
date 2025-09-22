import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import CalcomWidget from '@/components/CalcomWidget';
import { Calendar, Clock, Stethoscope } from 'lucide-react';

// Assuming GlassmorphismCard is a component that provides the glassmorphism styling
// Make sure you import it if it's a separate component you want to use.
// If not, we'll apply the styles directly.
// For this example, I'll apply the styles directly to demonstrate.
// If you have a GlassmorphismCard component, you can adapt it.
// import GlassmorphismCard from '@/components/GlassmorphismCard'; // Uncomment if using

const BookAppointment = () => {
  const [slug, setSlug] = useState('dental-appointment');
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const eventSlugFromUrl = params.get('eventSlug');
    if (eventSlugFromUrl) {
      setSlug(eventSlugFromUrl);
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Slim, custom hero section with glassmorphism for content */}
      <section 
        className="relative bg-cover bg-center py-8 md:py-12 lg:py-16" // Adjusted padding for better vertical spacing
        style={{ backgroundImage: 'url(/images/common/allservicegrid.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0194C1]/60 to-[#23AAB9]/60"></div>
        <div className="container relative z-10 mx-auto px-4 text-left">
          {/* Glassmorphism Card for the Hero Content */}
          <div 
            className="bg-white/50 backdrop-blur-3xl rounded-xl p-6 md:p-8 shadow-lg max-w-xl mx-auto md:mx-0"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-shade">Book An Appointment</h1>
            <p className="text-lg text-black/80 mb-4">
              Schedule your visit with Dr. Neha at your convenience.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-black/80 font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-shade" />
                <span>Easy Online Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-shade" />
                <span>Flexible Time Slots</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-shade" />
                <span>Professional Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-50 -mt-20 md:-mt-24 lg:-mt-28">
        <div className="container mx-auto px-4">
          <CalcomWidget eventSlug={slug} />
        </div>
      </section>

      <FloatingActionButtons />
      <Footer />
    </div>
  );
};

export default BookAppointment;