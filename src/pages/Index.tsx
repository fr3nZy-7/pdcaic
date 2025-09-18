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
  Phone
} from "lucide-react";
import heroImage from "@/assets/hero-dental-clinic.jpg";
import dentalImplantImage from "@/assets/dental-implant.jpg";
import happyPatientsImage from "@/assets/happy-patients.jpg";
import logo from "@/assets/logo.svg";
import shortLogo from "@/assets/short-logo-wo-name.svg";
import FooterCTA from "@/components/FooterCTA";


const Index = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments",
      icon: <Stethoscope className="h-8 w-8" />,
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions for missing teeth with natural appearance",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and smile makeovers to enhance your appearance",
      icon: <Star className="h-8 w-8" />,
    },
    {
      title: "Root Canal Treatment",
      description: "Advanced endodontic therapy to save infected or damaged teeth",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Orthodontics",
      description: "Braces and aligners to straighten teeth and correct bite issues",
      icon: <Smile className="h-8 w-8" />,
    },
    {
      title: "Oral Surgery",
      description: "Surgical procedures including extractions and corrective jaw surgery",
      icon: <Heart className="h-8 w-8" />,
    },
  ];

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

  const testimonials = [
    {
      name: "Priya Sharma",
      review: "Excellent service and care. The team made me feel comfortable throughout my treatment.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      review: "Professional staff and modern facilities. Highly recommend for dental implants.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      review: "Best dental clinic in Pune. They truly care about their patients' well-being.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        {/* Background dental chair image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern dental clinic interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left side - Glassmorphism Card */}
            <div className="animate-fade-in">
              <GlassmorphismCard className="p-8 lg:p-12">
                {/* Logo and Header */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-22 h-22 bg-white rounded-full flex items-center justify-center mr-4">
                      
                      <img
                      src={shortLogo}
                      alt="clinic logo"
                      />
                    
                      
                    </div>
                    <div>
                      <h2 className="text-5xl font-bold text-shade font-heading">PADMANAABH</h2>
                      <p className="text-2xl font-bold text-shade/80 font-heading">Dental Clinic and Implant Centre</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-primary-dark mr-2" />
                    <span className="text-primary-dark underline">Lohegaon, Pune.</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-primary-dark mr-2">Top rated in Pune</span>
                    <span className="font-bold text-primary-dark mr-2">4.7/5</span>
                    <div className="flex text-yellow-400">
                      {"★★★★☆".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-heading">
                  Your Smile, Our Passion
                  <span className="block">– Book Today!</span>
                </h1>
                
                <p className="text-lg text-white/90 mb-8">
                  Experience compassionate care and advanced treatments 
                  tailored just for you.
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
                    <span>Open Today ! 10:00 AM - 09:00 PM</span>
                    <a href="/contact" className="ml-2 text-primary-dark underline">
                    <span className="text-primary-dark underline ml-2">Check Timings</span>
                    </a>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+91-7507 32 55 39</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsAppUsButton 
                    onClick={() => window.open('https://wa.me/917507325539', '_blank')}
                  />
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with compassionate care to deliver 
              exceptional dental experiences that exceed your expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-20 h-20 bg-primary-light rounded-full flex items-center justify-center">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Comprehensive Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From routine cleanings to complex procedures, we offer a full range of 
              dental services to keep your smile healthy and beautiful.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="px-8 py-3">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-white text-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Patient Testimonials</h2>
            <p className="text-lg  max-w-3xl mx-auto">
              Don't just take our word for it. Hear what our satisfied patients 
              have to say about their experience at our clinic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black-foreground/30 border-primary-foreground/60">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-primary mb-4 italic">
                    "{testimonial.review}"
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      <FooterCTA />
      <Footer />
      <FloatingActionButtons />
    </div>
  );
};

export default Index;
