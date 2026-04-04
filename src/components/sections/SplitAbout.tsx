import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { LiquidGlass } from '../ui/liquid-glass';

interface SplitAboutProps {
  label?: string;
  title: string;
  description: string;
  quote?: string;
  image: string;
  imageAlt?: string;
  infoBlocks?: string[];
  reverse?: boolean;
  bgColor?: string;
  children?: React.ReactNode;
}

export function SplitAbout({
  label,
  title,
  description,
  quote,
  image,
  imageAlt = "About image",
  infoBlocks,
  reverse = false,
  bgColor = "bg-brand-sand dark:bg-black/20",
  children
}: SplitAboutProps) {
  return (
    <section className={cn("section-spacing overflow-hidden transition-colors duration-500", bgColor)}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
              "relative rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl group",
              reverse ? "order-2" : "order-2 lg:order-1"
            )}
          >
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {quote && (
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent flex items-end p-8 md:p-12 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-serif text-xl md:text-2xl leading-snug italic transform group-hover:translate-y-[-8px] transition-transform duration-500">"{quote}"</p>
              </div>
            )}
          </motion.div>
          
          {/* Text */}
          <div className={cn(
            "flex flex-col items-start",
            reverse ? "order-1" : "order-1 lg:order-2"
          )}>
            {label && (
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold tracking-[0.2em] uppercase text-brand-olive dark:text-brand-yellow mb-6"
              >
                {label}
              </motion.span>
            )}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[40px] md:text-[56px] leading-[1.1] font-serif text-brand-charcoal dark:text-white mb-8"
            >
              {title}
            </motion.h2>
            
            <div className="reading-width mx-0">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-brand-charcoal/70 dark:text-white/70 mb-12 leading-relaxed whitespace-pre-line"
              >
                {description}
              </motion.p>
              
              {infoBlocks && (
                <div className="grid grid-cols-1 gap-6 w-full">
                  {infoBlocks.map((block, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: reverse ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                    >
                      <LiquidGlass className="flex items-center gap-6 p-6 hover:bg-white/40 dark:hover:bg-white/10 transition-all duration-500 group cursor-default border border-transparent hover:border-brand-olive/20 dark:hover:border-brand-yellow/20 rounded-2xl">
                        <div className="w-12 h-12 rounded-full bg-brand-olive dark:bg-brand-yellow text-white dark:text-brand-charcoal flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <span className="font-serif font-bold text-lg">{i + 1}</span>
                        </div>
                        <p className="text-brand-charcoal dark:text-white font-medium text-lg leading-tight group-hover:translate-x-1 transition-transform duration-500">{block}</p>
                      </LiquidGlass>
                    </motion.div>
                  ))}
                </div>
              )}

              {children && (
                <div className="w-full mt-8">
                  {children}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
