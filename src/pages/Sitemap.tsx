import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Sitemap = () => {
  const sitemapHeroData = {
    title: "SiteMap",
    shortDescription:
      "Quickly find your way around our website. Explore services, policies, and other important sections in one place.",
    heroImage: "/images/common/allservicegrid.jpg",
  };

  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "Dental Tourism", path: "/dental-tourism" },
        
        { label: "About Us", path: "/about" },
        { label: "Contact Us", path: "/contact" },
        
        { label: "Terms of Service", path: "/terms" },
        { label: "Privacy Policy", path: "/privacy" },
      ],
    },
    {
      title: "Services",
      links: [
       
        { label: "Root Canal", path: "/services/root-canal" },
        { label: "Dental Implants", path: "/services/dental-implants" },
        { label: "Full Mouth Rehab", path: "/services/full-mouth-rehab" },
        { label: "Teeth Restoration", path: "/services/teeth-restoration" },
        { label: "Oral Cancer Screening", path: "/services/oral-cancer-screening" },
        { label: "Smile Designing", path: "/services/smile-designing" },
        { label: "Tooth Extraction", path: "/services/tooth-extraction" },
        { label: "Braces and Invisalign", path: "/services/braces-and-invisalign" },
        { label: "Crowns and Bridges", path: "/services/crowns-and-bridges" },
        { label: "Teeth Whitening", path: "/services/teeth-whitening" },
        { label: "Cleaning and Polishing", path: "/services/cleaning-and-polishing" },
        { label: "Kids Dentistry", path: "/services/kids-dentistry" },
      ],
    },
    {
      title: "Patient Resources",
      links: [
        { label: "FAQs", path: "/faq" },
        { label: "Gallery", path: "/gallery" },
        { label: "Knowledge Centre (Blogs)", path: "/blog" },
        
        
        { label: "Book an Appointment", path: "/book-appointment" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection
        breadcrumbLink="/"
        breadcrumbLabel="Home"
        title={sitemapHeroData.title}
        description={sitemapHeroData.shortDescription}
        backgroundImage={sitemapHeroData.heroImage}
        overlayGradient="from-[#23AAB9]/20 to-[#0194C1]/20"
        titleColor="text-shade"
        descriptionColor="text-black/70"
        align="left"
      />

      {/* Sitemap Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <Card
                key={index}
                className="bg-primary/30 backdrop-blur-xl shadow-lg  transition-transform"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-shade">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.path}
                          className="text-black/80 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FloatingActionButtons />
      <Footer />
    </div>
  );
};

export default Sitemap;
