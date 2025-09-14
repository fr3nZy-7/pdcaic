import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, image, className = "" }: ServiceCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
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
          <div className="text-primary group-hover:text-primary-foreground transition-colors">
            {icon}
          </div>
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center pb-6">
        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;