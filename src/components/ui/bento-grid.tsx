import { cn } from "@/lib/utils";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  key?: React.Key;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, white, transparent)`
  );

  return (
    <motion.div
      onMouseMove={onMouseMove}
      whileHover={{ y: -5 }}
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 bg-white border border-brand-charcoal/5 justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover/bento:opacity-100 transition duration-300"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(26, 54, 34, 0.06), transparent)",
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
        }}
      />
      
      <div className="relative z-10">
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="p-2 w-fit rounded-2xl bg-brand-olive/5 mb-4">
            {icon}
          </div>
          <div className="font-serif font-bold text-brand-charcoal text-xl mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-brand-charcoal/60 text-sm">
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
