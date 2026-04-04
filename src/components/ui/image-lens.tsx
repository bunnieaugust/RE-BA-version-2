"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageLensProps {
  src: string;
  alt: string;
  zoom?: number;
  lensSize?: number;
  className?: string;
}

export const ImageLens = ({
  src,
  alt,
  zoom = 2,
  lensSize = 150,
  className,
}: ImageLensProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showLens, setShowLens] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    if (x < 0 || y < 0 || x > width || y > height) {
      setShowLens(false);
    } else {
      setPosition({ x, y });
      setShowLens(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden cursor-none rounded-[32px]", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      
      <AnimatePresence>
        {showLens && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="pointer-events-none absolute z-50 border-2 border-white/50 shadow-2xl rounded-full overflow-hidden"
            style={{
              width: lensSize,
              height: lensSize,
              left: position.x - lensSize / 2,
              top: position.y - lensSize / 2,
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${containerRef.current?.offsetWidth! * zoom}px ${
                containerRef.current?.offsetHeight! * zoom
              }px`,
              backgroundPosition: `-${position.x * zoom - lensSize / 2}px -${
                position.y * zoom - lensSize / 2
              }px`,
            }}
          >
            <div className="absolute inset-0 border-[10px] border-white/20 rounded-full"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
