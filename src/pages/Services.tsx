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

const servicesHeroData = {
  title: "Comprehensive Dental Services",
  shortDescription: "From routine cleanings to complex procedures, we offer complete dental care using the latest technology and techniques to ensure optimal oral health.",
  heroImage: "/images/services/services.jpg",
  subHeroImage: "/images/services/all-service-grid.jpg"
};

const Services = () => {
  const allServices = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, extractions, and preventive treatments for optimal oral health.",
      icon: <Stethoscope className="h-8 w-8" />,
      features: ["Regular Cleanings", "Dental Fillings", "Tooth Extractions", "Fluoride Treatments"],
      path: "/services/general-dentistry"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth with titanium implants.",
      icon: <Zap className="h-8 w-8" />,
      features: ["Single Tooth Implants", "Multiple Implants", "Full Mouth Reconstruction", "Implant-Supported Dentures"],
      path: "/services/dental-implants"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with professional teeth whitening, veneers, bonding, and complete smile makeovers.",
      icon: <Star className="h-8 w-8" />,
      features: ["Teeth Whitening", "Porcelain Veneers", "Dental Bonding", "Smile Makeovers"],
      path: "/services/cosmetic-dentistry"
    },
    {
      title: "Root Canal Treatment",
      description: "Advanced endodontic therapy to save infected or damaged teeth while eliminating pain and preserving natural teeth.",
      icon: <Shield className="h-8 w-8" />,
      features: ["Single Visit RCT", "Retreatment", "Apicoectomy", "Pulp Therapy"],
      path: "/services/root-canal"
    },
    {
      title: "Orthodontics",
      description: "Straighten teeth and correct bite issues with traditional braces, clear aligners, and modern orthodontic solutions.",
      icon: <Smile className="h-8 w-8" />,
      features: ["Metal Braces", "Ceramic Braces", "Clear Aligners", "Retainers"],
      path: "/services/orthodontics"
    },
    {
      title: "Oral Surgery",
      description: "Surgical procedures including wisdom tooth removal, corrective jaw surgery, and advanced oral surgical treatments.",
      icon: <Heart className="h-8 w-8" />,
      features: ["Wisdom Tooth Removal", "Jaw Surgery", "Bone Grafting", "Soft Tissue Surgery"],
      path: "/services/oral-surgery"
    },
    {
      title: "Periodontal Treatment",
      description: "Treatment of gum disease and maintenance of healthy gums through scaling, root planing, and surgical interventions.",
      icon: <Users className="h-8 w-8" />,
      features: ["Deep Cleaning", "Gum Surgery", "Pocket Reduction", "Tissue Regeneration"],
      path: "/services/periodontal-treatment"
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children and teenagers in a comfortable, child-friendly environment.",
      icon: <Award className="h-8 w-8" />,
      features: ["Children's Cleanings", "Dental Sealants", "Fluoride Treatments", "Early Orthodontics"],
      path: "/services/pediatric-dentistry"
    },
    {
      title: "Emergency Dental Care",
      description: "Immediate dental care for urgent situations including severe pain, trauma, and dental emergencies.",
      icon: <Shield className="h-8 w-8" />,
      features: ["24/7 Emergency Care", "Pain Relief", "Trauma Treatment", "Urgent Repairs"],
      path : "/services/emergency-dental-care"
    },
  ];

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
      
      {/* Hero Section */}

      <section
        className="relative bg-gradient-to-br from-[#00ABDA] to-[#4DD0E1] min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${servicesHeroData.heroImage})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#23AAB9] to-[#0194C1]/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          {/* Breadcrumb */}
          <Link 
            to="/" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Home
          </Link>

          {/* Hero Content  */}
          <div className="max-w-3xl mx-auto text-center ">
            <GlassmorphismCard className="p-8 md:p-12 bg-white/40 backdrop-blur-2xl shadow-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {servicesHeroData.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                {servicesHeroData.shortDescription}
              </p>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppUsButton />
                <BookAppointmentButton />
              </div>
            </GlassmorphismCard>
          </div>
        </div>
      </section>


    

      {/* All Services Grid */}
      <section
      className="py-20 relative inset-0 bg-gradient-to-br from-blue-900 to-cyan-500/50"
      style={{
        backgroundImage: `url(${servicesHeroData.subHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="grid grid-cols-3 gap-8">
        {/* Ensure you have exactly 9 service items for a 3x3 grid */}
        {services.map((service) => (
          <ServiceCard 
            key={service.slug}
            title={service.title}
            description={service.shortDescription}
            iconPath={service.iconPath}
            features={service.features}
            path={`/services/${service.slug}`}
          />
        ))}
      </div>
    </section>

      {/* Treatment Process */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Treatment Process</h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              We follow a systematic approach to ensure you receive the best possible dental care 
              with comfort and peace of mind throughout your treatment journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentProcess.map((process, index) => (
              
              <Card key={index} className="text-center  bg-primary/30 backdrop-blur-2xl shadow-lg hover:shadow-lg transition-shadow p-4 backdrop-blur-2xl hover:scale-105">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/40 rounded-full flex items-center justify-center">
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

      
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Services;