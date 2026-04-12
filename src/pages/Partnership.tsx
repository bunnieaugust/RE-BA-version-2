import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2, 
  Gift, 
  Hotel, 
  PenTool, 
  CheckCircle2, 
  ChevronDown,
  Briefcase,
  Package,
  Leaf,
  Users
} from 'lucide-react';
import { cn } from '../lib/utils';
import { SplitAbout } from '../components/sections/SplitAbout';
import { CometCard } from '../components/ui/comet-card';
import { MetricCardTwo } from '../components/sections/MetricCardTwo';
import { AnimatedCardStack } from '../components/ui/animated-card-stack';
import { GlowCard } from '../components/ui/spotlight-card';
import { Timeline } from '../components/ui/timeline';
import { Marquee } from '../components/ui/marquee';

export function Partnership() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLDivElement>(null);

  const timelineData = t.partnership.process.steps.map((step: any) => ({
    title: step.step,
    content: (
      <div className="bg-white p-8 md:p-12 rounded-[32px] border border-brand-charcoal/5 shadow-sm">
        <h4 className="text-2xl md:text-3xl font-serif text-brand-charcoal mb-4">{step.title}</h4>
        <p className="text-brand-charcoal/70 text-lg leading-relaxed">{step.description}</p>
      </div>
    )
  }));

  return (
    <div className="flex flex-col w-full">
      <PartnershipHero formRef={formRef} />
      <WhoIsThisFor />
      <PartnershipModels />
      <WhyPartner />
      <section className="bg-white py-20">
        <Timeline 
          data={timelineData} 
          headline={t.partnership.process.headline}
          description={t.partnership.process.description}
        />
      </section>
      <Marquee className="bg-brand-olive py-10 text-white border-y border-white/10 overflow-hidden">
        <span className="mx-16 text-2xl font-serif italic tracking-[0.2em] uppercase opacity-90 whitespace-nowrap">Collaborate for Change</span>
        <span className="mx-16 text-2xl font-serif italic tracking-[0.2em] uppercase opacity-90 whitespace-nowrap">Empower Communities</span>
        <span className="mx-16 text-2xl font-serif italic tracking-[0.2em] uppercase opacity-90 whitespace-nowrap">Sustainable Future</span>
        <span className="mx-16 text-2xl font-serif italic tracking-[0.2em] uppercase opacity-90 whitespace-nowrap">Regenerative Impact</span>
        <span className="mx-16 text-2xl font-serif italic tracking-[0.2em] uppercase opacity-90 whitespace-nowrap">Crafted with Purpose</span>
      </Marquee>
      <FeaturedUseCases />
      <InquiryForm formRef={formRef} />
      <PartnershipFaq />
    </div>
  );
}

function PartnershipHero({ formRef }: { formRef: React.RefObject<HTMLDivElement> }) {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-brand-sand dark:bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-sand/50 via-transparent to-brand-sand dark:from-black/50 dark:to-black" />
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply dark:mix-blend-screen">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium tracking-wider uppercase text-brand-olive mb-4"
            >
              {t.partnership.hero.eyebrow}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] font-serif text-brand-charcoal dark:text-white mb-6 tracking-tight"
            >
              {t.partnership.hero.headline}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-brand-charcoal/80 dark:text-white/60 mb-10 max-w-xl leading-relaxed"
            >
              {t.partnership.hero.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-olive text-white px-8 py-4 rounded-full font-medium hover:bg-brand-olive/90 hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-center gap-2 group"
              >
                {t.partnership.hero.primaryCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/about" className="border border-brand-charcoal/20 dark:border-white/20 text-brand-charcoal dark:text-white px-8 py-4 rounded-full font-medium hover:border-brand-charcoal dark:hover:border-white hover:bg-brand-charcoal/5 dark:hover:bg-white/5 transition-all duration-300">
                {t.partnership.hero.secondaryCta}
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {t.partnership.hero.badges.map((badge: string, i: number) => (
                <span key={i} className="text-xs font-medium px-4 py-2 bg-white/50 dark:bg-white/10 border border-brand-charcoal/5 dark:border-white/5 rounded-full text-brand-charcoal/70 dark:text-white/60">
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
          
          {/* Right: Visual */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative rounded-[32px] overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl"
            >
              <div className="absolute inset-0 bg-brand-charcoal/10 z-10 mix-blend-multiply"></div>
              <img 
                src="https://i.pinimg.com/1200x/35/c9/13/35c9137e20754967c1d2ba18af5a4693.jpg" 
                alt="Partnership Collaboration" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoIsThisFor() {
  const { t } = useLanguage();
  
  const icons = [
    <Building2 className="w-6 h-6" />,
    <Gift className="w-6 h-6" />,
    <Hotel className="w-6 h-6" />,
    <PenTool className="w-6 h-6" />
  ];

  return (
    <section className="section-spacing bg-brand-ivory dark:bg-black">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-wider uppercase text-brand-olive dark:text-brand-yellow mb-4 block"
          >
            {t.partnership.whoIsThisFor.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[52px] leading-[1.1] font-serif text-brand-charcoal dark:text-white mb-6"
          >
            {t.partnership.whoIsThisFor.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-charcoal/70 dark:text-white/60"
          >
            {t.partnership.whoIsThisFor.description}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.partnership.whoIsThisFor.items.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowCard customSize className="h-full rounded-[32px] p-10 bg-white dark:bg-brand-charcoal/20 border border-brand-charcoal/5 dark:border-white/5 group flex flex-col justify-between hover:shadow-xl transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-brand-sand dark:bg-white/10 flex items-center justify-center mb-8 text-brand-olive dark:text-brand-yellow group-hover:scale-110 group-hover:bg-brand-olive dark:group-hover:bg-brand-yellow group-hover:text-white dark:group-hover:text-brand-charcoal transition-all duration-500 shadow-sm">
                  {icons[i]}
                </div>
                <div>
                  <h3 className="text-[24px] font-serif text-brand-charcoal dark:text-white mb-4 leading-tight">{item.title}</h3>
                  <p className="text-brand-charcoal/70 dark:text-white/60 text-base leading-relaxed">{item.description}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnershipModels() {
  const { t } = useLanguage();
  
  const images = [
    "https://i.pinimg.com/736x/e8/a4/5e/e8a45e7d6c95d844078c556387323f3a.jpg", // Wholesale
    "https://i.pinimg.com/1200x/35/c9/13/35c9137e20754967c1d2ba18af5a4693.jpg", // Custom
    "https://i.pinimg.com/1200x/6c/33/b3/6c33b34f09db802f78780313580d7ed5.jpg", // Material
    "https://i.pinimg.com/736x/39/42/06/3942068c0153280a4b88c5b09ced6ffd.jpg"
  ];

  return (
    <section className="section-spacing bg-brand-charcoal dark:bg-black text-brand-sand">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-wider uppercase text-brand-yellow mb-4 block"
            >
              {t.partnership.models.label}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[40px] md:text-[52px] leading-[1.1] font-serif text-white mb-6"
            >
              {t.partnership.models.headline}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-brand-sand/70 dark:text-white/60 leading-relaxed"
            >
              {t.partnership.models.description}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.partnership.models.items.map((model: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={cn(
                "group relative rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700",
                i === 0 || i === 3 ? "md:col-span-2 aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/5] md:aspect-square"
              )}
            >
              <CometCard className="w-full h-full rounded-[32px]">
                <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent opacity-90 z-10" />
                
                <img 
                  src={images[i]} 
                  alt={model.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {model.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">{model.title}</h3>
                  <p className="text-brand-sand/80 text-lg max-w-xl leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {model.description}
                  </p>
                </div>
              </CometCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyPartner() {
  const { t } = useLanguage();

  const cardItems = t.partnership.whyPartner.reasons.map((reason: any, i: number) => ({
    title: reason.title,
    description: reason.description,
    image: [
      "http://designwanted.com/wp-content/uploads/2024/05/Bananatex-by-QWSTION-_-fibers-of-Abaca-banana-plants.jpg.webp",
      "https://designwanted.com/wp-content/uploads/2024/05/Bananatex-by-QWSTION-_-fibers-of-Abaca-banana-plants-7.jpg.webp",
      "https://i.pinimg.com/1200x/6c/33/b3/6c33b34f09db802f78780313580d7ed5.jpg",
      "https://i.pinimg.com/1200x/42/04/a1/4204a113f75458c9944011fa93f999c7.jpg"
    ][i % 4]
  }));

  return (
    <section className="section-spacing overflow-hidden bg-brand-sand dark:bg-black">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col items-start order-1">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-wider uppercase text-brand-olive dark:text-brand-yellow mb-4"
            >
              {t.partnership.whyPartner.label}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[36px] md:text-[48px] lg:text-[52px] leading-[1.15] font-serif text-brand-charcoal dark:text-white mb-8"
            >
              {t.partnership.whyPartner.headline}
            </motion.h2>
            
            <div className="reading-width mx-0">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-brand-charcoal/80 dark:text-white/60 mb-10 leading-relaxed"
              >
                {t.partnership.whyPartner.description}
              </motion.p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 w-full flex justify-center lg:justify-end"
          >
            <AnimatedCardStack items={cardItems} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function FeaturedUseCases() {
  const { t } = useLanguage();

  const images = [
    "https://i.pinimg.com/1200x/42/04/a1/4204a113f75458c9944011fa93f999c7.jpg", // Resort
    "https://i.pinimg.com/736x/e8/a4/5e/e8a45e7d6c95d844078c556387323f3a.jpg"  // Gift
  ];

  return (
    <section className="section-spacing bg-white dark:bg-black">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-wider uppercase text-brand-olive dark:text-brand-yellow mb-4 block"
          >
            {t.partnership.useCases.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[52px] leading-[1.1] font-serif text-brand-charcoal dark:text-white mb-6"
          >
            {t.partnership.useCases.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-charcoal/70 dark:text-white/60"
          >
            {t.partnership.useCases.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {t.partnership.useCases.cases.map((useCase: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-8 shadow-md group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={images[i]} 
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-brand-charcoal dark:text-white">
                  {useCase.category}
                </div>
              </div>
              <h3 className="text-3xl font-serif text-brand-charcoal dark:text-white mb-4 group-hover:text-brand-olive dark:group-hover:text-brand-yellow transition-colors">{useCase.title}</h3>
              <p className="text-brand-charcoal/70 dark:text-white/60 text-lg leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InquiryForm({ formRef }: { formRef: React.RefObject<HTMLDivElement> }) {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section ref={formRef} className="py-24 bg-brand-sand/30 dark:bg-brand-sand/5">
      <div className="section-container">
        <div className="max-w-4xl mx-auto bg-white dark:bg-brand-charcoal/20 p-8 md:p-16 rounded-[40px] shadow-xl border border-brand-charcoal/5 dark:border-white/5 relative overflow-hidden">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-olive/10 dark:bg-brand-yellow/10 text-brand-olive dark:text-brand-yellow text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              {t.partnership.inquiry.label}
            </span>
            <h2 className="text-[36px] md:text-[48px] font-serif text-brand-charcoal dark:text-white mb-6 leading-[1.1]">
              {t.partnership.inquiry.headline}
            </h2>
            <p className="text-lg text-brand-charcoal/60 dark:text-white/40 leading-relaxed max-w-2xl mx-auto">
              {t.partnership.inquiry.description}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                      {t.partnership.inquiry.form.name}
                    </label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-6 py-4 rounded-[20px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                      {t.partnership.inquiry.form.company}
                    </label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-6 py-4 rounded-[20px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                      {t.partnership.inquiry.form.email}
                    </label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-6 py-4 rounded-[20px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                      {t.partnership.inquiry.form.phone}
                    </label>
                    <input 
                      type="tel" 
                      pattern="^(0|\+84)[35789][0-9]{8}$"
                      title="Vui lòng nhập số điện thoại hợp lệ (VD: 0345457651)"
                      className="w-full px-6 py-4 rounded-[20px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                    {t.partnership.inquiry.form.partnershipType}
                  </label>
                  <select 
                    required
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-6 py-4 rounded-[20px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow appearance-none transition-all cursor-pointer"
                  >
                    <option value="" disabled className="dark:bg-brand-charcoal">{t.partnership.inquiry.form.selectPlaceholder}</option>
                    {t.partnership.inquiry.form.types.map((type: string, i: number) => (
                      <option key={i} value={type} className="dark:bg-brand-charcoal">{type}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                    {t.partnership.inquiry.form.message}
                  </label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full px-6 py-4 rounded-[24px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow transition-all resize-none"
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className={cn(
                    "w-full py-5 rounded-full font-bold text-white transition-all shadow-lg flex items-center justify-center gap-3 mt-8",
                    isSubmitting ? "bg-brand-olive/70 cursor-not-allowed" : "bg-brand-olive hover:bg-brand-olive/90"
                  )}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {t.partnership.inquiry.form.submit}
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center"
              >
                <div className="w-20 h-20 bg-brand-olive/10 rounded-full flex items-center justify-center text-brand-olive mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif text-brand-charcoal mb-4">{t.partnership.inquiry.form.successTitle}</h3>
                <p className="text-brand-charcoal/60 max-w-sm mx-auto leading-relaxed">
                  {t.partnership.inquiry.form.successMessage}
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-12 text-brand-olive font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  {t.partnership.inquiry.form.submitAnother}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function PartnershipFaq() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[52px] font-serif text-brand-charcoal dark:text-white mb-6"
          >
            {t.partnership.faq.title}
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {t.partnership.faq.items.map((item: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-brand-charcoal/10 dark:border-white/10 rounded-[24px] overflow-hidden bg-brand-sand/10 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h4 className="font-serif text-lg text-brand-charcoal dark:text-white pr-8 group-hover:text-brand-olive dark:group-hover:text-brand-yellow transition-colors">{item.q}</h4>
                <ChevronDown className={cn(
                  "w-5 h-5 text-brand-charcoal/40 dark:text-white/40 transition-transform duration-500 shrink-0",
                  openFaq === index ? 'rotate-180' : ''
                )} />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-brand-charcoal/60 dark:text-white/60 leading-relaxed border-t border-brand-charcoal/5 dark:border-white/5 pt-6">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
