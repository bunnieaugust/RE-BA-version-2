"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardSwapProps {
  children: React.ReactNode;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("w-full h-full bg-white dark:bg-brand-charcoal/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-brand-charcoal/5 dark:border-white/10 flex flex-col justify-center group transition-all duration-500 hover:border-brand-olive/30 dark:hover:border-brand-yellow/30", className)}>
      {children}
    </div>
  );
};

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  className
}: CardSwapProps) {
  const cards = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (pauseOnHover && isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, delay);

    return () => clearInterval(interval);
  }, [cards.length, delay, pauseOnHover, isHovered]);

  return (
    <div 
      className={cn("relative w-full h-full flex items-center justify-center", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="popLayout">
        {cards.map((card, index) => {
          // Calculate relative index to current
          const relativeIndex = (index - currentIndex + cards.length) % cards.length;
          
          // Only show top 3 cards
          if (relativeIndex > 2) return null;

          const zIndex = 30 - relativeIndex * 10;
          const scale = 1 - relativeIndex * 0.05;
          const y = relativeIndex * verticalDistance;
          const opacity = 1 - relativeIndex * 0.3;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ 
                opacity, 
                scale, 
                y, 
                zIndex,
                filter: relativeIndex === 0 ? 'blur(0px)' : `blur(${relativeIndex * 2}px)`
              }}
              exit={{ opacity: 0, scale: 1.1, y: -100, zIndex: 40 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="absolute w-full max-w-md aspect-[4/3]"
              style={{ originY: 0 }}
            >
              {card}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
