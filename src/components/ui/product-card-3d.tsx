"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProductCard3DProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  badge: string;
  price: string;
  className?: string;
}

export const ProductCard3D = ({
  title,
  description,
  image,
  tags,
  badge,
  price,
  className,
}: ProductCard3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative h-[550px] w-full rounded-[40px] bg-white border border-brand-charcoal/5 shadow-soft hover:shadow-2xl transition-all duration-500 flex flex-col p-8 group overflow-visible",
        className
      )}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="relative h-64 w-full mb-8 rounded-3xl overflow-visible"
      >
        <motion.img
          src={image}
          alt={title}
          animate={{
            scale: isHovered ? 1.2 : 1,
            y: isHovered ? -40 : 0,
          }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="w-full h-full object-contain drop-shadow-2xl z-20 relative"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-olive/5 rounded-3xl -z-10" />
      </div>

      <div
        style={{
          transform: "translateZ(50px)",
        }}
        className="flex flex-col flex-1"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-brand-olive/10 text-brand-olive rounded-full text-[10px] font-bold uppercase tracking-widest">
            {badge}
          </span>
          <span className="text-sm font-serif text-brand-charcoal/40">
            Giá: <span className="text-brand-olive font-bold">{price}</span>
          </span>
        </div>

        <h3 className="text-2xl font-serif text-brand-charcoal mb-3 group-hover:translate-x-2 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-sm text-brand-charcoal/60 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-brand-charcoal/5 rounded-full text-[10px] font-medium text-brand-charcoal/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
