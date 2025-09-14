import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
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
      <section className="relative bg-gradient-to-br from-primary-light to-primary overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Smile is Our 
                <span className="block text-accent">Priority</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                Experience exceptional dental care at Padmanaabh Dental Clinic. 
                We provide comprehensive dental services with advanced technology 
                and a gentle touch in Lohegaon, Pune.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Call Now: +91 9999999999
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <img
                src={heroImage}
                alt="Modern dental clinic interior"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Patient Testimonials</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Don't just take our word for it. Hear what our satisfied patients 
              have to say about their experience at our clinic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/90 mb-4 italic">
                    "{testimonial.review}"
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Schedule Your Visit?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take the first step towards better oral health. Our friendly team 
                is ready to welcome you to our modern dental clinic in Lohegaon, Pune.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">
                      Lane No. 1 Sainik Colony, Pathore Wasti, Lohegaon, Pune
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+91 9999999999</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-muted-foreground">Mon-Sat: 9:00 AM - 8:00 PM</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-3">
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3">
                  Call Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={happyPatientsImage}
                alt="Happy patients at dental clinic"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
