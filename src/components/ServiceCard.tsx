// src/components/ServiceCard.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  features?: {
    icon?: string;
    title: string;
    description?: string;
  }[];
  path?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  className = "",
  features,
  path,
}) => {
  return (
    <div className={`flex flex-col h-full justify-between ${className}`}>
      {/* Top section */}
      <div className="px-4 pt-4">
        {/* Square image container — transparent, no bg */}
        {image && (
          <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        <div className="text-center mt-3">
          <h3 className="text-xl font-semibold text-shade">{title}</h3>
          <p className="text-shade text-sm leading-relaxed mt-1">{description}</p>
        </div>
      </div>

      {/* Features */}
      <div className="px-4 flex-1">
        {features && features.length > 0 && (
          <div className="space-y-2 mb-4 mt-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-black/80 text-sm">{feature.title}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="px-4 pb-4">
        {path ? (
          <Link to={path}>
            <Button
              type="button"
              size="sm"
              className="w-full px-5 py-2 bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-medium rounded-full hover:shadow-md transition-all duration-300 hover:scale-105 justify-center"
            >
              Learn More
            </Button>
          </Link>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="w-full border-white/50 bg-white/10 text-white hover:bg-white/20"
          >
            Learn More
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
