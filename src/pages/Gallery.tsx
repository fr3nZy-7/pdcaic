import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { X, Play } from "lucide-react";
import heroImage from "@/assets/hero-dental-clinic.jpg";
import dentalImplantImage from "@/assets/dental-implant.jpg";
import happyPatientsImage from "@/assets/happy-patients.jpg";
import FooterCTA from "@/components/FooterCTA";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import { Link } from "react-router-dom";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import HeroSection from "@/components/HeroSection";
import { ChevronLeft } from "lucide-react";
import WhatsAppUsButton from "@/components/WhatsAppUsButton";
import BookAppointmentButton from "@/components/BookAppointmentButton";

const Gallery = () => {

  const GalleryHeroData = {
    title: "Our Gallery",
    shortDescription: "Take a visual journey through our modern dental clinic, see our advanced treatments in action, and meet our dedicated team of professionals.",
    heroImage: "/images/common/gallery-bg.jpg",
  };

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All" },
    { id: "clinic", name: "Clinic" },
    { id: "treatments", name: "Treatments" },
    { id: "team", name: "Team" },
    { id: "before-after", name: "Before & After" },
  ];

  const galleryItems = [
    {
      id: 1,
      src: heroImage,
      alt: "Modern dental clinic interior",
      category: "clinic",
      type: "image",
      title: "Modern Dental Chair",
    },
    {
      id: 2,
      src: dentalImplantImage,
      alt: "Dental implant procedure",
      category: "treatments",
      type: "image",
      title: "Dental Implant Procedure",
    },
    {
      id: 3,
      src: happyPatientsImage,
      alt: "Happy patients",
      category: "team",
      type: "image",
      title: "Happy Patients",
    },
    {
      id: 4,
      src: heroImage,
      alt: "Dental equipment",
      category: "clinic",
      type: "image",
      title: "Advanced Equipment",
    },
    {
      id: 5,
      src: dentalImplantImage,
      alt: "Root canal treatment",
      category: "treatments",
      type: "image",
      title: "Root Canal Treatment",
    },
    {
      id: 6,
      src: happyPatientsImage,
      alt: "Dental team",
      category: "team",
      type: "image",
      title: "Our Professional Team",
    },
    {
      id: 7,
      src: heroImage,
      alt: "Before and after teeth whitening",
      category: "before-after",
      type: "image",
      title: "Teeth Whitening Results",
    },
    {
      id: 8,
      src: dentalImplantImage,
      alt: "Cosmetic dentistry results",
      category: "before-after",
      type: "image",
      title: "Smile Makeover",
    },
    {
      id: 9,
      src: "/placeholder-video.jpg",
      alt: "Clinic tour video",
      category: "clinic",
      type: "video",
      title: "Virtual Clinic Tour",
    },
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      

    <HeroSection
      breadcrumbLink="/"
      breadcrumbLabel="Home"
      title={GalleryHeroData.title}
      description={GalleryHeroData.shortDescription}
      backgroundImage={GalleryHeroData.heroImage}
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



      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-r from-blue-200/40 to-pink-100/70">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
           {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 mt-4 justify-center
                ${
                  selectedCategory === category.id
                    ? "bg-purple-600 text-white hover:bg-purple-700" // selected
                    : "bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white hover:opacity-90"
                }
                hover:scale-105 hover:shadow-lg
              `}
            >
              {category.name}
            </Button>
          ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.src)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 "
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-200/40 to-pink-100/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear directly from our patients about their experiences at 
              Padmanaabh Dental Clinic and how we've helped transform their smiles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <Card key={video} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted/50 relative cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-foreground font-semibold text-sm mb-1">
                        Patient Testimonial {video}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        Success story from our satisfied patient
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     
      <FooterCTA />
      <FloatingActionButtons />
      <Footer />
    </div>
  );
};

export default Gallery;