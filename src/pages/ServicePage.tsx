// src/pages/ServicePage.tsx - SEO Optimized Version
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { services } from "@/data/services";
import NotFound from "./NotFound";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import BookAppointmentButton from "@/components/BookAppointmentButton";
import WhatsAppUsButton from "@/components/WhatsAppUsButton";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import FooterCTA from "@/components/FooterCTA";
import HeroSection from "@/components/HeroSection";
import ReactMarkdown from "react-markdown";

const ServicePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!service) {
    return <NotFound />;
  }

  const beforeAfterImages = service.mockBeforeAfterImages || [];

  // SEO: Generate dynamic canonical URL
  const canonicalUrl = `https://padmanaabhdental.clinic/services/${service.slug}`;
  const ogImageUrl = `https://padmanaabhdental.clinic${service.heroImage}`;

  // SEO: Generate structured data for specific medical procedure
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${canonicalUrl}#procedure`,
    "name": service.title,
    "description": service.longDescription,
    "url": canonicalUrl,
    "image": ogImageUrl,
    "procedureType": service.title,
    "bodyLocation": "Mouth",
    "followup": "Regular dental check-ups recommended",
    "howPerformed": service.processSteps.map(step => step.description).join('. '),
    "preparation": "Consultation and examination required",
    "provider": {
      "@type": "DentalClinic",
      "@id": "https://padmanaabhdental.clinic/#dentist",
      "name": "Padmanaabh Dental Clinic and Implant Centre",
      "telephone": "+91-7507325539",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lane 1 Sainik Colony, Pathare Wasti, Off Wadgaon Shinde Road, Lohegaon",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411047",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "name": `${service.title} Treatment`,
      "description": service.shortDescription,
      "availabilityStarts": "2024-01-01",
      "availabilityEnds": "2025-12-31"
    }
  };

  // SEO: Generate FAQ schema if applicable
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is ${service.title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": service.longDescription
        }
      },
      {
        "@type": "Question", 
        "name": `How long does ${service.title} take?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Treatment duration varies based on individual case complexity. We'll provide a detailed timeline during your consultation."
        }
      },
      {
        "@type": "Question",
        "name": `Is ${service.title} painful?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use advanced anesthesia and modern techniques to ensure your comfort throughout the procedure. Most patients experience minimal discomfort."
        }
      }
    ]
  };

  // SEO: Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://padmanaabhdental.clinic/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://padmanaabhdental.clinic/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": canonicalUrl
      }
    ]
  };

  // Get related services for internal linking
  const relatedServices = services
    .filter(s => s.slug !== service.slug)
    .slice(0, 3);

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

  // SEO: Track page view for analytics
  useEffect(() => {
    // Google Analytics page view tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: service.seo.title,
        page_location: canonicalUrl,
        custom_map: {
          'service_type': service.slug,
          'service_category': 'dental_treatment'
        }
      });

      // Track service page view event
      window.gtag('event', 'page_view', {
        event_category: 'service_page',
        event_label: service.title,
        page_title: service.seo.title,
        page_location: canonicalUrl
      });
    }
  }, [service, canonicalUrl]);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <meta name="keywords" content={service.seo.keywords.join(", ")} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={service.seo.title} />
        <meta property="og:description" content={service.seo.description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:site_name" content="Padmanaabh Dental Clinic" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={service.seo.title} />
        <meta name="twitter:description" content={service.seo.description} />
        <meta name="twitter:image" content={ogImageUrl} />
        
        {/* Local SEO */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Lohegaon, Pune" />
        <meta name="geo.position" content="18.602248513878692;73.93357515658218" />
        
        {/* Additional Meta */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Dr. Neha Deshpande, Padmanaabh Dental Clinic" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section with SEO-optimized content */}
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
          <WhatsAppUsButton className="w-full"/>
          <BookAppointmentButton />
        </>
      </HeroSection>

      {/* Service Features Section with SEO headers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* SEO: H1 tag for main keyword */}
              <h1 className="text-3xl md:text-4xl font-bold text-shade mb-6">
                {service.detailedContent.mainTitle}
              </h1>
              <p className="text-lg text-shade mb-8 leading-relaxed">
                {service.detailedContent.mainDescription}
              </p>

              {/* Features Grid with semantic markup */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-xl">
                    <img 
                      src={feature.icon} 
                      alt={`${feature.title} - ${service.title} feature`}
                      className="w-12 h-12 mb-3"
                      loading="lazy"
                    />
                    <h3 className="font-semibold text-shade mb-2">{feature.title}</h3>
                    {feature.description && (
                      <p className="text-sm text-black/80">{feature.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={service.detailedContent.heroContentImage || '/images/common/placeholder.svg'}
                alt={`${service.title} treatment at Padmanaabh Dental Clinic, Pune`}
                className="w-full object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with H2 headers */}
      <section className="py-16 bg-gradient-to-br from-[#00ABDA] to-[#4DD0E1] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {service.title} Treatment Process
            </h2>
            <p className="text-lg text-white/90">
              Step-by-step {service.title.toLowerCase()} procedure at our clinic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.processSteps.map((step) => (
              <div key={step.stepNumber} className="text-center">
                <GlassmorphismCard className="p-8 h-full">
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

      {/* Detailed Content with H2/H3 hierarchy */}
      {service.detailedContent.additionalSections && service.detailedContent.additionalSections.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            {service.detailedContent.additionalSections.map((section, index) => (
              <article key={index} className="mb-16 last:mb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h2 className="text-2xl md:text-3xl font-bold text-shade mb-6">
                      {section.title}
                    </h2>
                    <div className="text-lg  text-shade mb-8 leading-relaxed whitespace-pre-line">
                      <ReactMarkdown>
                      {section.content}
                      </ReactMarkdown>
                    </div>

                    {section.subsections?.map((subsection, subIndex) => (
                      <div key={subIndex} className="mb-6">
                        <h3 className="text-xl font-semibold text-shade mb-3">
                          {subsection.subtitle}
                        </h3>
                        <div className="text-shade leading-relaxed whitespace-pre-line">
                          <ReactMarkdown>                          
                          {subsection.text}
                          </ReactMarkdown>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      src={section.image || '/images/common/placeholder.svg'}
                      alt={`${section.title} - ${service.title} in Pune`}
                      className="w-full object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Treatment Results with alt tags */}
      {/* {beforeAfterImages.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-blue-50 to-pink-50 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {service.title} Results - Before & After
              </h2>
              <p className="text-lg text-gray-600">
                Real patient results from our {service.title.toLowerCase()} treatments in Pune
              </p>
            </div>

            <div className="relative">
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <img
                        src={beforeAfterImages[currentImageIndex]?.before || '/images/common/placeholder.svg'}
                        alt={`Before ${service.title} treatment - ${beforeAfterImages[currentImageIndex]?.description}`}
                        className="w-full h-64 object-cover rounded-xl mb-4"
                        loading="lazy"
                      />
                      <h3 className="text-xl font-semibold text-gray-800">Before Treatment</h3>
                    </div>
                    
                    <div className="text-center">
                      <img
                        src={beforeAfterImages[currentImageIndex]?.after || '/images/common/placeholder.svg'}
                        alt={`After ${service.title} treatment - ${beforeAfterImages[currentImageIndex]?.description}`}
                        className="w-full h-64 object-cover rounded-xl mb-4"
                        loading="lazy"
                      />
                      <h3 className="text-xl font-semibold text-gray-800">After Treatment</h3>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Previous treatment result"
              >
                <ChevronLeft className="w-6 h-6 text-[#00ABDA]" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Next treatment result"
              >
                <ChevronRight className="w-6 h-6 text-[#00ABDA]" />
              </button>
            </div>

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
                  aria-label={`View treatment result ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* Related Services for internal linking */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Other Dental Services in Pune
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                to={`/services/${relatedService.slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src={relatedService.infographicImages || '/images/common/placeholder.svg'}
                  alt={relatedService.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {relatedService.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {relatedService.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      <FloatingActionButtons />
      <FooterCTA/>
      <Footer />
    </>
  );
};

export default ServicePage;