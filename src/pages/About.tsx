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
              CÔNG TY RE:BA – PHÁT TRIỂN VÀ CUNG ỨNG SỢI CHUỐI SINH HỌC
            </span>
          </div>

          <div className="flex justify-center mb-16">
            <TextRevealCard 
              text="RE:BA - Weave Green, Live Sustainable"
              revealText="RE:BA - Weave Green, Live Sustainable"
              className="max-w-3xl"
            />
          </div>

          <TracingBeam className="px-6">
            <div className="max-w-[800px] mx-auto">
              <p className="text-lg md:text-xl text-brand-charcoal/80 leading-[1.8] text-center font-sans">
                Tại Việt Nam, mỗi năm có hàng triệu tấn thân chuối bị loại bỏ sau thu hoạch và thường không được khai thác hiệu quả. Phần lớn nguồn phụ phẩm này bị bỏ đi hoặc xử lý theo cách gây lãng phí tài nguyên và ảnh hưởng đến môi trường. Nhận thấy tiềm năng từ nguồn nguyên liệu tự nhiên này, RE:BA được thành lập với mục tiêu chuyển hóa thân chuối thành sợi sinh học có giá trị, phục vụ cho các ngành thủ công mỹ nghệ, dệt may và thiết kế bền vững. Thông qua quy trình xử lý kết hợp cơ học và enzyme, RE:BA tạo ra sợi chuối có chất lượng ổn định, thân thiện với môi trường và phù hợp với nhu cầu sản xuất của doanh nghiệp. RE:BA không chỉ cung cấp nguyên liệu, mà còn hướng đến việc xây dựng một hệ sinh thái vật liệu sinh học, kết nối giữa nông nghiệp, sản xuất và sáng tạo.
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
                alt="Tầm nhìn RE:BA"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-olive mb-6">TẦM NHÌN</h2>
              <p className="text-2xl md:text-3xl font-serif text-brand-charcoal leading-snug">
                Trở thành nhà cung cấp uy tín về sợi thân chuối được chuẩn hóa, góp phần phát triển hệ sinh thái vật liệu sinh học cho ngành thủ công mỹ nghệ và dệt may bền vững. RE:BA hướng tới việc kết nối phụ phẩm nông nghiệp với doanh nghiệp sản xuất, đưa sợi chuối trở thành vật liệu có giá trị cao trong chuỗi cung ứng bền vững.
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
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-olive mb-6">SỨ MỆNH</h2>
              <p className="text-2xl md:text-3xl font-serif text-brand-charcoal leading-snug mb-8">
                Cung cấp sợi thân chuối đã qua xử lý và chuẩn hóa, đồng thời phát triển các ứng dụng vật liệu bền vững trong thủ công mỹ nghệ và dệt may.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-brand-charcoal/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-olive mt-2 shrink-0" />
                  <span>Đối với đối tác: Cung cấp nguồn nguyên liệu ổn định, thân thiện môi trường, hỗ trợ doanh nghiệp tiếp cận vật liệu sinh học và giảm phụ thuộc vào nguyên liệu truyền thống.</span>
                </li>
                <li className="flex items-start gap-3 text-brand-charcoal/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-olive mt-2 shrink-0" />
                  <span>Đối với môi trường: Tái sử dụng phụ phẩm nông nghiệp, giảm rác thải sinh học và thúc đẩy kinh tế tuần hoàn.</span>
                </li>
              </ul>
            </motion.div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 order-1 lg:order-2">
              <ParallaxBlobImage 
                src="https://i.pinimg.com/1200x/6c/33/b3/6c33b34f09db802f78780313580d7ed5.jpg"
                alt="Sứ mệnh RE:BA"
              />
            </div>
          </div>

          {/* Giá trị cốt lõi */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-olive mb-4">GIÁ TRỊ CỐT LÕI</h2>
              <p className="text-3xl md:text-4xl font-serif text-brand-charcoal">Bền vững – Vật liệu cốt lõi – Minh bạch</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Bền vững",
                  desc: "Tận dụng phụ phẩm nông nghiệp, giảm tác động môi trường."
                },
                {
                  title: "Vật liệu cốt lõi",
                  desc: "Phát triển sợi chuối như vật liệu sinh học nền tảng, đảm bảo tính ổn định và khả năng ứng dụng."
                },
                {
                  title: "Minh bạch",
                  desc: "Cam kết rõ ràng về nguồn gốc, quy trình xử lý và chất lượng sản phẩm."
                }
              ].map((item, i) => (
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
