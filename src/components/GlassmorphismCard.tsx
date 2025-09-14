import { ReactNode } from "react";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
}

const GlassmorphismCard = ({ children, className = "" }: GlassmorphismCardProps) => {
  return (
    <div className={`
      backdrop-blur-md 
      bg-white/20 
      border 
      border-white/30 
      rounded-3xl 
      shadow-xl 
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassmorphismCard;