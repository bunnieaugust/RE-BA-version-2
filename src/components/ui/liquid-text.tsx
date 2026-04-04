"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

interface LiquidTextProps {
  text: string;
  fontSize?: number;
  className?: string;
}

export function LiquidText({ text, fontSize = 220, className }: LiquidTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const letters = text.split("");

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative w-full flex items-center justify-center overflow-hidden cursor-default select-none", className)}
    >
      <div 
        className="flex flex-wrap justify-center gap-x-2 md:gap-x-4"
        style={{ fontSize: `${fontSize}px`, lineHeight: 0.8 }}
      >
        {letters.map((letter, i) => {
          // Calculate distance from mouse to letter
          // This is a simplified version of liquid text
          const delay = i * 0.05;
          
          return (
            <motion.span
              key={i}
              initial={{ scale: 1, y: 0 }}
              animate={isHovered ? {
                scale: [1, 1.1, 0.9, 1.05, 1],
                y: [0, -20, 10, -5, 0],
                rotate: [0, 5, -5, 2, 0],
                color: ['#1A3622', '#D9B754', '#1A3622']
              } : {
                scale: 1,
                y: 0,
                rotate: 0,
                color: '#1A3622'
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                delay,
                ease: "easeInOut"
              }}
              className="font-serif font-bold inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </div>
      
      {/* Liquid Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <filter id="liquid">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
          </filter>
          <rect width="100%" height="100%" filter="url(#liquid)" fill="transparent" />
        </svg>
      </div>
    </div>
  );
}
