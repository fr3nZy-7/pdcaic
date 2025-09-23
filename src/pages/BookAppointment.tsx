import React, { useState } from 'react';
import { Calendar, Phone, MapPin, Clock, CheckCircle2, Star, Stethoscope } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import { CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { BookingSuccess } from '@/types/booking';
import FloatingActionButtons from '@/components/FloatingActionButtons';

const BookAppointment: React.FC = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingSuccess | null>(null);

  const handleBookingSuccess = (data: BookingSuccess) => {
    setBookingDetails(data);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 10000);
  };

  

  // Static services for sidebar display only
  const services = [
    { name: "Consultation", duration: "30 minutes", description: "Initial consultation and dental examination", icon: Stethoscope },
    { name: "Treatments", duration: "60 minutes", description: "Dental treatment using Advanced treatments", icon: Star },
    { name: "Follow-up Visit", duration: "30 minutes", description: "Post-treatment check-up and care", icon: CheckCircle2 },
    { name: "Video Consultation", duration: "45 minutes", description: "Online consultation and guidance", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shade">Book Your Appointment</h1>
            <p className="text-xl text-black/80 mb-8">Schedule your visit with Pune's leading endodontist</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: "Years Experience", value: "10+" },
                { label: "Happy Patients", value: "5000+" },
                { label: "Success Rate", value: "98%" },
                { label: "Response Time", value: "< 1hr" }
              ].map((stat, i) => (
                <GlassmorphismCard key={i} className="p-4 text-center">
                  <div className="text-2xl font-bold text-shade">{stat.value}</div>
                  <div className="text-sm text-black/70">{stat.label}</div>
                </GlassmorphismCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {showSuccessMessage && bookingDetails && (
        <section className="py-8 bg-green-50">
          <div className="container mx-auto px-4">
            <GlassmorphismCard className="max-w-2xl mx-auto p-6 bg-green-100/80 border-green-200">
              <div className="text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Appointment Booked Successfully!</h3>
                <p className="text-green-700 mb-4">{bookingDetails.message}</p>
                <div className="text-sm text-green-600">Booking ID: {bookingDetails.appointmentId}</div>
                <Button onClick={() => setShowSuccessMessage(false)} className="mt-4 bg-green-600 hover:bg-green-700">Dismiss</Button>
              </div>
            </GlassmorphismCard>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="relative bg-gradient-to-br from-[#23AAB9]/20 to-[#0194C1]/40 min-h-[70vh] flex items-center py-20"
          style={{
          backgroundImage: `url(/images/common/background.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
          
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <BookingForm onSuccess={handleBookingSuccess} />
               


              </div>

              {/* Sidebar Information */}
              <div className="space-y-6">

              <GlassmorphismCard className="p-6 bg-primary/20 backdrop-blur-2xl">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl font-bold text-shade">Available Services</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      {services.map((service, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                          <service.icon className="h-5 w-5 text-shade mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-medium text-shade text-sm">{service.name}</h4>
                            <p className="text-xs text-black/70 mb-1">{service.description}</p>
                            <span className="text-xs text-primary font-medium">{service.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </GlassmorphismCard>

                <GlassmorphismCard className="p-6 bg-yellow-50/80 backdrop-blur-2xl border-yellow-200">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-lg font-bold text-yellow-800">Important Notes</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li className="flex items-start gap-2"><span className="block w-1 h-1 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span><span>Please arrive 10 minutes before your appointment</span></li>
                      <li className="flex items-start gap-2"><span className="block w-1 h-1 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span><span>Bring your previous dental records if available</span></li>
                      <li className="flex items-start gap-2"><span className="block w-1 h-1 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span><span>Emergency appointments available on call</span></li>
                      <li className="flex items-start gap-2"><span className="block w-1 h-1 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span><span>Clinic is closed on Sundays. Appointments only</span></li>
                    </ul>
                  </CardContent>
                </GlassmorphismCard>

                
               

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-shade/80">Why Choose Dr. Neha?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Star, title: "Expert Specialist", description: "MDS in Endodontics with 10+ years of experience in root canal treatments" },
                { icon: CheckCircle2, title: "Advanced Technology", description: "State-of-the-art equipment and modern treatment techniques" },
                { icon: Calendar, title: "Flexible Scheduling", description: "Easy online booking with multiple time slots available daily" }
              ].map((feature, i) => (
                <GlassmorphismCard key={i} className="p-6 text-center bg-white/80">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-shade mb-2">{feature.title}</h3>
                  <p className="text-black/70 text-sm">{feature.description}</p>
                </GlassmorphismCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FloatingActionButtons />
      <Footer />
    </div>
  );
};

export default BookAppointment;
