import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, ExternalLink, Leaf, Users, Globe } from 'lucide-react';
import { MetricCardTwo } from '../components/sections/MetricCardTwo';
import { SplitAbout } from '../components/sections/SplitAbout';
import { GlowCard } from '../components/ui/spotlight-card';
import { VerticalTabs } from '../components/ui/vertical-tabs';
import { Link } from 'react-router-dom';
import CardSwap, { Card } from '../components/ui/card-swap';
import { ScrollingTestimonials } from '../components/ui/scrolling-testimonials';
import { LiquidGlass } from '../components/ui/liquid-glass';

export function Impact() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const impactMetrics = t.impactPage.metrics.items.map((item: any, index: number) => ({
    ...item,
    note: t.impact.metrics[index]?.note || "RE:BA Impact"
  }));

  const impactLayers = [
    {
      id: "01",
      title: t.impactPage.layers.environmental.title,
      description: t.impactPage.layers.environmental.description,
      image: "https://designwanted.com/wp-content/uploads/2024/05/Bananatex-by-QWSTION-_-fibers-of-Abaca-banana-plants-6.jpg.webp",
    },
    {
      id: "02",
      title: t.impactPage.layers.social.title,
      description: t.impactPage.layers.social.description,
      image: "https://i.pinimg.com/1200x/40/01/e5/4001e5807e142c0b1eb77b8179c4fb1b.jpg",
    },
    {
      id: "03",
      title: t.impactPage.layers.cultural.title,
      description: t.impactPage.layers.cultural.description,
      image: "https://i.pinimg.com/1200x/6d/84/39/6d84390c2585a85e8ef88c50f60be784.jpg",
    },
  ];

  return (
    <div className="w-full pt-20 bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-sand/30 dark:bg-black">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-sand/50 via-transparent to-brand-sand dark:from-black/50 dark:to-black" />
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10 dark:opacity-5 pointer-events-none z-1" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-olive/5 dark:bg-brand-yellow/5 rounded-full blur-3xl z-1" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white dark:from-black to-transparent z-1" />
        
        <div className="section-container relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-olive/10 text-brand-olive dark:bg-brand-yellow/10 dark:text-brand-yellow text-xs font-bold tracking-[0.2em] uppercase mb-8">
                {t.impactPage.hero.eyebrow}
              </span>
              <h1 className="text-[48px] md:text-[72px] lg:text-[84px] leading-[1.05] font-serif text-brand-charcoal dark:text-white mb-8 tracking-tight">
                {t.impactPage.hero.headline}
              </h1>
              <p className="text-xl text-brand-charcoal/70 dark:text-white/60 leading-relaxed mb-12 max-w-xl">
                {t.impactPage.hero.description}
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="px-8 py-4 bg-brand-olive text-white rounded-full font-medium hover:bg-brand-olive/90 dark:bg-brand-yellow dark:text-brand-charcoal dark:hover:bg-brand-yellow-light transition-all shadow-lg flex items-center gap-3 group hover:shadow-xl hover:-translate-y-1">
                  {t.impactPage.hero.primaryCta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/partnership" className="px-8 py-4 border border-brand-charcoal/10 dark:border-white/20 text-brand-charcoal dark:text-white rounded-full font-medium hover:bg-brand-charcoal dark:hover:bg-white hover:text-white dark:hover:text-brand-charcoal transition-all hover:shadow-lg">
                  {t.impactPage.hero.secondaryCta}
                </Link>
              </div>
              
              <div className="mt-16 flex items-center gap-8">
                {t.impactPage.hero.badges.map((badge: string, i: number) => (
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
                src="https://designwanted.com/wp-content/uploads/2024/05/Bananatex-by-QWSTION-_-fibers-of-Abaca-banana-plants-6.jpg.webp"
                alt="Impact Hero"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent group-hover:from-brand-charcoal/60 transition-all duration-500" />
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 max-w-[240px] z-20"
              >
                <LiquidGlass className="p-6 rounded-[24px] shadow-xl border border-white/20 dark:border-white/10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-brand-olive/10 dark:bg-brand-yellow/10 flex items-center justify-center text-brand-olive dark:text-brand-yellow">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/40 dark:text-white/50">Regenerative</span>
                  </div>
                  <p className="text-sm font-serif text-brand-charcoal leading-snug dark:text-white">
                    "Every fiber tells a story of renewal and community pride."
                  </p>
                </LiquidGlass>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Texture */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none z-1">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </section>

      {/* Circular Economy Story Section */}
      <SplitAbout
        label={t.impactPage.circularStory.label}
        title={t.impactPage.circularStory.headline}
        description={t.impactPage.circularStory.description}
        image="https://designwanted.com/wp-content/uploads/2024/05/Bananatex-by-QWSTION-_-fibers-of-Abaca-banana-plants-7.jpg.webp"
        reverse={false}
        infoBlocks={t.impactPage.circularStory.steps.map((step: any) => step.title)}
      />

      {/* Card Swap Section - The Connecting Thread */}
      <section className="py-24 bg-brand-sand/20 dark:bg-brand-sand/5 overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[52px] font-serif text-brand-charcoal dark:text-white mb-6"
            >
              {t.impact.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-charcoal/70 dark:text-white/60 max-w-2xl mx-auto"
            >
              {t.impact.subtitle}
            </motion.p>
          </div>

          <div className="relative h-[600px] md:h-[700px] w-full max-w-4xl mx-auto">
            <CardSwap
              cardDistance={window.innerWidth < 768 ? 30 : 60}
              verticalDistance={window.innerWidth < 768 ? 40 : 70}
              delay={5000}
              pauseOnHover={true}
            >
              <Card className="bg-brand-olive text-white p-8 md:p-12 flex flex-col justify-between h-full rounded-[32px] shadow-2xl relative overflow-hidden group cursor-pointer hover:shadow-brand-olive/20 transition-all duration-500">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-1000">
                  <img src="https://i.pinimg.com/1200x/6c/33/b3/6c33b34f09db802f78780313580d7ed5.jpg" alt="Material" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10 group-hover:bg-brand-yellow group-hover:text-brand-charcoal transition-colors duration-300">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-6 group-hover:translate-x-1 transition-transform duration-300">{t.impact.cardSwap.materials.title}</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {t.impact.cardSwap.materials.desc}
                  </p>
                </div>
                <div className="relative z-10 mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">{t.impact.cardSwap.materials.tag}</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-olive transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Card>
              
              <Card className="bg-brand-charcoal text-white p-8 md:p-12 flex flex-col justify-between h-full rounded-[32px] shadow-2xl relative overflow-hidden group cursor-pointer hover:shadow-brand-charcoal/20 transition-all duration-500">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-1000">
                  <img src="https://iili.io/q6b3OMB.jpg" alt="People" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10 group-hover:bg-brand-yellow group-hover:text-brand-charcoal transition-colors duration-300">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-6 group-hover:translate-x-1 transition-transform duration-300">{t.impact.cardSwap.people.title}</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {t.impact.cardSwap.people.desc}
                  </p>
                </div>
                <div className="relative z-10 mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">{t.impact.cardSwap.people.tag}</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-charcoal transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Card>
              
              <Card className="bg-brand-green text-white p-8 md:p-12 flex flex-col justify-between h-full rounded-[32px] shadow-2xl relative overflow-hidden group cursor-pointer hover:shadow-brand-green/20 transition-all duration-500">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-1000">
                  <img src="https://i.pinimg.com/736x/a9/3c/e6/a93ce650772112ad6e511242eefb1fc6.jpg" alt="Community" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10 group-hover:bg-brand-yellow group-hover:text-brand-charcoal transition-colors duration-300">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-6 group-hover:translate-x-1 transition-transform duration-300">{t.impact.cardSwap.community.title}</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {t.impact.cardSwap.community.desc}
                  </p>
                </div>
                <div className="relative z-10 mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">{t.impact.cardSwap.community.tag}</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-green transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>

      {/* Impact Layers Section */}
      <div className="bg-brand-ivory/30 dark:bg-black/30">
        <VerticalTabs 
          items={impactLayers}
          headline={t.impactPage.layers.headline || "Impact Layers"}
          label={t.impactPage.layers.label || "IMPACT"}
        />
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-brand-olive dark:bg-brand-olive/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://i.pinimg.com/1200x/40/01/e5/4001e5807e142c0b1eb77b8179c4fb1b.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-[40px] md:text-[56px] font-serif text-white mb-8 leading-[1.1]">
              {t.impactPage.cta.headline}
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              {t.impactPage.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/partnership" 
                className="px-10 py-5 bg-brand-yellow text-brand-charcoal rounded-full font-bold hover:bg-white transition-all shadow-lg flex items-center gap-3 group"
              >
                {t.impactPage.cta.primaryCta}
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
              <Link 
                to="/products" 
                className="px-10 py-5 border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                {t.impactPage.cta.secondaryCta}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-sand/30 dark:bg-brand-sand/5 overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[52px] font-serif text-brand-charcoal dark:text-white mb-6"
            >
              {t.impactPage.testimonials.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-charcoal/70 dark:text-white/60 max-w-2xl mx-auto"
            >
              {t.impactPage.testimonials.subtitle}
            </motion.p>
          </div>
          
          <ScrollingTestimonials 
            testimonials={t.impactPage.testimonials.items.map((item: any, i: number) => ({
              name: item.author,
              role: item.role,
              content: item.quote,
              avatar: [
                "https://i.pinimg.com/1200x/c4/25/16/c425167fbe96f60d07475048c1dbb7f6.jpg",
                "https://i.pinimg.com/736x/0e/9c/80/0e9c80436f4a4c020fe7320a8eefa920.jpg",
                "https://i.pinimg.com/736x/80/ec/3b/80ec3b65c68990283ad135deec394a96.jpg",
                "https://i.pinimg.com/736x/8d/e6/df/8de6dffe18b46413338a6b011cc1c1f9.jpg",
                "https://i.pinimg.com/736x/af/e1/37/afe1372890580add9894634c368e3fa8.jpg",
                "https://i.pinimg.com/1200x/e7/cb/ab/e7cbabf7dfbd21e36f2387ad620806d8.jpg",
                "https://i.pinimg.com/1200x/63/3c/ac/633cac243555dbf49908ade156910275.jpg"
              ][i % 7]
            }))}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[40px] md:text-[52px] font-serif text-brand-charcoal dark:text-white mb-8 leading-[1.1]">
                {t.impactPage.faq.title}
              </h2>
              <p className="text-xl text-brand-charcoal/60 dark:text-white/40 leading-relaxed">
                {t.impactPage.faq.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {t.impactPage.faq.items.map((item: any, index: number) => (
                <div key={index} className="border border-brand-charcoal/10 dark:border-white/10 rounded-[24px] overflow-hidden bg-brand-sand/20 dark:bg-brand-sand/5 hover:bg-brand-sand/40 dark:hover:bg-brand-sand/10 hover:border-brand-olive/30 dark:hover:border-brand-yellow/30 transition-all duration-500 group">
                  <button
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h4 className="font-serif text-lg text-brand-charcoal dark:text-white pr-8 group-hover:text-brand-olive dark:group-hover:text-brand-yellow transition-colors">{item.q}</h4>
                    <ChevronDown className={`w-5 h-5 text-brand-charcoal/40 transition-transform duration-500 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
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
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
