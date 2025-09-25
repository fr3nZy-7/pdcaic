// src/pages/Contact.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2, // Import loader icon for visual feedback
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import GlassmorphismCard from '@/components/GlassmorphismCard';
import WhatsAppUsButton from '@/components/WhatsAppUsButton';
import BookAppointmentButton from '@/components/BookAppointmentButton';
import FloatingActionButtons from "@/components/FloatingActionButtons";
import HeroSection from "@/components/HeroSection";
import { supabase } from "@/integrations/supabase/client"; 
import { Helmet } from "react-helmet-async";

const contactHeroData = {
  title: "Contact Us",
  shortDescription: "We're here to help you with all your dental needs. Reach out to us and we'll be happy to assist you in scheduling an appointment or answering any questions you may have.",
  heroImage: "/images/common/contact-us.jpg", 
  pageBackground: "/images/common/contact-section.jpg", 
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // <-- ADD LOADING STATE

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // --- MODIFIED HANDLE SUBMIT FUNCTION ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('inquiries') // Your table name
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            // 'status' will use its default value from the DB
          }
        ]);

      if (error) {
        throw error; // If Supabase returns an error, throw it to the catch block
      }
      
      // On success
      toast({
        title: "Message Sent! ✅",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      // On failure
      toast({
        variant: "destructive",
        title: "Submission Failed ❌",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false); // Stop loading state regardless of outcome
    }
  };

  return (
    <>
    <Helmet>
  <title>Contact Padmanaabh Dental Clinic and Implant Centre | Pune</title>
  <meta
    name="description"
    content="Get in touch with Padmanaabh Dental Clinic and Implant Centre in Pune. Call, WhatsApp, or visit us at Lohegaon for expert dental care."
  />
  <link rel="canonical" href="https://padmanaabhdental.clinic/contact" />
  <meta property="og:title" content="Contact Padmanaabh Dental Clinic | Pune" />
  <meta property="og:description" content="Reach Padmanaabh Dental Clinic in Pune for appointments, directions, and patient support." />
  <meta property="og:url" content="https://padmanaabhdental.clinic/contact" />
  <meta property="og:image" content="https://padmanaabhdental.clinic/images/common/og-contact.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "https://padmanaabhdental.clinic/contact#page",
        "mainEntity": { "@id": "https://padmanaabhdental.clinic/#dentist" }
      }),
    }}
  />
</Helmet>







    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        breadcrumbLink="/"
        breadcrumbLabel="Home"
        title={contactHeroData.title}
        description={contactHeroData.shortDescription}
        backgroundImage={contactHeroData.heroImage}
        overlayGradient="from-[#23AAB9]/20 to-[#0194C1]/20"
        titleColor="text-shade"
        descriptionColor="text-black/70"
        align="left"
      >
        <>
          <WhatsAppUsButton className="w-full"/>
          <BookAppointmentButton />
        </>
      </HeroSection>

      <section className="py-20 " style={{
          backgroundImage: `url(${contactHeroData.pageBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* ... Your contact information cards remain the same ... */}
            <GlassmorphismCard className="text-center hover:shadow-lg transition-shadow p-4 backdrop-blur-2xl bg-white/40 hover:scale-105">
                    <CardHeader className="pb-2">
                        <div className="mx-auto mb-2 w-16 h-16 rounded-full flex items-center justify-center">
                            <MapPin className="h-8 w-8 text-shade" />
                        </div>
                        <CardTitle className="text-lg text-shade">Address</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <p className="text-black/90 text-md">
                            Padmanaabh Dental Clinic and Implant Centre<br />
                            Lane No. 1 Sainik Colony<br />
                            Pathare Wasti, Lohegaon<br />
                            Pune, Maharashtra, India
                        </p>
                    </CardContent>
                </GlassmorphismCard>
            
            

                <GlassmorphismCard className="text-center hover:shadow-lg transition-shadow p-4 backdrop-blur-2xl bg-white/40 hover:scale-105">
                    <CardHeader className="pb-2">
                        <div className="mx-auto mb-2 w-16 h-16 rounded-full flex items-center justify-center">
                            <Phone className="h-8 w-8 text-shade" />
                        </div>
                        <CardTitle className="text-lg text-shade">Phone</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <p className="text-black/90 text-md mb-2">
                            Primary: +91 7507 325 539
                        </p>
                        <p className="text-black/90 text-md">
                            Emergency: +91 9423 581 305
                        </p>
                    </CardContent>
                </GlassmorphismCard>

                <GlassmorphismCard className="text-center hover:shadow-lg transition-shadow p-4 backdrop-blur-2xl bg-white/40 hover:scale-105">
                    <CardHeader className="pb-2">
                        <div className="mx-auto mb-2 w-16 h-16 rounded-full flex items-center justify-center">
                            <Mail className="h-8 w-8 text-shade" />
                        </div>
                        <CardTitle className="text-lg text-shade">Email</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <p className="text-black/90 text-lg">
                            nehaendo2019@gmail.com
                        </p>
                    </CardContent>
                </GlassmorphismCard>

                <GlassmorphismCard className="text-center hover:shadow-lg transition-shadow p-4 backdrop-blur-2xl bg-white/40 hover:scale-105">
                    <CardHeader className="pb-2">
                        <div className="mx-auto mb-2 w-16 h-16 rounded-full flex items-center justify-center">
                            <Clock className="h-8 w-8 text-shade" />
                        </div>
                        <CardTitle className="text-lg text-shade">Hours</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <div className="text-black/90 text-md space-y-1">
                            <div className="flex justify-between">
                                <span>Mon-Fri:</span>
                                <span>10:00 AM - 8:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Saturday:</span>
                                <span>10:00 AM - 8:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday:</span>
                                <span>By Appointment</span>
                            </div>
                        </div>
                    </CardContent>
                </GlassmorphismCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <GlassmorphismCard className="text-center hover:shadow-lg transition-shadow p-4 backdrop-blur-2xl bg-white/40">
              <CardHeader>
                <CardTitle className="text-3xl text-shade">Send us a Message</CardTitle>
                <p className="text-shade text-xl">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* ... Your form inputs remain the same ... */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-shade text-lg">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2 text-shade text-lg">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-shade text-lg">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9999999999"
                      />
                    </div>
                    <div className="space-y-2 text-shade text-lg">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Appointment Request"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-shade text-2xl">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please describe your dental needs or any questions you have..."
                      rows={4}
                    />
                  </div>
                  {/* --- MODIFIED SUBMIT BUTTON --- */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 mt-4 justify-center"
                    disabled={isSubmitting} // <-- Disable button while submitting
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </GlassmorphismCard>

            {/* ... Your map and other cards remain the same ... */}
                <div className="space-y-6">
              {/* Map Placeholder */}
              <GlassmorphismCard className="text-center hover:shadow-lg transition-shadow p-4 backdrop-blur-2xl bg-white/40">
                <CardHeader>
                  <CardTitle className="text-primary text-shade text-3xl">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                     {/* Google Maps Embed */}
                  <div className="relative w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0963574982745!2d73.93091212485284!3d18.601984287134454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7808313ef37%3A0x853c2d5523f36605!2sPadmanaabh%20Dental%20Clinic%26Implant%20Centre%3A%20Best%20Dentist%20In%20Lohegaon-Best%20Rootcanal%20RCT%20Doctor%20Dental%20clinic%20In%20Lohegaon!5e0!3m2!1sen!2sin!4v1709234567890!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Padmanaabh Dental Clinic Location"
                      className="absolute inset-0"
                    />
                  </div>
                  
                  {/* Directions Button */}
                  <a
                  href="https://www.google.com/maps/place/Padmanaabh+Dental+Clinic%26Implant+Centre:+Best+Dentist+In+Lohegaon-Best+Rootcanal+RCT+Doctor+Dental+clinic+In+Lohegaon/@18.601987,73.930912,17z/data=!4m6!3m5!1s0x3bc2c7808313ef37:0x853c2d5523f36605!8m2!3d18.6019842!4d73.9335108!16s%2Fg%2F11rjz2t54r?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 mt-4 justify-center"
                  >
                  <MapPin className="h-5 w-5" />
                  <span>Get Directions</span>
                </a>

                </CardContent>
              </GlassmorphismCard>

              {/* Quick Actions */}

              
                
              <GlassmorphismCard className="text-center hover:shadow-lg transition-shadow p-2 backdrop-blur-2xl bg-white/40">
                <CardHeader>
                  <CardTitle className="text-shade text-3xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  <BookAppointmentButton className=" w-full justify-center"/>
                  <WhatsAppUsButton className="w-full justify-center" onClick={() => window.open('https://wa.me/917507325539', '_blank')}/>
                  <div className="bg-white/40 backdrop-blur-2xl p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-lg text-shade">Emergency Dental Care</h4>
                    <p className=" text-shade text-lg mb-2">
                      For dental emergencies outside business hours, please call our emergency line.
                    </p>
                    
                    <a
                        href="tel:+919423581305"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-300 to-red-400 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 mt-4 justify-center"
                    >
                        <Phone className="h-5 w-5 mr-2" />
                        <span>Emergency: +91 9423 581 305</span>
                    </a>
                  </div>
                </CardContent>
              </GlassmorphismCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-50">
      {/* ... FAQ Section remains the same ... */}
      <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shade">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
            Check out our frequently asked questions for quick answers to common inquiries.
          </p>
          <a
                  href="/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 mt-4 justify-center"
                  >
                  <MapPin className="h-5 w-5" />
                  <span>View FAQs</span>
                </a>
        </div>
      </section>

      <FloatingActionButtons />
    </div>
    </>
  );
};

export default Contact;