"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareCard = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative bg-white dark:bg-white/5 rounded-3xl p-8 border border-brand-charcoal/5 dark:border-white/5 overflow-hidden group/card transition-all duration-300",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div
            variants={glowVariants}
            className="absolute inset-0 bg-gradient-to-r from-brand-green/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
          />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

const glowVariants = {
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  top: { x: 0, y: -20, opacity: 1 },
  bottom: { x: 0, y: 20, opacity: 1 },
  left: { x: -20, y: 0, opacity: 1 },
  right: { x: 20, y: 0, opacity: 1 },
};
