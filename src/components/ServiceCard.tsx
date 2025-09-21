import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Note: We remove the GlassmorphismCard import here.
// This component should NOT have its own card wrapper.
// It will be wrapped by GlassmorphismCard in index.tsx.

interface ServiceCardProps {
  title: string;
  description: string;
  
  image?: string;
  className?: string;
  features?: {
    icon: string;
    title: string;
    description?: string;
  }[];
  path?: string;
}

const ServiceCard = ({ title, description,  image, className = "", features, path }: ServiceCardProps) => {
  return (
    <> {/*  */}
      {image && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader className="text-center">
       
        <CardTitle className="text-2xl font-semibold text-shade">{title}</CardTitle>
        <CardDescription className="text-shade text-md leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        {features && features.length > 0 && (
          <div className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-black/80 text-md">{feature.title}</span>
              </div>
            ))}
          </div>
        )}

        {path ? (
          <Link to={path}>
            <Button type="submit" size="lg" className="w-full inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 mt-4 justify-center">
                    Learn More
              
                  </Button>
          </Link>
        ) : (
          <Button
            variant="outline"
            className="w-full border-white/50 bg-white/10 text-white hover:bg-white/20"
          >
            Learn More
            </Button>
        )}
      </CardContent>
    </>
  );
};

export default ServiceCard;