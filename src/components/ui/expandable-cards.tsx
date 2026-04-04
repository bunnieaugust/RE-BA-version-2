"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandableCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  content: string[];
  color: string;
}

export const ExpandableHoverCards = ({
  items,
  className,
}: {
  items: ExpandableCard[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-col md:flex-row gap-4 w-full h-full", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            flex: hoveredIndex === idx ? 2 : 1,
            opacity: hoveredIndex !== null && hoveredIndex !== idx ? 0.6 : 1,
          }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className={cn(
            "relative h-[450px] md:h-[600px] rounded-[40px] overflow-hidden cursor-pointer border border-brand-charcoal/5 shadow-soft transition-all duration-500",
            item.color
          )}
        >
          <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
            <div className="flex flex-col gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/50 backdrop-blur-md flex items-center justify-center text-brand-olive shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal font-bold leading-tight">
                {item.title}
              </h3>
            </div>

            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mt-8"
                >
                  <p className="text-brand-charcoal/70 mb-6 font-medium">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.content.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-3 text-brand-charcoal/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-olive shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Decorative Background Pattern */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-olive/5 rounded-full blur-3xl" />
        </motion.div>
      ))}
    </div>
  );
};
