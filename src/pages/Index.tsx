// src/pages/Index.tsx
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import BookAppointmentButton from "@/components/BookAppointmentButton";
import WhatsAppUsButton from "@/components/WhatsAppUsButton";
import {
  Stethoscope,
  Zap,
  Star,
  Award,
  Users,
  Clock,
  Shield,
  Heart,
  Smile,
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroImage from "@/assets/hero-dental-clinic.jpg";
import dentalImplantImage from "@/assets/dental-implant.jpg";
import happyPatientsImage from "@/assets/happy-patients.jpg";
import logo from "@/assets/logo.svg";
import shortLogo from "@/assets/short-logo-wo-name.svg";
import FooterCTA from "@/components/FooterCTA";
import { services } from "@/data/services";
import ReviewsSection from "@/components/ReviewsSection";
import { scrollToId } from "@/lib/ScrollToId";
import { Helmet } from "react-helmet-async";

const Index = () => {
  // ---------- Helpers for carousel responsiveness ----------
  function getSlidesPerPage(width: number) {
    // Tailwind-like breakpoints: mobile -> 1, sm -> 2, lg -> 3, xl -> 4
    if (width >= 1280) return 4;
    if (width >= 1024) return 3;
    if (width >= 640) return 2;
    return 1;
  }

  // ---------- ServicesCarousel component ----------
  const ServicesCarousel: React.FC<{ services: any[] }> = ({ services }) => {
    const [slidesPerPage, setSlidesPerPage] = useState<number>(() =>
      typeof window !== "undefined" ? getSlidesPerPage(window.innerWidth) : 1
    );
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const viewportRef = useRef<HTMLDivElement | null>(null);

    // update slidesPerPage on resize
    useEffect(() => {
      function onResize() {
        const sp = getSlidesPerPage(window.innerWidth);
        setSlidesPerPage(sp);
      }
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

    // clamp currentIndex whenever slidesPerPage or services.length changes
    useEffect(() => {
      const maxIndex = Math.max(0, services.length - slidesPerPage);
      setCurrentIndex((ci) => Math.min(ci, maxIndex));
    }, [slidesPerPage, services.length]);

    const slideWidthPercent = 100 / slidesPerPage;
    const maxIndex = Math.max(0, services.length - slidesPerPage);
    const showControls = services.length > slidesPerPage;

    const handlePrev = () => setCurrentIndex((c) => Math.max(0, c - 1));
    const handleNext = () => setCurrentIndex((c) => Math.min(maxIndex, c + 1));

    // optional: keyboard navigation
    useEffect(() => {
      function onKey(e: KeyboardEvent) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [maxIndex]);

    return (


      
      

      
      <div className="relative">
        {/* Prev / Next controls */}
        {showControls && (
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
        )}
        {showControls && (
          <button
            aria-label="Next"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        )}

        {/* viewport */}
        <div ref={viewportRef} className="overflow-hidden px-4">
          {/* track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
            }}
          >
            {services.map((service, idx) => (
              <div
                key={service.id ?? idx}
                className="box-border px-4"
                style={{
                  flex: `0 0 ${slideWidthPercent}%`,
                  maxWidth: `${slideWidthPercent}%`,
                }}
              >
                <GlassmorphismCard className="bg-white/30 backdrop-blur-md shadow-lg h-full">
                  <ServiceCard
                    title={service.title}
                    description={service.shortDescription}
                    image={service.infographicImages ?? service.featuredImage ?? undefined}
                    features={service.features}
                    path={`/services/${service.slug}`}
                  />
                </GlassmorphismCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ---------- Page content ----------
  const features = [
    {
      title: "Advanced Technology",
      description: "State-of-the-art equipment for precise and comfortable treatments",
      icon: <Zap className="h-12 w-12" />,
    },
    {
      title: "Experienced Team",
      description: "Skilled professionals with years of expertise in dental care",
      icon: <Award className="h-12 w-12" />,
    },
    {
      title: "Patient-Centered Care",
      description: "Personalized treatment plans tailored to your specific needs",
      icon: <Users className="h-12 w-12" />,
    },
    {
      title: "Flexible Scheduling",
      description: "Convenient appointment times to fit your busy lifestyle",
      icon: <Clock className="h-12 w-12" />,
    },
  ];

  return (
    <>
    <Helmet>
        <title>Padmanaabh Dental Clinic & Implant Centre | Best Dentist in Pune</title>
        <meta name="description" content="Padmanaabh Dental Clinic offers expert dental care in Pune. Specializing in dental implants, root canals, cosmetic dentistry, and smile makeovers." />
        <meta name="keywords" content="Dentist in Pune, Dental Clinic Pune, Dental Implants, Root Canal, Cosmetic Dentistry, Smile Makeover" />
        <link rel="canonical" href="https://padmanaabhdental.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Padmanaabh Dental Clinic & Implant Centre | Best Dentist in Pune" />
        <meta property="og:description" content="Trusted dental care in Pune — implants, smile makeover, crowns, and more." />
        <meta property="og:url" content="https://padmanaabhdental.com/" />
        <meta property="og:image" content="https://padmanaabhdental.com/images/clinic.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Padmanaabh Dental Clinic & Implant Centre | Best Dentist in Pune" />
        <meta name="twitter:description" content="Trusted dental care in Pune — implants, smile makeover, crowns, and more." />
        <meta name="twitter:image" content="https://padmanaabhdental.com/images/clinic.jpg" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "@id": "https://padmanaabhdental.com/#dentist",
            name: "Padmanaabh Dental Clinic & Implant Centre",
            url: "https://padmanaabhdental.com",
            telephone: "+91-XXXXXXXXXX",
            logo: "https://padmanaabhdental.com/images/logo.png",
            image: "https://padmanaabhdental.com/images/clinic.jpg",
            description:
              "Padmanaabh Dental Clinic offers expert dental care in Pune. Specializing in dental implants, root canals, cosmetic dentistry, and smile makeovers.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Clinic Street",
              addressLocality: "Pune",
              addressRegion: "Maharashtra",
              postalCode: "411001",
              addressCountry: "IN"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "18.5204",
              longitude: "73.8567"
            },
            hasMap: "https://maps.google.com/?q=Padmanaabh+Dental+Clinic+Pune",
            openingHours: [
              "Mo-We 10:00-20:00",
              "Fr-Sa 10:00-20:00",
              "Su 10:00-14:00"
            ],
            sameAs: [
              "https://www.facebook.com/yourclinic",
              "https://www.instagram.com/yourclinic",
              "https://www.youtube.com/@yourclinic"
            ]
          })}
        </script>
      </Helmet>
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        {/* Background dental chair image */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="Modern dental clinic interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left side - Glassmorphism Card */}
            <div className="animate-fade-in">
              <GlassmorphismCard className="p-8 lg:p-12 bg-white/30 backdrop-blur-2xl shadow-lg">
                {/* Logo and Header */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mr-4">
                      <img src={shortLogo} alt="clinic logo" />
                    </div>
                    <div>
                      <h2 className="text-5xl font-bold text-shade font-heading">PADMANAABH</h2>
                      <p className="text-2xl font-bold text-shade/80 font-heading">Dental Clinic and Implant Centre</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-primary-dark mr-2" />
                    <a
                      href="#footer"
                      onClick={(e) => {
                        e.preventDefault(); // prevent default jump
                        scrollToId("footer"); // use your helper
                      }}
                      className="text-primary-dark underline"
                    >
                      Lohegaon, Pune.
                    </a>
                  </div>

                  <a
                    href="#reviews"
                    onClick={(e) => {
                      e.preventDefault(); // prevent default jump
                      scrollToId("reviews"); // smooth scroll
                    }}
                  >
                    <div className="flex items-center">
                      <span className="text-primary-dark mr-2">Top rated in Pune</span>
                      <span className="font-bold text-primary-dark mr-2">5/5</span>
                      <div className="flex text-yellow-400">{"★★★★★".split("").map((star, i) => (<span key={i}>{star}</span>))}</div>
                    </div>
                  </a>
                </div>

                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-heading">
                  Your Smile, Our Passion
                  <span className="block">– Book Today!</span>
                </h1>

                <p className="text-lg text-white/90 mb-8">
                  Experience compassionate care and advanced treatments tailored just for you.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-primary-dark">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    <span className="font-medium">Shortest Waiting Time !</span>
                  </div>
                  <div className="flex items-center text-primary-dark">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    <span className="font-medium">Painless Treatment !</span>
                  </div>
                  <div className="flex items-center text-primary-dark">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    <span className="font-medium">Affordable Prices !</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-white/80">
                    <Clock className="h-5 w-5 mr-3" />
                    <a href="/contact">
                      <span>Open Today! 10:00 AM - 08:00 PM</span>
                    </a>
                    <a href="/contact" className="ml-2 text-primary-dark underline">
                      <span className="text-primary-dark underline ml-2">Check Timings</span>
                    </a>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+91-7507 325 539</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsAppUsButton className="w-full" onClick={() => window.open("https://wa.me/917507325539", "_blank")} />
                  <BookAppointmentButton />
                </div>
              </GlassmorphismCard>
            </div>

            {/* Right side - Keep space for the dental chair image */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">Why Choose Us?</h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              We combine cutting-edge technology with compassionate care to deliver exceptional dental experiences that exceed your expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <GlassmorphismCard key={index} className="p-8  bg-primary/40  hover:scale-105">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="text-primary text-2xl">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-lg text-shade">{feature.title}</CardTitle>
                  <CardDescription className="text-black/80">{feature.description}</CardDescription>
                </CardHeader>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-primary/60 to-primary-dark/30">
        <div className="container mx-auto relative px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">Explore Our Comprehensive Services</h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              From routine cleanings to complex procedures, we offer a full range of dental services to keep your smile healthy and beautiful.
            </p>
          </div>

          {/* Carousel */}
          <ServicesCarousel services={services} />

          {/* CTA */}
          <div className="text-center mt-12">
            <a href="/services">
              <Button type="submit" size="lg" className=" inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 mt-4 justify-center">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className=" bg-white text-primary">
        <ReviewsSection />
      </section>

      <FooterCTA />
      <Footer />
      <FloatingActionButtons />
    </div>
    </>
  );
};

export default Index;
