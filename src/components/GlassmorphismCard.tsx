import { ReactNode } from "react";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
}

const GlassmorphismCard = ({ children, className = "" }: GlassmorphismCardProps) => {
  return (
    <div className={`
      backdrop-blur-md 
      
      border 
      border-white/30 
      rounded-3xl 
      shadow-xl 
      ${className || "bg-white/20" }
    `}>
      {children}
    </div>
  );
};

export default GlassmorphismCard;