import React from "react";
import { cn } from "../../lib/utils";

export const LiquidGlass = ({
  children,
  className,
  variant = "default",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "strong";
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
        variant === "default" ? "bg-white/10 dark:bg-white/5" : "bg-white/20 dark:bg-white/10",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply dark:mix-blend-screen">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};
