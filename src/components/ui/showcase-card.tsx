"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ShowcaseCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
  key?: React.Key;
}

export const ShowcaseCard = ({
  title,
  description,
  icon,
  image,
  className,
}: ShowcaseCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "group relative overflow-hidden rounded-[40px] bg-white dark:bg-brand-charcoal/20 border border-brand-charcoal/5 dark:border-white/5 shadow-soft hover:shadow-2xl transition-all duration-700 h-full flex flex-col p-1",
        className
      )}
    >
      <div className="relative h-64 overflow-hidden rounded-[36px]">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-brand-olive shadow-lg group-hover:bg-brand-olive group-hover:text-white transition-all duration-500">
          {icon}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif text-brand-charcoal dark:text-white mb-4 group-hover:text-brand-olive dark:group-hover:text-brand-yellow transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-brand-charcoal/60 dark:text-white/40 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="mt-auto flex items-center gap-3 text-brand-olive dark:text-brand-yellow font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-500">
          Tìm hiểu thêm
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};
