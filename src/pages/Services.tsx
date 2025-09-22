import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { 
  Stethoscope, 
  Zap, 
  Star, 
  Shield, 
  Heart,
  Smile,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  ChevronLeft
} from "lucide-react";
import dentalImplantImage from "@/assets/dental-implant.jpg";
import path from "path";
import { services } from "@/data/services";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import WhatsAppUsButton from "@/components/WhatsAppUsButton";
import BookAppointmentButton from "@/components/BookAppointmentButton";
import FooterCTA from "@/components/FooterCTA";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import HeroSection from "@/components/HeroSection";

const servicesHeroData = {
  title: "Comprehensive Dental Services",
  shortDescription: "From routine cleanings to complex procedures, we offer complete dental care using the latest technology and techniques to ensure optimal oral health.",
  heroImage: "/images/services/services.jpg",
  subHeroImage: "/images/common/allservicegrid.jpg"
};

const Services = () => {
  

  const treatmentProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Comprehensive examination and treatment planning"
    },
    {
      step: "2", 
      title: "Detailed Diagnosis",
      description: "Advanced imaging and precise diagnosis of your condition"
    },
    {
      step: "3",
      title: "Treatment Plan",
      description: "Customized treatment approach tailored to your needs"
    },
    {
      step: "4",
      title: "Quality Treatment",
      description: "Professional care using state-of-the-art technology"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
        <HeroSection
        breadcrumbLink="/"
        breadcrumbLabel="Home"
        title={servicesHeroData.title}
        description={servicesHeroData.shortDescription}
        backgroundImage={servicesHeroData.heroImage}
        overlayGradient="from-[#23AAB9]/40 to-[#0194C1]/40"
        titleColor="text-shade"
        descriptionColor="text-shade/90"
        align="left"
      >
        <>
          <WhatsAppUsButton className="w-full"/>
          <BookAppointmentButton />
        </>
      </HeroSection>



 
{/* All Services Grid */}
<section
  className="py-16 text-shade/90 bg-white/20"
  style={{
    backgroundImage: `url(${servicesHeroData.subHeroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay",
  }}
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <GlassmorphismCard
          key={service.slug}
          className="bg-white/40 backdrop-blur-3xl shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
        >
         {/* Square Image Container (slightly bigger than carousel) */}
        {service.infographicImages && (
          <div className="mx-auto w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mt-6 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={service.infographicImages}
              alt={service.title}
              className="w-full h-full object-contain"
            />
          </div>
        )}

          {/* Service Content */}
          <div className="p-2 flex-1 flex flex-col">
            <ServiceCard
              title={service.title}
              description={service.shortDescription}
              features={service.features}
              path={`/services/${service.slug}`}
            />
          </div>
        </GlassmorphismCard>
      ))}
    </div>
  </div>
</section>

    

      {/* Treatment Process */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">Our Treatment Process</h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              We follow a systematic approach to ensure you receive the best possible dental care 
              with comfort and peace of mind throughout your treatment journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentProcess.map((process, index) => (
              
              <Card key={index} className="text-center  bg-[#00ABDA]/30 backdrop-blur-2xl shadow-lg hover:shadow-lg transition-shadow p-4 backdrop-blur-2xl hover:scale-105">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-shade font-bold text-xl">{process.step}</span>
                  </div>
                  <CardTitle className="text-lg text-shade">{process.title}</CardTitle>
                  <CardDescription className="text-black/80">{process.description}</CardDescription>
                </CardHeader>
              </Card>
              
            ))}
          </div>
        </div>
      </section>

      <FloatingActionButtons />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Services;