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
  iconPath: string;
  image?: string;
  className?: string;
  features?: {
    icon: string;
    title: string;
    description?: string;
  }[];
  path?: string;
}

const ServiceCard = ({ title, description, iconPath, image, className = "", features, path }: ServiceCardProps) => {
  return (
    <> {/* We are removing the Card component from here */}
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
        <div className="mx-auto mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <img
            src={iconPath}
            alt={`${title} icon`}
            className="w-10 h-10 invert"
          />
        </div>
        <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
        <CardDescription className="text-white/80 leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        {features && features.length > 0 && (
          <div className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                <span className="text-white text-sm">{feature.title}</span>
              </div>
            ))}
          </div>
        )}

        {path ? (
          <Link to={path}>
            <Button
              variant="outline"
              className="w-full border-white/50 bg-white/10 text-white hover:bg-white/20"
            >
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