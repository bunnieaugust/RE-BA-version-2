import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { TextRevealCard } from '../components/ui/text-reveal-card';
import { TracingBeam } from '../components/ui/tracing-beam';
import { OrganicBlobImage } from '../components/ui/organic-blob-image';
import { useRef } from 'react';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full bg-brand-ivory">
      <AboutHero />
      
      {/* SECTION 1: GIỚI THIỆU (Kể chuyện thương hiệu) */}
      <section className="py-24 bg-brand-sand/20">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-olive mb-4 block">
              {t.about.title}
            </span>
          </div>

          <div className="flex justify-center mb-16">
            <TextRevealCard 
              text={t.about.subtitle.replace(/[“”]/g, '')}
              revealText={t.about.subtitle.replace(/[“”]/g, '')}
              className="max-w-3xl"
            />
          </div>

          <TracingBeam className="px-6">
            <div className="max-w-[800px] mx-auto">
              <p className="text-lg md:text-xl text-brand-charcoal/80 leading-[1.8] text-center font-serif italic">
                {t.about.description1} {t.about.description2} {t.about.description3}
              </p>
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* SECTION 2: TẦM NHÌN - SỨ MỆNH - GIÁ TRỊ CỐT LÕI */}
      <section className="py-24 bg-brand-ivory overflow-hidden">
        <div className="section-container">
          {/* Tầm nhìn */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <ParallaxBlobImage 
                src="https://musapacta.com.vn/wp-content/uploads/2023/04/z4072342973861_942b5e971eff66f04a6c2e7e8286563b-1024x530.jpg"
                alt={t.about.vision}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-olive mb-6">{t.about.vision}</h2>
              <p className="text-2xl md:text-3xl font-serif text-brand-charcoal leading-snug">
                {t.about.visionText}
              </p>
            </motion.div>
          </div>

          {/* Sứ mệnh */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 lg:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-olive mb-6">{t.about.mission}</h2>
              <p className="text-2xl md:text-3xl font-serif text-brand-charcoal leading-snug mb-8">
                {t.about.missionText.split('\n')[0]}
              </p>
              <ul className="space-y-4">
                {t.about.missionText.split('\n').slice(1).map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-brand-charcoal/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-olive mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 order-1 lg:order-2">
              <ParallaxBlobImage 
                src="https://i.pinimg.com/1200x/6c/33/b3/6c33b34f09db802f78780313580d7ed5.jpg"
                alt={t.about.mission}
              />
            </div>
          </div>

          {/* Giá trị cốt lõi */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-olive mb-4">{t.about.coreValues.title}</h2>
              <p className="text-3xl md:text-4xl font-serif text-brand-charcoal">{t.about.coreValues.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.about.coreValues.values.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-10 bg-white rounded-[32px] shadow-soft hover:shadow-lg transition-all duration-500 border border-brand-charcoal/5"
                >
                  <h4 className="text-xl font-serif text-brand-charcoal mb-4">{item.title}</h4>
                  <p className="text-brand-charcoal/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ĐỘI NGŨ SÁNG LẬP */}
      <section className="py-24 bg-brand-sand/10">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-brand-olive mb-4 block"
            >
              {t.about.team.title}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[36px] md:text-[48px] font-serif text-brand-charcoal mb-6"
            >
              {t.about.team.description}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.team.members.map((member: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 shadow-soft group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-serif text-brand-charcoal mb-1">{member.name}</h3>
                <p className="text-brand-olive text-xs font-bold uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-brand-charcoal/60 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-brand-green text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
        <div className="section-container relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[52px] font-serif mb-8"
          >
            {t.contact.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/partnership" className="bg-white text-brand-green px-10 py-4 rounded-full font-bold hover:bg-brand-sand transition-all shadow-lg">
              {t.hero.secondaryCta}
            </Link>
            <Link to="/products" className="border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              {t.hero.primaryCta}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ParallaxBlobImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div ref={ref} className="w-full h-full">
      <OrganicBlobImage src={src} alt={alt} parallaxOffset={y} />
    </div>
  );
}

function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 bg-brand-sand overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://musapacta.com.vn/wp-content/uploads/2023/04/z4072342973861_942b5e971eff66f04a6c2e7e8286563b-1024x530.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-sand/50 via-transparent to-brand-sand" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-brand-olive mb-6 block"
          >
            GIỚI THIỆU VỀ CHÚNG TÔI
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] font-serif text-brand-charcoal mb-8 tracking-tight"
          >
            Hành trình của sợi chuối sinh học
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-charcoal/70 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Kiến tạo tương lai bền vững từ nguồn nguyên liệu tự nhiên dồi dào của Việt Nam.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
