import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import ServiceCard from "@/components/ServiceCard";

interface Service {
  title: string;
  shortDescription: string;
  iconPath: string;
  features: string[];
  slug: string;
}

interface CarouselProps {
  services: Service[];
}

const ServicesCarousel = ({ services }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(3);

  // Update slides per page based on screen width
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesPerPage(1); // mobile
      } else if (window.innerWidth < 1024) {
        setSlidesPerPage(2); // tablet
      } else {
        setSlidesPerPage(3); // desktop
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, services.length - slidesPerPage)
    );
  };

  const showPrevButton = currentIndex > 0;
  const showNextButton = currentIndex < services.length - slidesPerPage;

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerPage)}%)`,
            width: `${(100 / slidesPerPage) * services.length}%`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{ width: `${100 / slidesPerPage}%` }}
              className="px-4 box-border"
            >
              <GlassmorphismCard className="bg-white/40 backdrop-blur-3xl shadow-lg hover:shadow-xl transition-shadow">
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  iconPath={service.iconPath}
                  features={service.features}
                  path={`/services/${service.slug}`}
                />
              </GlassmorphismCard>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {showPrevButton && (
        <button
          onClick={handlePrev}
          className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-md"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}
      {showNextButton && (
        <button
          onClick={handleNext}
          className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-md"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ServicesCarousel;
