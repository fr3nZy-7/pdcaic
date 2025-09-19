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
    ChevronRight
  } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import GlassmorphismCard from '@/components/GlassmorphismCard';
import WhatsAppUsButton from '@/components/WhatsAppUsButton';
import BookAppointmentButton from '@/components/BookAppointmentButton';
import FloatingActionButtons from "@/components/FloatingActionButtons";
import { features } from "process";
import FooterCTA from "@/components/FooterCTA";

const dentalTourismHeroData = {
    title: "Dental Tourism",
    shortDescription: "Save up tp 70& on premium dental treatments while experiencing international quality care and hospitality.",
    heroImage: "/images/services/dental-tourism.jpg", 
    detailedContent: {
        mainTitle: "Why Choose us in India?",
        mainDescription: "Experience world-class dental care combined with the opportunity to explore beautiful destinations. Our dental tourism services offer high-quality treatments at affordable prices, all while enjoying a memorable travel experience.",
        heroContentImage: "/images/services/dental-tourism-2.png"
    },
    features: [
        {
            icon: "/icons/quality-care.svg",
            title: "Expert and Quality Care",
            description: "Top-notch dental services with international standards."
        },
        {
            icon: "/icons/affordable-prices.svg",
            title: "International Patient Care",
            description: "Dedicated English-speaking staff and personalized assistance."
        },
        {
            icon: "/icons/expert-dentists.svg",
            title: "Transparent Pricing",
            description: "Clear cost breakdown with no hidden charges/fees."
        },
        {
            icon: "/icons/modern-facilities.svg",
            title: "Modern Facilities",
            description: "State-of-the-art clinic equipped with the latest technology and modern sterilization protocol."
        }
    ]
    
  };

  const DentalTourism = () => {

    return (
        <div className="min-h-screen bg-background">
          <Header />
          
          {/* Hero Section - UPDATED */}
          <section
            className="relative bg-gradient-to-br from-[#00ABDA] to-[#4DD0E1] min-h-[70vh] flex items-center"
            style={{
              backgroundImage: `url(${dentalTourismHeroData.heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 "></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
              {/* Breadcrumb */}
              <Link 
                to="/" 
                className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Home
              </Link>
    
              {/* Hero Content */}
              <div className="max-w-3xl mx-auto text-center">
                <GlassmorphismCard className="p-8 md:p-12 backdrop-blur-3xl bg-white/30">
                  <h1 className="text-3xl md:text-5xl font-bold text-shade mb-6">
                    {dentalTourismHeroData.title}
                  </h1>
                  <p className="text-lg md:text-xl text-black/90 mb-8 leading-relaxed">
                    {dentalTourismHeroData.shortDescription}
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
    )

  }

  export default DentalTourism;