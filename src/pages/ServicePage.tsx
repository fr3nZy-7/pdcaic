// src/pages/ServicePage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/data/services";
import NotFound from "./NotFound";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import BookAppointmentButton from "@/components/BookAppointmentButton";
import WhatsAppUsButton from "@/components/WhatsAppUsButton";
import FloatingButtons from "@/components/FloatingActionButtons";
import FooterCTA from "@/components/FooterCTA";
import HeroSection from "@/components/HeroSection";

const ServicePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!service) {
    return <NotFound />;
  }

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

  // Construct JSON-LD structured data for the service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.title,
    "description": service.seo.description,
    "image": service.heroImage,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Padmanaabh Dental Clinic & Implant Centre",
      "sameAs": "https://pdcaic.vercel.app",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9 Sujata Park",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411045",
        "addressCountry": "IN"
      },
      "telephone": "+91-9876543210"
    }
  };

  return (
    <>
      <Helmet>
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <meta name="keywords" content={service.seo.keywords.join(", ")} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <HeroSection
        breadcrumbLink="/services"
        breadcrumbLabel="Services"
        title={service.title}
        description={service.shortDescription}
        backgroundImage={service.heroImage}
        overlayGradient="from-[#23AAB9]/20 to-[#0194C1]/40"
        titleColor="text-shade"
        descriptionColor="text-black/70"
        align="left"
      >
        <>
          <WhatsAppUsButton className="w-full" />
          <BookAppointmentButton />
        </>
      </HeroSection>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-shade mb-6">
                {service.detailedContent.mainTitle}
              </h2>
              <p className="text-lg text-shade mb-8 leading-relaxed">
                {service.detailedContent.mainDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-xl"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-12 h-12 mb-3"
                    />
                    <h3 className="font-semibold text-shade mb-2">
                      {feature.title}
                    </h3>
                    {feature.description && (
                      <p className="text-sm text-black/80">{feature.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src={service.detailedContent.heroContentImage || "/images/common/placeholder.svg"}
                alt={service.title}
                className="w-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#00ABD9] to-[#4DD0E1] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What To Expect
            </h2>
            <p className="text-white/90">
              Comprehensive Dental Care Tailored for You
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.processSteps.map((step) => (
              <div key={step.stepNumber} className="text-center">
                <GlassmorphismCard className="p-8">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-xl font-bold text-[#00ABD9]">{step.stepNumber}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/90">{step.description}</p>
                </GlassmorphismCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {beforeAfterImages.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-[#E0F7FA] to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg bg-white rounded-xl p-8">
              <div className="text-center">
                <img
                  src={beforeAfterImages[currentImageIndex]?.before || "/images/common/placeholder.svg"}
                  alt="Before treatment"
                  className="w-full rounded-xl"
                />
                <h3 className="text-xl font-semibold mt-4">Before</h3>
                <p>{beforeAfterImages[currentImageIndex]?.description}</p>
              </div>
              <div className="text-center">
                <img
                  src={beforeAfterImages[currentImageIndex]?.after || "/images/common/placeholder.svg"}
                  alt="After treatment"
                  className="w-full rounded-xl"
                />
                <h3 className="text-xl font-semibold mt-4">After</h3>
              </div>

              <button onClick={prevImage} className="absolute left-8 top-1/2">
                <ChevronLeft size={32} color="#00ABD9" />
              </button>
              <button onClick={nextImage} className="absolute right-8 top-1/2">
                <ChevronRight size={32} color="#00ABD9" />
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-shade mb-6">
                  Explore Our Comprehensive Services
                </h2>
                <p className="text-lg text-primary mb-8">
                  Discover the range of services to improve your dental health and smile.
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#23A9B9] to-[#0194C1] text-white font-semibold hover:shadow-lg"
                >
                  View All Services
                </button>
              </div>
              <div className="relative h-72">
                <img
                  src="/images/common/happy-patient.jpg"
                  alt="Happy patient smiling"
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </>
  );
};

export default ServicePage;
