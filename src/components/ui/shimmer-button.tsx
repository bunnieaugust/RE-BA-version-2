import React from "react";
import { cn } from "@/lib/utils";

export const ShimmerButton = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-brand-olive bg-[linear-gradient(110deg,#1A3622,45%,#2A4A32,55%,#1A3622)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2 focus:ring-offset-brand-ivory",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
