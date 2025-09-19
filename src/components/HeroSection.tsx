import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import GlassmorphismCard from "./GlassmorphismCard";

interface HeroSectionProps {
  breadcrumbLink: string;
  breadcrumbLabel: string;
  title: string;
  description: string;
  backgroundImage: string;
  overlayGradient?: string; // e.g. "from-[#23AAB9]/20 to-[#0194C1]/20"
  titleColor?: string;      // e.g. "text-white" or "text-shade"
  descriptionColor?: string;// e.g. "text-white/80" or "text-black/70"
  align?: "left" | "center"; // control alignment
  children?: React.ReactNode; // action buttons or custom content
}

export default function HeroSection({
  breadcrumbLink,
  breadcrumbLabel,
  title,
  description,
  backgroundImage,
  overlayGradient = "from-[#23AAB9]/20 to-[#0194C1]/20",
  titleColor = "text-white",
  descriptionColor = "text-white/80",
  align = "left",
  children,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#23AAB9] to-[#0194C1]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${overlayGradient}`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        {/* Breadcrumb */}
        <Link
          to={breadcrumbLink}
          className="inline-flex items-center text-shade font-bold hover:text-primary mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          {breadcrumbLabel}
        </Link>

        {/* Content */}
        <div
          className={`max-w-3xl ${
            align === "center" ? "mx-auto text-center" : ""
          }`}
        >
          <GlassmorphismCard className="p-8 md:p-12 bg-white/40 backdrop-blur-2xl shadow-lg">
            <h1 className={`text-3xl md:text-5xl font-bold mb-6 ${titleColor}`}>
              {title}
            </h1>
            <p
              className={`text-lg md:text-xl mb-8 leading-relaxed ${descriptionColor}`}
            >
              {description}
            </p>
            {children && <div className="flex flex-col sm:flex-row gap-4 justify-center">{children}</div>}
          </GlassmorphismCard>
        </div>
      </div>
    </section>
  );
}
