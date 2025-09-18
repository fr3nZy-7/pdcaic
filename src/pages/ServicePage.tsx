// src/pages/ServicePage.tsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/data/services";
import NotFound from "./NotFound";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import BookAppointmentButton from "@/components/BookAppointmentButton";
import WhatsAppUsButton from "@/components/WhatsAppUsButton";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import FooterCTA from "@/components/FooterCTA";

const ServicePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!service) {
    return <NotFound />;
  }

  // Use mock data until gallery system is implemented
  const beforeAfterImages = service.mockBeforeAfterImages || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === beforeAfterImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? beforeAfterImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{service.seo.title}</title>
      <meta name="description" content={service.seo.description} />
      <meta name="keywords" content={service.seo.keywords.join(", ")} />

      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-[#23AAB9] to-[#0194C1] min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${service.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#23AAB9] to-[#0194C1]/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          {/* Breadcrumb */}
          <Link 
            to="/services" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Services
          </Link>

          {/* Hero Content */}
          <div className="max-w-2xl">
            <GlassmorphismCard className="p-8 md:p-12">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                {service.shortDescription}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppUsButton />
                <BookAppointmentButton />
              </div>
            </GlassmorphismCard>
          </div>
        </div>
      </section>

      

      {/* Service Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {service.detailedContent.mainTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.detailedContent.mainDescription}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
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
            <div className="relative">
              <img
                src={service.detailedContent.heroContentImage || '/images/common/placeholder.svg'}
                alt={service.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What To Expect Section */}
      <section className="py-16 bg-gradient-to-br from-[#00ABDA] to-[#4DD0E1] relative overflow-hidden">
        {/* Decorative elements */}
     

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What To Expect
            </h2>
            <p className="text-lg text-white/90">
              Comprehensive Dental Care Tailored for You
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.processSteps.map((step) => (
              <div key={step.stepNumber} className="text-center">
                <GlassmorphismCard className="p-8 h-full">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-xl font-bold text-[#00ABDA]">
                      {step.stepNumber}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {step.description}
                  </p>
                </GlassmorphismCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      {service.detailedContent.additionalSections && service.detailedContent.additionalSections.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            {service.detailedContent.additionalSections.map((section, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                      {section.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {section.content}
                    </p>

                    {/* Subsections */}
                    {section.subsections?.map((subsection, subIndex) => (
                      <div key={subIndex} className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                          {subsection.subtitle}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {subsection.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      src={section.image || '/images/common/placeholder.svg'}
                      alt={section.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Treatment Results Section */}
      {beforeAfterImages.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-[#E0F7FA] to-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 opacity-20">
            <img src="/images/common/placeholder.svg" alt="" className="w-32 h-32" />
          </div>
          
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Treatment Results
              </h2>
              <p className="text-lg text-gray-600">
                Successful {service.title.toLowerCase()} with excellent results
              </p>
            </div>

            {/* Before/After Carousel */}
            <div className="relative">
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Before Image */}
                    <div className="text-center">
                      <img
                        src={beforeAfterImages[currentImageIndex]?.before || '/images/common/placeholder.svg'}
                        alt="Before treatment"
                        className="w-full h-64 object-cover rounded-xl mb-4"
                      />
                      <h3 className="text-xl font-semibold text-gray-800">Before</h3>
                    </div>
                    
                    {/* After Image */}
                    <div className="text-center">
                      <img
                        src={beforeAfterImages[currentImageIndex]?.after || '/images/common/placeholder.svg'}
                        alt="After treatment"
                        className="w-full h-64 object-cover rounded-xl mb-4"
                      />
                      <h3 className="text-xl font-semibold text-gray-800">After</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <ChevronLeft className="w-6 h-6 text-[#00ABDA]" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <ChevronRight className="w-6 h-6 text-[#00ABDA]" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-[#00ABDA]' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

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
                
                <button
                  onClick={() => navigate('/services')}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  View All Services
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
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
    </>
  );
};

export default ServicePage;