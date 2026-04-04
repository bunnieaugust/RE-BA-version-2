"use client";
import React from "react";
import { motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrganicBlobImageProps {
  src: string;
  alt: string;
  className?: string;
  parallaxOffset?: MotionValue<number> | number;
}

export const OrganicBlobImage = ({
  src,
  alt,
  className,
  parallaxOffset = 0,
}: OrganicBlobImageProps) => {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <motion.div
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full overflow-hidden border-2 border-brand-olive/20"
      >
        <motion.img
          src={src}
          alt={alt}
          style={{ y: parallaxOffset }}
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
};
