import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Users, 
  ShoppingBag, 
  MessageSquare,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { DirectionAwareHover } from '../components/ui/direction-aware-hover';

export function Contact() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (type: string) => {
    setSelectedType(type);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const optionIcons = [
    <ShoppingBag className="w-6 h-6" />,
    <Building2 className="w-6 h-6" />,
    <Users className="w-6 h-6" />,
    <MessageSquare className="w-6 h-6" />
  ];

  const infoIcons = [
    <Mail className="w-5 h-5" />,
    <Phone className="w-5 h-5" />,
    <MapPin className="w-5 h-5" />,
    <div className="flex gap-2">
      <Instagram className="w-4 h-4" />
      <Facebook className="w-4 h-4" />
    </div>
  ];

  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-brand-sand/30 dark:bg-black">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40 dark:opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-sand/60 via-transparent to-white dark:from-black/80 dark:via-black/40 dark:to-black" />
        </div>

        <div className="section-container relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-olive/10 text-brand-olive dark:bg-brand-olive/30 dark:text-brand-yellow text-xs font-bold tracking-[0.2em] uppercase mb-8">
                {t.contactPage.hero.eyebrow}
              </span>
              <h1 className="text-[48px] md:text-[72px] lg:text-[84px] leading-[1.05] font-serif text-brand-charcoal dark:text-white mb-8 tracking-tight">
                {t.contactPage.hero.headline}
              </h1>
              <p className="text-xl text-brand-charcoal/70 dark:text-white/60 leading-relaxed mb-12 max-w-xl">
                {t.contactPage.hero.description}
              </p>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-brand-olive text-white rounded-full font-medium hover:bg-brand-olive/90 dark:bg-brand-yellow dark:text-brand-charcoal dark:hover:bg-brand-yellow-light transition-all shadow-lg flex items-center gap-3 group"
                >
                  {t.contactPage.hero.primaryCta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/products" className="px-8 py-4 border border-brand-charcoal/10 dark:border-white/20 text-brand-charcoal dark:text-white rounded-full font-medium hover:bg-brand-charcoal hover:text-white dark:hover:bg-white dark:hover:text-brand-charcoal transition-all">
                  {t.contactPage.hero.secondaryCta}
                </Link>
              </div>
              
              <div className="mt-16 flex items-center gap-8">
                {t.contactPage.hero.badges.map((badge: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-brand-charcoal/50 dark:text-white/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-olive/40 dark:bg-brand-yellow/40" />
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] md:aspect-square rounded-[40px] overflow-hidden shadow-2xl group"
            >
              <img
                src="https://i.pinimg.com/1200x/35/c9/13/35c9137e20754967c1d2ba18af5a4693.jpg"
                alt="Contact Hero"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
            </motion.div>
          </div>
        </div>
        
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply dark:mix-blend-overlay">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[52px] font-serif text-brand-charcoal dark:text-white mb-6"
            >
              {t.contactPage.options.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-charcoal/60 dark:text-white/60"
            >
              {t.contactPage.options.subtitle}
            </motion.p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {t.contactPage.options.items.map((item: any, i: number) => {
              const imageUrls = [
                "https://i.pinimg.com/736x/e8/a4/5e/e8a45e7d6c95d844078c556387323f3a.jpg",
                "https://i.pinimg.com/1200x/42/04/a1/4204a113f75458c9944011fa93f999c7.jpg",
                "https://i.pinimg.com/1200x/6c/33/b3/6c33b34f09db802f78780313580d7ed5.jpg"
              ];
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleOptionClick(item.title)}
                className="cursor-pointer group relative"
              >
                <DirectionAwareHover 
                  imageUrl={imageUrls[i % imageUrls.length]}
                  className="w-full h-[300px] md:h-[380px] rounded-[24px]"
                >
                  <div className="flex flex-col items-start text-left">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-3 border border-white/20 group-hover:bg-brand-yellow group-hover:text-brand-charcoal transition-all duration-300 group-hover:scale-110">
                      {optionIcons[i]}
                    </div>
                    <h3 className="text-lg md:text-xl font-serif text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-brand-yellow font-bold text-[10px] uppercase tracking-wider group-hover:gap-3 transition-all">
                      {item.cta}
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </DirectionAwareHover>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section ref={formRef} className="py-24 bg-brand-ivory/30 dark:bg-black/40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-olive/10 text-brand-olive dark:bg-brand-olive/30 dark:text-brand-yellow text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                {t.contactPage.form.label}
              </span>
              <h2 className="text-[40px] md:text-[56px] font-serif text-brand-charcoal dark:text-white mb-8 leading-[1.1]">
                {t.contactPage.form.headline}
              </h2>
              <p className="text-xl text-brand-charcoal/60 dark:text-white/60 leading-relaxed mb-12">
                {t.contactPage.form.description}
              </p>
              
              <div className="p-8 bg-white/50 dark:bg-white/5 rounded-[24px] border border-brand-charcoal/5 dark:border-white/5 hover:border-brand-olive/20 dark:hover:border-brand-yellow/20 transition-all duration-500">
                <p className="text-sm text-brand-charcoal/80 dark:text-white/80 italic leading-relaxed">
                  "RE:BA connects the values of the circular economy, local craftsmanship, and social impact to create alternative material solutions for the future."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-brand-charcoal/20 p-8 md:p-12 rounded-[40px] shadow-xl border border-brand-charcoal/5 dark:border-white/5 relative overflow-hidden"
            >
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
                          {t.contactPage.form.fields.name}
                        </label>
                        <input 
                          required
                          type="text" 
                          className="w-full px-6 py-4 rounded-[20px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow transition-all"
                          placeholder={t.contactPage.form.placeholders.name}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                          {t.contactPage.form.fields.email}
                        </label>
                        <input 
                          required
                          type="email" 
                          className="w-full px-6 py-4 rounded-[20px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow transition-all"
                          placeholder={t.contactPage.form.placeholders.email}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                          {t.contactPage.form.fields.phone}
                        </label>
                        <input 
                          type="tel" 
                          className="w-full px-6 py-4 rounded-[20px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow transition-all"
                          placeholder={t.contactPage.form.placeholders.phone}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                          {t.contactPage.form.fields.type}
                        </label>
                        <select 
                          value={selectedType}
                          onChange={(e) => setSelectedType(e.target.value)}
                          className="w-full px-6 py-4 rounded-[20px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow appearance-none transition-all cursor-pointer"
                        >
                          <option value="" disabled>{t.contactPage.form.placeholders.type}</option>
                          {t.contactPage.form.types.map((type: string, i: number) => (
                            <option key={i} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {selectedType === t.contactPage.form.types[1] && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                            {t.contactPage.form.fields.company}
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-6 py-4 rounded-[20px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                            {t.contactPage.form.fields.size}
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-6 py-4 rounded-[20px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow transition-all"
                          />
                        </div>
                      </motion.div>
                    )}

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-white/40 ml-1">
                        {t.contactPage.form.fields.message}
                      </label>
                      <textarea 
                        required
                        rows={5}
                        className="w-full px-6 py-4 rounded-[24px] bg-brand-sand/20 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-white focus:outline-none focus:border-brand-olive dark:focus:border-brand-yellow focus:ring-1 focus:ring-brand-olive dark:focus:ring-brand-yellow transition-all resize-none"
                        placeholder={t.contactPage.form.placeholders.message}
                      />
                    </div>

                    <div className="flex items-start gap-3 ml-1">
                      <input 
                        required
                        type="checkbox" 
                        id="agreement"
                        className="mt-1 w-4 h-4 rounded border-brand-charcoal/20 dark:border-white/20 text-brand-olive dark:text-brand-yellow focus:ring-brand-olive dark:focus:ring-brand-yellow"
                      />
                      <label htmlFor="agreement" className="text-sm text-brand-charcoal/60 dark:text-white/60 leading-snug cursor-pointer">
                        {t.contactPage.form.fields.agreement}
                      </label>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className={cn(
                        "w-full py-5 rounded-full font-bold text-white transition-all shadow-lg flex items-center justify-center gap-3",
                        isSubmitting ? "bg-brand-olive/70 cursor-not-allowed" : "bg-brand-olive hover:bg-brand-olive/90 dark:bg-brand-yellow dark:text-brand-charcoal dark:hover:bg-brand-yellow-light"
                      )}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          {t.contactPage.form.submit}
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-brand-charcoal/40 dark:text-white/40 italic">
                      {t.contactPage.form.note}
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-brand-olive/10 dark:bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-olive dark:text-brand-yellow mx-auto mb-8">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-serif text-brand-charcoal dark:text-white mb-4">{t.contactPage.form.successTitle}</h3>
                    <p className="text-brand-charcoal/60 dark:text-white/60 max-w-sm mx-auto leading-relaxed">
                      {t.contactPage.form.success}
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-12 text-brand-olive dark:text-brand-yellow font-bold uppercase tracking-widest text-xs hover:underline"
                    >
                      {t.contactPage.form.reset}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-olive/10 text-brand-olive dark:bg-brand-olive/30 dark:text-brand-yellow text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                {t.contactPage.info.label}
              </span>
              <h2 className="text-[40px] md:text-[52px] font-serif text-brand-charcoal dark:text-white mb-8 leading-[1.1]">
                {t.contactPage.info.headline}
              </h2>
              <p className="text-xl text-brand-charcoal/60 dark:text-white/60 leading-relaxed mb-12">
                {t.contactPage.info.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.contactPage.info.items.map((item: any, i: number) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 rounded-[24px] bg-brand-sand/10 dark:bg-brand-sand/5 border border-brand-charcoal/5 dark:border-white/5 hover:border-brand-olive/20 dark:hover:border-brand-yellow/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-brand-olive/5 dark:bg-brand-yellow/10 rounded-xl flex items-center justify-center text-brand-olive dark:text-brand-yellow mb-4">
                      {infoIcons[i]}
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 dark:text-white/40 mb-1">{item.title}</h4>
                    <p className="text-brand-charcoal dark:text-white font-medium">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-sm text-brand-charcoal/40 dark:text-white/40 italic flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-olive/30 dark:bg-brand-yellow/30" />
                {t.contactPage.info.note}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl group"
            >
              <img
                src="https://i.pinimg.com/736x/39/42/06/3942068c0153280a4b88c5b09ced6ffd.jpg"
                alt="Location Context"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-charcoal/10 dark:bg-black/20" />
              
              {/* Abstract Map Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-3/4 h-3/4 border border-white/20 dark:border-white/10 rounded-full animate-pulse" />
                <div className="absolute w-1/2 h-1/2 border border-white/10 dark:border-white/5 rounded-full animate-pulse delay-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-sand/20 dark:bg-brand-sand/5">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[52px] font-serif text-brand-charcoal dark:text-white mb-6"
            >
              {t.contactPage.faq.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-charcoal/60 dark:text-white/60"
            >
              {t.contactPage.faq.subtitle}
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {t.contactPage.faq.items.map((item: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-brand-charcoal/10 dark:border-white/10 rounded-[24px] overflow-hidden bg-white dark:bg-brand-charcoal/20 hover:shadow-xl hover:border-brand-olive/30 dark:hover:border-brand-yellow/30 transition-all duration-500 group"
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h4 className="font-serif text-lg text-brand-charcoal dark:text-white pr-8 group-hover:text-brand-olive dark:group-hover:text-brand-yellow transition-colors">{item.q}</h4>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-brand-charcoal/40 transition-transform duration-500 shrink-0",
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
          
          <div className="mt-16 text-center">
            <p className="text-brand-charcoal/60 dark:text-white/60 mb-6">{t.contactPage.faq.cta}</p>
            <button 
              onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-brand-olive dark:text-brand-yellow font-bold uppercase tracking-widest text-xs hover:underline flex items-center gap-2 mx-auto group"
            >
              {t.contactPage.form.submit}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
