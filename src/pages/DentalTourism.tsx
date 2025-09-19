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
    MessageCircle,
    ChevronLeft,
    ChevronRight,
    Monitor,
    Route,
    Plane,
    Building2,
    Activity,
    Heart
  } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import GlassmorphismCard from '@/components/GlassmorphismCard';
import WhatsAppUsButton from '@/components/WhatsAppUsButton';
import BookAppointmentButton from '@/components/BookAppointmentButton';
import FloatingActionButtons from "@/components/FloatingActionButtons";
import { features } from "process";
import FooterCTA from "@/components/FooterCTA";
import HeroSection from "@/components/HeroSection";

const dentalTourismHeroData = {
    title: "Dental Tourism",
    shortDescription: "Save up tp 70& on premium dental treatments while experiencing international quality care and hospitality.",
    heroImage: "/images/services/dental-tourism.jpg", 
    journeyImage: "/images/common/footer-cta-bg.jpg",
    detailedContent: {
        mainTitle: "Why Choose us in India?",
        mainDescription: "Experience world-class dental care combined with the opportunity to explore beautiful destinations. Our dental tourism services offer high-quality treatments at affordable prices, all while enjoying a memorable travel experience.",
        heroContentImage: "/images/services/dental-tourism-2.png"
    },
    features: [
        {
            icon: "/images/icons/expert-specialist.svg",
            title: "Expert and Quality Care",
            description: "Top-notch dental services with international standards."
        },
        {
            icon: "/images/icons/flight-international.svg",
            title: "International Patient Care",
            description: "Dedicated English-speaking staff and personalized assistance."
        },
        {
            icon: "/images/icons/card-pricing.svg",
            title: "Transparent Pricing",
            description: "Clear cost breakdown with no hidden charges/fees."
        },
        {
            icon: "/images/icons/bx_clinic-facility.svg",
            title: "Modern Facilities",
            description: "State-of-the-art clinic equipped with the latest technology and modern sterilization protocol."
        }
    ]
};

const priceComparisonData = [
    {
        treatment: "Dental Implants",
        indiaPrice: "$800",
        foreignPrice: "$3000",
        savings: "73%",
        savingsColor: "#007286"
    },
    {
        treatment: "Full Smile Makeover",
        indiaPrice: "$3500",
        foreignPrice: "$12000",
        savings: "70%",
        savingsColor: "#00C59E"
    },
    {
        treatment: "Root Canal",
        indiaPrice: "$200",
        foreignPrice: "$1000",
        savings: "80%",
        savingsColor: "#00FFFF"
    },
    {
        treatment: "Dental Crown",
        indiaPrice: "$300",
        foreignPrice: "$1200",
        savings: "75%",
        savingsColor: "#007286"
    }
];

const treatmentJourneySteps = [
    {
        icon: "/images/icons/virtual-consult.svg",
        title: "Virtual Consultation",
        step: 1
    },
    {
        icon: Route,
        title: "Treatment Plan",
        step: 2
    },
    {
        icon: Plane,
        title: "Travel",
        step: 3
    },
    {
        icon: Building2,
        title: "Arrival and Welcome",
        step: 4
    },
    {
        icon: Activity,
        title: "Treatment",
        step: 5
    },
    {
        icon: Heart,
        title: "Follow-up Care",
        step: 6
    }
];

const DentalTourism = () => {
    return (
        <div className="min-h-screen bg-background">
          <Header />
          
          <HeroSection
          breadcrumbLink="/"
          breadcrumbLabel="Home"
          title={dentalTourismHeroData.title}
          description={dentalTourismHeroData.shortDescription}
          backgroundImage={dentalTourismHeroData.heroImage}
          overlayGradient="from-[#23AAB9]/40 to-[#0194C1]/40"
          titleColor="text-shade"
          descriptionColor="text-shade/90"
          align="left"
        >
          <>
            <WhatsAppUsButton />
            <BookAppointmentButton />
          </>
        </HeroSection>


          {/* Dental Tourism Features Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    {dentalTourismHeroData.detailedContent.mainTitle}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {dentalTourismHeroData.detailedContent.mainDescription}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {dentalTourismHeroData.features.map((feature, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-xl">
                        <img 
                          src={feature.icon} 
                          alt={feature.title}
                          className="w-12 h-12 mb-3"
                        />
                        <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                        {feature.description && (
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative h-80 lg:h-full bg-gradient-to-br from-[#00ABDA] to-[#4DD0E1] rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={dentalTourismHeroData.detailedContent.heroContentImage || '/images/common/placeholder.svg'}
                    alt={dentalTourismHeroData.title}
                    className="h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Price Comparison Section */}
          <section 
            className="py-20 relative overflow-hidden"
            style={{
              backgroundImage: 'url(/images/common/clinic-generic.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}
          >

            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#23AAB9] to-[#0194C1]/20"></div> */}
            

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-shade mb-6">
                  Affordable World-Class Treatment
                </h2>
                <p className="text-lg md:text-xl text-black/80 max-w-4xl mx-auto">
                  Compare our prices with US/UK rates and save significantly while receiving the same quality care
                </p>
              </div>

              {/* Price Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {priceComparisonData.map((item, index) => (
                    <GlassmorphismCard key={index} className="p-8 text-white bg-shade/40">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                        {item.treatment}
                    </h3>

                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center">
                        <span className="text-lg">India price :</span>
                        <span className="text-2xl font-bold text-[#00FFFF]">
                            {item.indiaPrice}
                        </span>
                        </div>
                        <div className="flex justify-between items-center">
                        <span className="text-lg">UK/US Price :</span>
                        <span className="text-2xl line-through ">{item.foreignPrice}</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl py-4 px-6 text-center">
                        <span
                        className="text-2xl md:text-3xl font-bold text-shade"
                        >
                        You Save <span 
                            style={{ color: "#00C59E" }}
                        >{item.savings}</span>
                        </span>
                    </div>
                    </GlassmorphismCard>
                ))}
                </div>
            </div>
          </section>

          {/* Treatment Journey Section */}
          <section className="relative bg-gradient-to-br from-[#00ABDA] to-[#4DD0E1] min-h-[70vh] flex items-center"
           style={{
            backgroundImage: `url(${dentalTourismHeroData.journeyImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#23AAB9] to-[#0194C1]/20"></div>
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Your Treatment Journey
                </h2>
                <p className="text-lg md:text-xl text-white/90">
                  Comprehensive Dental Care Tailored for You
                </p>
              </div>

              {/* Journey Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {treatmentJourneySteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="relative mb-8">
                        {/* Icon Container */}
                        <div className="w-24 h-24 mx-auto bg-white/30 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/30 shadow-lg">
                          <IconComponent className="h-12 w-12 text-white" />
                        </div>
                        
                        
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                    </div>
                  );
                })}
              </div>

              
              
            </div>
          </section>

          {/* Explore Services CTA Section */}
          <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      Explore Our Comprehensive Services
                    </h2>
                    <p className="text-lg text-[#00ABDA] mb-8">
                      Discover the range of treatments we offer to enhance your dental health and smile.
                    </p>
                    
                    <a href="/services" className="inline-block">
                    <button
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      View All Services
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                    </a>
                  </div>

                  {/* Image */}
                  <div className="relative h-80 lg:h-full">
                    <img
                      src="/images/common/happy-girl.jpg"
                      alt="Happy patient pointing to smile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FloatingActionButtons />
          <FooterCTA/>
          <Footer />
        </div>
    );
};

export default DentalTourism;