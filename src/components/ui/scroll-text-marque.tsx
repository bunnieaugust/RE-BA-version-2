import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { cn } from '../../lib/utils';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ScrollBaseAnimationProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
  delay?: number;
}

export default function ScrollBaseAnimation({
  children,
  baseVelocity = 100,
  className,
}: ScrollBaseAnimationProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  const isHovered = useRef<boolean>(false);

  useAnimationFrame((t, delta) => {
    // Slow down if hovered
    const speedMultiplier = isHovered.current ? 0.2 : 1;
    let moveBy = directionFactor.current * (baseVelocity * 0.5) * (delta / 1000) * speedMultiplier;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div 
      className="overflow-hidden whitespace-nowrap flex flex-nowrap"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <motion.div
        className={cn("flex whitespace-nowrap flex-nowrap text-3xl md:text-5xl uppercase font-serif italic opacity-30 hover:opacity-100 transition-opacity duration-500", className)}
        style={{ x }}
      >
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
      </motion.div>
    </div>
  );
}
