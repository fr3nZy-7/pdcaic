import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Award, 
  Users, 
  Heart, 
  Star,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Clock,
  MapPin
} from "lucide-react";
import happyPatientsImage from "@/assets/happy-patients.jpg";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import FooterCTA from "@/components/FooterCTA";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Padmanaabh",
      role: "Lead Dentist & Founder",
      specialization: "Implantology & Oral Surgery",
      experience: "15+ years",
      image: "/placeholder-doctor.jpg", // Replace with actual image
    },
    {
      name: "Dr. Priya Sharma",
      role: "Cosmetic Dentist",
      specialization: "Cosmetic & Restorative Dentistry",
      experience: "10+ years",
      image: "/placeholder-doctor.jpg", // Replace with actual image
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Orthodontist",
      specialization: "Orthodontics & Pediatric Dentistry",
      experience: "8+ years",
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-light to-primary overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                About 
                <span className="block text-accent">Padmanaabh Dental Clinic</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                Dedicated to providing exceptional dental care with a personal touch. 
                Our experienced team combines advanced technology with compassionate care 
                to deliver the best possible outcomes for our patients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Our Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={happyPatientsImage}
                alt="About Padmanaabh Dental Clinic"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Years of dedication and commitment to excellence have earned us the trust 
              and recognition of our community.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
                    <div className="text-primary">{achievement.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-primary">{achievement.number}</div>
                  <p className="text-muted-foreground">{achievement.label}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape the experience 
              we provide to our patients every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">{value.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet our experienced and dedicated dental professionals who are committed 
              to providing you with the highest quality care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full overflow-hidden">
                    <div className="w-full h-full bg-primary-light flex items-center justify-center">
                      <Users className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                  <p className="text-sm font-medium">{member.experience}</p>
                </CardHeader>
              </Card>
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