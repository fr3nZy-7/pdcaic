
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Award, 
  Users, 
  Heart, 
  Star,
  
  Stethoscope,
  
  ChevronLeft
} from "lucide-react";
import drnehaImage from "@/assets/dr-neha.jpg";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import FooterCTA from "@/components/FooterCTA";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import { Link } from "react-router-dom";
import WhatsAppUsButton from "@/components/WhatsAppUsButton";
import BookAppointmentButton from "@/components/BookAppointmentButton";
import HeroSection from "@/components/HeroSection";

const About = () => {

  const AboutHeroData = {
    title: "We are Padmanaabh Dental Clinic and Implant Centre",
    shortDescription: "Dedicated to providing exceptional dental care with a personal touch. Our experienced team combines advanced technology with compassionate care to deliver the best possible outcomes for our patients.",
    heroImage: drnehaImage,
  };

  const teamMembers = [
    
    {
      name: "Dr. Meenakshi Gavankar",
      role: "Orthodontist",
      specialization: "Orthodontics",
      experience: "10+ years",
      image: "/placeholder-doctor.jpg", // Replace with actual image
    },
    {
      name: "Dr. Neha Deshpande Tambe",
      role: "Lead Dentist & Founder",
      specialization: "Endodontics, Conservative and Aesthetic Dentistry",
      experience: "10+ years",
      image: "/placeholder-doctor.jpg", // Replace with actual image
    },
    {
      name: "Dr. Swapnil Sabnis",
      role: "Oral Surgeon",
      specialization: "Oral Surgery and Dental Implants",
      experience: "10+ years",
      image: "/placeholder-doctor.jpg", // Replace with actual image
    },
  ];

  const achievements = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "5000+",
      label: "Happy Patients",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "15+",
      label: "Years Experience",
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      number: "50+",
      label: "Procedures",
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: "4.9",
      label: "Patient Rating",
    },
  ];

  const values = [
    {
      title: "Patient-Centered Care",
      description: "We put our patients first, ensuring comfort and satisfaction in every treatment.",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: "Excellence in Treatment",
      description: "We maintain the highest standards of dental care using advanced technology.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Compassionate Approach",
      description: "We understand dental anxiety and provide gentle, caring treatment.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Continuous Learning",
      description: "Our team stays updated with the latest dental techniques and technologies.",
      icon: <Star className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      
    {/* Hero sction*/}
    <HeroSection
      breadcrumbLink="/"
      breadcrumbLabel="Home"
      title={AboutHeroData.title}
      description={AboutHeroData.shortDescription}
      backgroundImage={AboutHeroData.heroImage}
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


      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-shade">Our Story</h2>
            <div className="prose prose-lg mx-auto text-black/80">
              <p className="mb-6">
                Founded with a vision to transform dental care in Lohegaon, Pune, 
                Padmanaabh Dental Clinic has been serving the community for over 15 years. 
                What started as a small practice has grown into a comprehensive dental center, 
                trusted by thousands of patients across Pune and surrounding areas.
              </p>
              <p className="mb-6">
                Our commitment to excellence, combined with state-of-the-art technology and 
                a patient-first approach, has made us one of the most trusted dental clinics 
                in the region. We believe that everyone deserves access to quality dental care 
                in a comfortable, welcoming environment.
              </p>
              <p>
                Today, we continue to expand our services and expertise, always staying at the 
                forefront of dental innovation while maintaining the personal touch that our 
                patients have come to expect and appreciate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
<section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">
        Our Achievements
      </h2>
      <p className="text-lg text-black/80 max-w-3xl mx-auto">
        Years of dedication and commitment to excellence have earned us the trust 
        and recognition of our community.
      </p>
    </div>

    {/* Achievements Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {achievements.map((achievement, index) => (
        <GlassmorphismCard 
          key={index} 
          className="p-8 text-center bg-primary/40 backdrop-blur-2xl shadow-lg hover:scale-105 transition-transform"
        >
          <CardHeader>
            {/* Icon Circle */}
            <div className="mx-auto mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <div className="text-primary text-2xl">{achievement.icon}</div>
            </div>

            {/* Numbers + Labels */}
            <div className="text-3xl font-bold text-shade mb-2">
              {achievement.number}
            </div>
            <p className="text-black/80">{achievement.label}</p>
          </CardHeader>
        </GlassmorphismCard>
      ))}
    </div>
  </div>
</section>

{/* Our Values Section */}
<section className="relative bg-gradient-to-br from-[#23AAB9] to-[#0194C1] min-h-[70vh] flex items-center"
 style={{
  backgroundImage: `url(/images/common/section-bg.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundBlendMode: "overlay",
}}
>



  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">
        Our Values
      </h2>
      <p className="text-lg text-black/80 max-w-3xl mx-auto">
        These core values guide everything we do and shape the experience 
        we provide to our patients every day.
      </p>
    </div>
    

    {/* Values Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {values.map((value, index) => (
        <GlassmorphismCard
          key={index}
          className="p-6 bg-shade/30 backdrop-blur-3xl shadow-lg hover:scale-105 transition-transform"
        >
          <CardContent className="flex items-start space-x-4">
            {/* Icon */}
            <div className="w-12 h-12 bg-white/50 rounded-lg  backdrop-blur-3xl flex items-center justify-center flex-shrink-0 shadow-md">
              <div className="text-shade text-xl">{value.icon}</div>
            </div>
            {/* Text */}
            <div>
              <h3 className="font-bold text-lg text-shade mb-2">{value.title}</h3>
              <p className="text-black/80">{value.description}</p>
            </div>
          </CardContent>
        </GlassmorphismCard>
      ))}
    </div>
  </div>
</section>

      {/* Our Team Section */}
    <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shade">
          Our Team
        </h2>
        <p className="text-lg text-black/80 max-w-3xl mx-auto">
          Meet our experienced and dedicated dental professionals who are committed 
          to providing you with the highest quality care.
        </p>
      </div>

    {/* Team Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <GlassmorphismCard 
          key={index} 
          className="p-8 text-center bg-primary/40 backdrop-blur-2xl shadow-lg hover:scale-105 transition-transform"
        >
          <CardHeader>
            {/* Profile Image or Placeholder */}
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-white/40 backdrop-blur-2xl flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
              )}
            </div>

            {/* Name & Role */}
            <CardTitle className="text-xl font-bold text-shade">{member.name}</CardTitle>
            <p className="text-primary text-xl font-bold">{member.role}</p>

            {/* Details */}
            <p className="text-md text-black/90">{member.specialization}</p>
            <p className="text-md font-bold text-black/80">{member.experience}</p>
          </CardHeader>
        </GlassmorphismCard>
      ))}
    </div>
  </div>
</section>

      
      <FloatingActionButtons />
      <FooterCTA/>
      <Footer />
    </div>
  );
};

export default About;