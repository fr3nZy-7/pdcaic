import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Shield, 
  FileText, 
  AlertTriangle, 
  Scale,
  Clock,
  MessageSquare,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import FooterCTA from "@/components/FooterCTA";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import WhatsAppUsButton from "@/components/WhatsAppUsButton";
import BookAppointmentButton from "@/components/BookAppointmentButton";
import HeroSection from "@/components/HeroSection";

const Terms = () => {
  const TermsHeroData = {
    title: "Terms of Service",
    shortDescription: "Please read these terms carefully before using our website and services. These terms govern your use of our dental services and website.",
    heroImage: "/images/common/hero-bg.jpg", // Replace with appropriate image
  };

  const termsSections = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Medical Disclaimer",
      content: "The information provided on this website is for general informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified healthcare provider with any questions you may have regarding a dental condition.",
      highlight: true
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Use of Website",
      content: "You may use our website for lawful purposes only. You agree not to use the website in any way that violates applicable laws, transmit promotional material without consent, impersonate our clinic or staff, or engage in conduct that restricts others' use of the website."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Appointment Booking",
      content: "Online appointment requests are subject to availability and confirmation. You must provide accurate information, update your contact details, cancel appointments at least 24 hours in advance, and understand that no-show appointments may incur a cancellation fee."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Reviews and User Content",
      content: "By submitting reviews or content, you grant us a non-exclusive, royalty-free license to use and display such content. You represent that your content is accurate, truthful, doesn't violate third-party rights, and contains no offensive or illegal material."
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Limitation of Liability",
      content: "Padmanaabh Dental Clinic, its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of our services or website."
    }
  ];

  const keyPolicies = [
    {
      title: "Appointment Policy",
      points: [
        "24-hour cancellation notice required",
        "Confirmation required for all online bookings",
        "Emergency appointments subject to availability",
        "No-show fee may apply"
      ]
    },
    {
      title: "Website Usage",
      points: [
        "Information for educational purposes only",
        "No medical advice provided online",
        "Respect intellectual property rights",
        "Report any technical issues promptly"
      ]
    },
    {
      title: "Patient Rights",
      points: [
        "Access to your personal information",
        "Request corrections to inaccurate data",
        "Opt-out of marketing communications",
        "File complaints about service quality"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        breadcrumbLink="/"
        breadcrumbLabel="Home"
        title={TermsHeroData.title}
        description={TermsHeroData.shortDescription}
        backgroundImage={TermsHeroData.heroImage}
        overlayGradient="from-[#23AAB9]/20 to-[#0194C1]/20"
        titleColor="text-shade"
        descriptionColor="text-black/70"
        align="left"
      >
        <>
          
        </>
      </HeroSection>

      {/* Last Updated Section */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
              <p className="text-primary font-semibold">
                Last updated: <span className="bg-yellow-200 px-2 py-1 rounded font-bold">[Date]</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-shade">Welcome to Padmanaabh Dental Clinic</h2>
            <div className="prose prose-lg mx-auto text-black/80">
              <p className="mb-6 text-lg">
                Welcome to <span className="bg-yellow-200 px-1 rounded font-semibold">[Padmanaabh Dental Clinic and Implant Centre]</span> ("we," "our," or "us"). 
                These Terms of Service ("Terms") govern your use of our website located at <span className="bg-yellow-200 px-1 rounded font-semibold">[your-website.com]</span> 
                (the "Service") operated by Padmanaabh Dental Clinic and Implant Centre.
              </p>
              <p className="text-lg">
                By using our website and services, you agree to comply with and be bound by these terms. 
                Please read them carefully as they contain important information about your rights and obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">
              Terms and Conditions
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Please review each section carefully to understand your rights and responsibilities 
              when using our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {termsSections.map((section, index) => (
              <GlassmorphismCard 
                key={index} 
                className={`p-6 ${section.highlight ? 'bg-yellow-100/60' : 'bg-primary/40'} backdrop-blur-2xl shadow-lg hover:scale-105 transition-transform`}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/50 rounded-lg backdrop-blur-3xl flex items-center justify-center flex-shrink-0 shadow-md mr-4">
                      <div className="text-shade text-xl">{section.icon}</div>
                    </div>
                    <CardTitle className="text-xl font-bold text-shade">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80 leading-relaxed">{section.content}</p>
                  {section.highlight && (
                    <div className="mt-4 p-3 bg-yellow-200/50 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-sm font-semibold text-yellow-800">
                        Important: This is not a substitute for professional medical advice.
                      </p>
                    </div>
                  )}
                </CardContent>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Key Policies Section */}
      <section className="relative bg-gradient-to-br from-[#23AAB9] to-[#0194C1] min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `url(/images/common/section-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">
              Key Policies
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Important policies that govern our services and your experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyPolicies.map((policy, index) => (
              <GlassmorphismCard
                key={index}
                className="p-6 bg-shade/30 backdrop-blur-3xl shadow-lg hover:scale-105 transition-transform"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-shade mb-4">{policy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {policy.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-black/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual Property & Changes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassmorphismCard className="p-8 bg-primary/20 backdrop-blur-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-shade mb-4">Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80 mb-4">
                    The website and its original content, features, and functionality are and will remain 
                    the exclusive property of Padmanaabh Dental Clinic and its licensors.
                  </p>
                  <p className="text-black/80">
                    The website is protected by copyright, trademark, and other laws. 
                    You may not reproduce, modify, or distribute our content without written permission.
                  </p>
                </CardContent>
              </GlassmorphismCard>

              <GlassmorphismCard className="p-8 bg-primary/20 backdrop-blur-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-shade mb-4">Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80 mb-4">
                    We reserve the right to modify or replace these Terms at any time at our sole discretion.
                  </p>
                  <p className="text-black/80">
                    If a revision is material, we will try to provide at least 30 days notice 
                    prior to any new terms taking effect.
                  </p>
                </CardContent>
              </GlassmorphismCard>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-shade">Contact Us</h2>
            <GlassmorphismCard className="p-8 bg-primary/40 backdrop-blur-2xl shadow-lg">
              <CardContent>
                <p className="text-lg text-black/80 mb-6 text-center">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/50 rounded-lg backdrop-blur-3xl flex items-center justify-center mx-auto mb-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold text-shade">Email</p>
                    <p className="text-sm text-black/80">
                      <span className="bg-yellow-200 px-1 rounded">[your-email@clinic.com]</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/50 rounded-lg backdrop-blur-3xl flex items-center justify-center mx-auto mb-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold text-shade">Phone</p>
                    <p className="text-sm text-black/80">
                      <span className="bg-yellow-200 px-1 rounded">[your-phone-number]</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/50 rounded-lg backdrop-blur-3xl flex items-center justify-center mx-auto mb-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold text-shade">Address</p>
                    <p className="text-sm text-black/80">
                      <span className="bg-yellow-200 px-1 rounded">[Your Clinic Address]</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/50 rounded-lg backdrop-blur-3xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold text-shade">Legal Officer</p>
                    <p className="text-sm text-black/80">
                      <span className="bg-yellow-200 px-1 rounded">[Name and Title]</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </GlassmorphismCard>
          </div>
        </div>
      </section>
      
      <FloatingActionButtons />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Terms;