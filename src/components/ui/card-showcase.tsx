"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardShowcaseItem {
  number: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

interface CardShowcaseProps {
  cards: CardShowcaseItem[];
  className?: string;
}

export const CardShowcase = ({ cards, className }: CardShowcaseProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="group relative flex flex-col bg-white dark:bg-brand-charcoal/20 rounded-[40px] p-8 border border-brand-charcoal/5 dark:border-white/5 shadow-soft hover:shadow-2xl transition-all duration-700"
        >
          <div className="text-4xl font-bold text-brand-charcoal/20 dark:text-white/20 mb-6 font-serif">
            {card.number}
          </div>
          <h3 className="text-2xl font-serif text-brand-charcoal dark:text-white mb-4 group-hover:text-brand-olive dark:group-hover:text-brand-yellow transition-colors">
            {card.title}
          </h3>
          <p className="text-brand-charcoal/60 dark:text-white/40 text-sm leading-relaxed mb-8 flex-grow">
            {card.description}
          </p>
          <div className="relative h-48 w-full rounded-[24px] overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-olive dark:text-brand-yellow">
            {card.tag}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
