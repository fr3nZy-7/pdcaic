
"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string; // allow overrides (padding, margin, etc.)
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={`rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
