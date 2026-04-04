"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Recycle, HeartHandshake, Zap, Sparkles, CheckCircle2 } from "lucide-react";

interface SupplierSectionProps {
  title: string;
  subtitle: string;
  items: {
    title: string;
    icon: React.ReactNode;
    bullets: string[];
  }[];
  className?: string;
}

export const SupplierSection = ({ title, subtitle, items, className }: SupplierSectionProps) => {
  return (
    <section className={cn("py-32 bg-brand-ivory", className)}>
      <div className="section-container">
        <div className="text-center mb-24">
          <h2 className="text-[32px] md:text-[56px] font-serif text-brand-charcoal mb-6 uppercase tracking-tight">
            {title}
          </h2>
          <p className="text-xl text-brand-olive font-medium italic">{subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-brand-charcoal/10"
            >
              <div className="mb-6 text-brand-olive">{item.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-6">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-brand-charcoal/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-olive mt-0.5 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
