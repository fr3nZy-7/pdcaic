import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  iconPath: string; // The icon prop is now a string path
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
    <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
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
        <div className="mx-auto mb-4 w-16 h-16 bg-primary-light rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
          <img
            src={iconPath} // Use the iconPath from props
            alt={`${title} icon`}
            className="w-10 h-10 group-hover:invert transition-colors"
          />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        {features && features.length > 0 && (
          <div className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">{feature.title}</span>
              </div>
            ))}
          </div>
        )}
        
        {path ? (
          <Link to={path}>
            <Button 
              variant="outline" 
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Learn More
            </Button>
          </Link>
        ) : (
          <Button 
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Learn More
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;