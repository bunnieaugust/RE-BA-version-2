import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { LiquidGlass } from '../ui/liquid-glass';

interface Metric {
  value: string;
  label: string;
  desc: string;
  note: string;
}

interface MetricCardTwoProps {
  title: string;
  subtitle: string;
  metrics: Metric[];
  bgColor?: string;
  accentColor?: string;
  textColor?: string;
}

export function MetricCardTwo({
  title,
  subtitle,
  metrics,
  bgColor = "bg-brand-olive dark:bg-brand-olive",
  accentColor = "text-brand-yellow dark:text-brand-yellow",
  textColor = "text-brand-sand dark:text-brand-charcoal"
}: MetricCardTwoProps) {
  return (
    <section className={cn("section-spacing relative overflow-hidden", bgColor, textColor)}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[52px] leading-[1.15] font-serif mb-6"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn("text-lg leading-relaxed opacity-70")}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group"
            >
              <LiquidGlass className="p-10 md:p-12 flex flex-col items-center text-center h-full hover:bg-white/10 transition-colors duration-500">
                <div className={cn("text-[72px] md:text-[96px] font-serif mb-4 leading-none group-hover:scale-110 transition-transform duration-700", accentColor)}>
                  {metric.value}
                </div>
                <div className={cn("w-16 h-[1px] mb-8 opacity-30", accentColor.replace('text-', 'bg-'))}></div>
                <h3 className="text-xl font-serif mb-3 text-white">{metric.label}</h3>
                <p className="text-sm opacity-60 mb-6 max-w-xs leading-relaxed">{metric.desc}</p>
                <span className={cn("text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full border opacity-80", accentColor, accentColor.replace('text-', 'bg-').replace('text-', 'border-') + '/10', accentColor.replace('text-', 'border-') + '/20')}>
                  {metric.note}
                </span>
              </LiquidGlass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
