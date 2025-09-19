import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database,
  Users,
  FileText,
  Settings,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  UserCheck
} from "lucide-react";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import FooterCTA from "@/components/FooterCTA";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import WhatsAppUsButton from "@/components/WhatsAppUsButton";
import BookAppointmentButton from "@/components/BookAppointmentButton";
import HeroSection from "@/components/HeroSection";

const PrivacyPolicy = () => {
  const PrivacyHeroData = {
    title: "Privacy Policy",
    shortDescription: "We are committed to protecting your privacy and ensuring the security of your personal information. Learn how we collect, use, and safeguard your data.",
    heroImage: "/images/common/hero-bg.jpg", // Replace with appropriate image
  };

  const privacySections = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Information We Collect",
      content: "We collect personal information you voluntarily provide when scheduling appointments, filling contact forms, subscribing to newsletters, or communicating with us. This includes your name, contact details, date of birth, insurance information, and medical history.",
      subsections: [
        "Personal contact information (name, email, phone, address)",
        "Medical and dental history",
        "Insurance and billing information", 
        "Emergency contact details",
        "Website usage data and cookies"
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: "We use your information to provide dental services, manage appointments, communicate about treatment, process billing, send reminders, improve our services, and comply with legal requirements.",
      subsections: [
        "Provide and maintain dental services",
        "Schedule and manage appointments", 
        "Process insurance claims and billing",
        "Send appointment reminders and follow-ups",
        "Improve our website and services",
        "Comply with legal and regulatory requirements"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Information Sharing",
      content: "We may share your information with healthcare providers for treatment, insurance companies for claims, business associates, and as required by law. We never sell your personal information to third parties.",
      highlight: true
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Security",
      content: "We implement SSL encryption, secure servers, firewalls, regular security assessments, and employee training to protect your information. Access is limited on a need-to-know basis.",
      subsections: [
        "SSL encryption for data transmission",
        "Secure servers and firewalls",
        "Regular security assessments",
        "Employee training on privacy and security",
        "Limited access on need-to-know basis"
      ]
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Cookies & Tracking",
      content: "We use essential cookies for website function, analytics cookies to understand usage, and marketing cookies for relevant advertisements. You can control cookies through your browser settings."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Your Rights",
      content: "You can access, correct, delete your information, opt-out of communications, and request data portability. Contact us to exercise these rights or for any privacy concerns.",
      subsections: [
        "Access your personal information",
        "Request correction of inaccurate data",
        "Request deletion of your information",
        "Opt-out of marketing communications",
        "Data portability requests"
      ]
    }
  ];

  const dataTypes = [
    {
      title: "Personal Information",
      items: [
        "Name, email, phone number",
        "Address and emergency contacts",
        "Date of birth and age",
        "Insurance information"
      ]
    },
    {
      title: "Medical Information",
      items: [
        "Dental and medical history",
        "Treatment records and notes", 
        "X-rays and diagnostic images",
        "Prescription and medication data"
      ]
    },
    {
      title: "Technical Information",
      items: [
        "IP address and browser type",
        "Device and operating system",
        "Website pages visited",
        "Cookies and tracking data"
      ]
    }
  ];

  const sharingPurposes = [
    {
      title: "Treatment Purposes",
      description: "With healthcare providers involved in your care, dental specialists for referrals, and dental laboratories for treatment planning.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Business Operations", 
      description: "With insurance companies for claims processing, business associates who help operate our practice, and legal/accounting professionals.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Legal Requirements",
      description: "When required by law, court orders, regulatory compliance, or to protect rights and safety of our practice and others.",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        breadcrumbLink="/"
        breadcrumbLabel="Home"
        title={PrivacyHeroData.title}
        description={PrivacyHeroData.shortDescription}
        backgroundImage={PrivacyHeroData.heroImage}
        overlayGradient="from-[#23AAB9]/20 to-[#0194C1]/20"
        titleColor="text-shade"
        descriptionColor="text-black/70"
        align="left"
      >
        <>
          <WhatsAppUsButton />
          <BookAppointmentButton />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-shade">Your Privacy Matters to Us</h2>
            <div className="prose prose-lg mx-auto text-black/80">
              <p className="mb-6 text-lg">
                At <span className="bg-yellow-200 px-1 rounded font-semibold">[Padmanaabh Dental Clinic and Implant Centre]</span>, 
                we are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
              <p className="text-lg mb-6">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or receive our dental services. We comply with all applicable privacy laws and healthcare regulations.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-blue-800 font-semibold">
                  <AlertTriangle className="inline h-5 w-5 mr-2" />
                  As a healthcare provider, we are bound by HIPAA (Health Insurance Portability and Accountability Act) regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Types We Collect */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">
              Types of Information We Collect
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              We collect different types of information to provide you with the best possible dental care 
              and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataTypes.map((dataType, index) => (
              <GlassmorphismCard 
                key={index} 
                className="p-6 bg-primary/40 backdrop-blur-2xl shadow-lg hover:scale-105 transition-transform"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-shade mb-4">{dataType.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {dataType.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-black/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">
              Privacy Policy Details
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Detailed information about how we handle your personal and medical information.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {privacySections.map((section, index) => (
              <GlassmorphismCard 
                key={index} 
                className={`p-6 ${section.highlight ? 'bg-yellow-100/60' : 'bg-primary/30'} backdrop-blur-2xl shadow-lg hover:scale-105 transition-transform`}
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
                  <p className="text-black/80 leading-relaxed mb-4">{section.content}</p>
                  {section.subsections && (
                    <ul className="space-y-2 mt-4">
                      {section.subsections.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-black/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.highlight && (
                    <div className="mt-4 p-3 bg-yellow-200/50 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-sm font-semibold text-yellow-800">
                        Important: We never sell your personal information to third parties.
                      </p>
                    </div>
                  )}
                </CardContent>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Information Sharing Section */}
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
              When We Share Information
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              We only share your information when necessary for your care, business operations, 
              or as required by law.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sharingPurposes.map((purpose, index) => (
              <GlassmorphismCard
                key={index}
                className="p-6 bg-shade/30 backdrop-blur-3xl shadow-lg hover:scale-105 transition-transform"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-white/50 rounded-lg backdrop-blur-3xl flex items-center justify-center mb-4">
                    <div className="text-shade text-xl">{purpose.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-shade mb-4">{purpose.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80">{purpose.description}</p>
                </CardContent>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Children's Privacy & Third-Party Links */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassmorphismCard className="p-8 bg-primary/40 backdrop-blur-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-shade mb-4">Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80 mb-4">
                    Our website is not intended for children under 13. We do not knowingly collect 
                    personal information from children under 13.
                  </p>
                  <p className="text-black/80">
                    If you are a parent or guardian and believe your child has provided us with personal information, 
                    please contact us immediately and we will take steps to remove such information.
                  </p>
                </CardContent>
              </GlassmorphismCard>

              <GlassmorphismCard className="p-8 bg-primary/40 backdrop-blur-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-shade mb-4">Third-Party Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80 mb-4">
                    Our website may contain links to third-party websites. We are not responsible 
                    for the privacy practices of these external sites.
                  </p>
                  <p className="text-black/80">
                    We encourage you to review their privacy policies before providing any personal 
                    information to third-party websites.
                  </p>
                </CardContent>
              </GlassmorphismCard>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-shade">Cookie Policy</h2>
            <GlassmorphismCard className="p-8 bg-primary/20 backdrop-blur-2xl shadow-lg">
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/50 rounded-lg backdrop-blur-3xl flex items-center justify-center mx-auto mb-3">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-shade mb-2">Essential Cookies</h3>
                    <p className="text-sm text-black/80">Required for website functionality</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/50 rounded-lg backdrop-blur-3xl flex items-center justify-center mx-auto mb-3">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-shade mb-2">Analytics Cookies</h3>
                    <p className="text-sm text-black/80">Help us understand website usage</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/50 rounded-lg backdrop-blur-3xl flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-shade mb-2">Marketing Cookies</h3>
                    <p className="text-sm text-black/80">Deliver relevant advertisements</p>
                  </div>
                </div>
                <p className="text-black/80 text-center">
                  You can control cookies through your browser settings, but disabling certain cookies may affect website functionality.
                </p>
              </CardContent>
            </GlassmorphismCard>
          </div>
        </div>
      </section>

      {/* Changes & Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <GlassmorphismCard className="p-8 bg-primary/40 backdrop-blur-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-shade mb-4">Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80 mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page.
                  </p>
                  <p className="text-black/80">
                    You are advised to review this Privacy Policy periodically for any changes. 
                    Changes are effective when posted on this page.
                  </p>
                </CardContent>
              </GlassmorphismCard>

              <GlassmorphismCard className="p-8 bg-yellow-100/60 backdrop-blur-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-shade mb-4">HIPAA Notice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80 mb-4">
                    As a healthcare provider, we are bound by HIPAA regulations for protecting your health information.
                  </p>
                  <p className="text-black/80">
                    For detailed information about your healthcare privacy rights, please request our 
                    Notice of Privacy Practices during your visit.
                  </p>
                </CardContent>
              </GlassmorphismCard>
            </div>

            {/* Contact Information */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-shade">Contact Our Privacy Team</h2>
            <GlassmorphismCard className="p-8 bg-primary/40 backdrop-blur-2xl shadow-lg">
              <CardContent>
                <p className="text-lg text-black/80 mb-6 text-center">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
                    <p className="font-semibold text-shade">Privacy Officer</p>
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

export default PrivacyPolicy;