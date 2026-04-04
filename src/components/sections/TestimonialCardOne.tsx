import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialCardOneProps {
  title: string;
  items: Testimonial[];
  bgColor?: string;
}

export function TestimonialCardOne({
  title,
  items,
  bgColor = "bg-brand-ivory"
}: TestimonialCardOneProps) {
  return (
    <section className={cn("section-spacing relative overflow-hidden", bgColor)}>
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[52px] leading-[1.1] font-serif text-brand-charcoal"
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-white rounded-[32px] p-10 md:p-12 shadow-sm border border-brand-charcoal/5 flex flex-col justify-between relative group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mb-10">
                <div className="text-brand-yellow/40 text-6xl font-serif leading-none mb-6 group-hover:text-brand-yellow transition-colors duration-500">“</div>
                <p className="text-lg md:text-xl text-brand-charcoal/90 leading-relaxed font-serif italic">
                  {item.quote}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-brand-sand flex items-center justify-center text-brand-charcoal font-serif text-2xl border border-brand-charcoal/5 shadow-inner">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-brand-charcoal tracking-tight">{item.author}</h4>
                  <p className="text-xs uppercase tracking-widest text-brand-charcoal/40 font-bold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
