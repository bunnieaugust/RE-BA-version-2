'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

interface BorderGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  edgeSensitivity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
}

export default function BorderGlow({
  children,
  className,
  glowColor = "40 80 80",
  backgroundColor = "#060010",
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  edgeSensitivity = 30,
  coneSpread = 25,
  animated = false,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
}: BorderGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothOpacity = useSpring(opacity, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Check if mouse is near edges
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const isNearEdge = 
      x < edgeSensitivity || 
      x > rect.width - edgeSensitivity || 
      y < edgeSensitivity || 
      y > rect.height - edgeSensitivity;

    if (isNearEdge) {
      mouseX.set(x);
      mouseY.set(y);
      opacity.set(glowIntensity);
    } else {
      opacity.set(0);
    }
  };

  const handleMouseLeave = () => {
    opacity.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden", className)}
      style={{ borderRadius: `${borderRadius}px` }}
    >
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle ${glowRadius}px at ${smoothX}px ${smoothY}px, rgba(${glowColor}, ${smoothOpacity}), transparent)`,
          opacity: smoothOpacity,
        }}
      />
      {animated && (
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          animate={{
            background: colors.map(c => `linear-gradient(${coneSpread}deg, ${c}, transparent)`).join(', '),
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ opacity: 0.1 }}
        />
      )}
      <div className="relative z-10" style={{ backgroundColor }}>
        {children}
      </div>
    </div>
  );
}
