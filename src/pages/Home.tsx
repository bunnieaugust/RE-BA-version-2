import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, Globe, Sparkles, CheckCircle2, Factory, Recycle, HeartHandshake, Zap, ArrowUpRight, ChevronDown, Quote, Handshake, Lightbulb } from 'lucide-react';
import { useState, useRef } from 'react';
import { cn } from '../lib/utils';
import { ShimmerButton } from '../components/ui/shimmer-button';
import { QuoteModal } from '../components/ui/quote-modal';
import { ExpandableHoverCards } from '../components/ui/expandable-cards';
import { ProductCard3D } from '../components/ui/product-card-3d';
import { Marquee } from '../components/ui/marquee';
import { ShowcaseCard } from '../components/ui/showcase-card';
import { ScrollingTestimonials } from '../components/ui/scrolling-testimonials';
import { ScrollProgress } from '../components/ui/scroll-progress';
import { CardShowcase } from '../components/ui/card-showcase';
import { SupplierSection } from '../components/ui/supplier-section';
import { AboutStickyCards } from '../components/ui/about-sticky-cards';
import { ValueStackingCards } from '../components/ui/value-stacking-cards';
import { TextRevealByWord } from '../components/ui/text-reveal-by-word';
import { BendText } from '../components/ui/bend-text';
import { TravelCard } from '../components/ui/travel-card';
import { ProductCard } from '../components/ui/product-card';
import { SupplierBlogSection } from '../components/ui/supplier-blog-section';

// ... (keep constants: fadeInUp, staggerContainer, whyChooseContent, supplierItems, testimonials)

const aboutContent = [
  {
    number: "01",
    title: "Từ phụ phẩm nông nghiệp",
    description: "RE:BA là doanh nghiệp phát triển vật liệu sinh học từ sợi thân chuối – một nguồn phụ phẩm nông nghiệp dồi dào nhưng chưa được khai thác hiệu quả tại Việt Nam.",
    image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80&w=1000",
    tag: "Nguồn gốc"
  },
  {
    number: "02",
    title: "Quy trình xử lý Enzyme",
    description: "Thông qua quy trình xử lý kết hợp cơ học và enzyme, RE:BA tạo ra sợi chuối có chất lượng ổn định, thân thiện với môi trường và phù hợp với sản xuất công nghiệp.",
    image: "https://i.pinimg.com/1200x/6d/84/39/6d84390c2585a85e8ef88c50f60be784.jpg",
    tag: "Công nghệ"
  },
  {
    number: "03",
    title: "Định hướng B2B toàn cầu",
    description: "RE:BA tập trung cung cấp sợi thân chuối cho doanh nghiệp thủ công, thời trang bền vững và nhà thiết kế nội thất trên khắp thế giới.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1000",
    tag: "Thị trường"
  }
];

const whyChooseContent = [
  {
    title: "Chất lượng chuẩn hóa",
    description: "Sợi có độ đồng đều, độ bền và độ mềm phù hợp cho sản xuất công nghiệp và thủ công mỹ nghệ cao cấp.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    image: "https://i.pinimg.com/1200x/6c/33/b3/6c33b34f09db802f78780313580d7ed5.jpg",
  },
  {
    title: "Quy trình thân thiện",
    description: "Ứng dụng enzyme sinh học trong xử lý, giảm thiểu tối đa tác động tiêu cực đến hệ sinh thái tự nhiên.",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://designwanted.com/wp-content/uploads/2024/05/Bananatex-by-QWSTION-_-fibers-of-Abaca-banana-plants-7.jpg.webp",
  },
  {
    title: "Nguồn cung ổn định",
    description: "Khai thác từ vùng nguyên liệu địa phương dồi dào, đảm bảo khả năng cung ứng lâu dài cho đối tác B2B.",
    icon: <Factory className="w-6 h-6" />,
    image: "https://i.pinimg.com/1200x/42/04/a1/4204a113f75458c9944011fa93f999c7.jpg",
  },
  {
    title: "Hỗ trợ B2B linh hoạt",
    description: "Cung cấp mẫu thử, tư vấn ứng dụng chuyên sâu và chính sách giá ưu đãi theo sản lượng đặt hàng.",
    icon: <HeartHandshake className="w-6 h-6" />,
    image: "https://i.pinimg.com/1200x/35/c9/13/35c9137e20754967c1d2ba18af5a4693.jpg",
  }
];

const supplierItems = [
  {
    title: "TÁC ĐỘNG XÃ HỘI",
    icon: <Recycle className="w-8 h-8" />,
    bullets: [
      "Tạo hàng trăm sinh kế cho bà con nông dân",
      "Nâng cao giá trị của cây chuối Việt Nam",
      "Khôi phục làng nghề dệt may truyền thống"
    ]
  },
  {
    title: "TÁC ĐỘNG MÔI TRƯỜNG",
    icon: <Handshake className="w-8 h-8" />,
    bullets: [
      "Giảm hàng nghìn tấn CO2 mỗi năm do đốt thân chuối",
      "Giảm lượng lớn hóa chất trong quá trình xử lý",
      "Bảo vệ hệ vi sinh trong đất",
      "Tiết kiệm năng lượng và nước trong sản xuất"
    ]
  },
  {
    title: "ĐỔI MỚI, SÁNG TẠO",
    icon: <Lightbulb className="w-8 h-8" />,
    bullets: [
      "Luôn đổi mới, sáng tạo về kỹ thuật và sản phẩm",
      "Luôn lắng nghe và thấu hiểu khách hàng để hoàn thiện sản phẩm, dịch vụ"
    ]
  }
];

const testimonials = [
  {
    quote: "Sợi chuối của RE:BA có độ mềm vượt trội so với các loại sợi tự nhiên khác mà chúng tôi từng sử dụng. Rất phù hợp cho dòng sản phẩm thời trang cao cấp.",
    name: "Nguyễn Minh Anh",
    title: "Giám đốc Sáng tạo - EcoFashion"
  },
  {
    quote: "Chúng tôi đánh giá cao quy trình xử lý bằng enzyme của RE:BA. Đây là yếu tố then chốt để chúng tôi lựa chọn họ làm nhà cung cấp vật liệu bền vững.",
    name: "Trần Thanh Sơn",
    title: "Chủ xưởng Thủ công Mỹ nghệ"
  },
  {
    quote: "Khả năng cung ứng ổn định và sự hỗ trợ nhiệt tình từ đội ngũ RE:BA giúp chúng tôi tự tin triển khai các dự án nội thất quy mô lớn.",
    name: "Lê Thu Hà",
    title: "Nhà thiết kế Nội thất"
  },
  {
    quote: "Vật liệu từ sợi chuối không chỉ bền mà còn mang lại cảm giác mộc mạc, sang trọng. Khách hàng của chúng tôi rất yêu thích câu chuyện đằng sau nó.",
    name: "Phạm Đức Thắng",
    title: "Founder - GreenHome Decor"
  }
];

export function Home() {
  const { t } = useLanguage();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="flex flex-col w-full bg-brand-ivory">
      <ScrollProgress />
      
      {/* SECTION 1: CINEMATIC HERO */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-110"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-macro-shot-of-a-green-leaf-with-water-drops-41584-large.mp4" type="video/mp4" />
          </video>
          {/* Frosted Glass Overlay */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[8px]" />
        </motion.div>

        <div className="section-container relative z-10 flex flex-col items-center text-center">
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[56px] md:text-[92px] font-serif font-bold text-brand-green leading-tight"
            >
              RE:BA – Dệt Xanh, Sống Bền
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-2xl text-brand-charcoal/80 max-w-3xl mb-12 font-sans"
          >
            Chuyển hóa phụ phẩm nông nghiệp thành vật liệu sinh học cao cấp cho tương lai bền vững.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6"
          >
            <Link to="/products">
              <ShimmerButton className="px-10 py-5 text-xl rounded-full">
                Khám phá vật liệu
              </ShimmerButton>
            </Link>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-charcoal/40">Cuộn để khám phá</span>
            <ChevronDown className="w-6 h-6 text-brand-olive" />
          </motion.div>
        </div>
      </section>

      {/* INFINITE TEXT MARQUEE */}
      <div className="bg-brand-olive py-10 border-y border-white/10 overflow-hidden">
        <Marquee duration={25} className="text-white">
          <span className="mx-16 text-2xl font-serif italic tracking-[0.2em] uppercase opacity-90 whitespace-nowrap">Collaborate for Change</span>
          <span className="mx-16 text-2xl font-serif italic tracking-[0.2em] uppercase opacity-90 whitespace-nowrap">Empower Communities</span>
          <span className="mx-16 text-2xl font-serif italic tracking-[0.2em] uppercase opacity-90 whitespace-nowrap">Sustainable Future</span>
          <span className="mx-16 text-2xl font-serif italic tracking-[0.2em] uppercase opacity-90 whitespace-nowrap">Regenerative Impact</span>
          <span className="mx-16 text-2xl font-serif italic tracking-[0.2em] uppercase opacity-90 whitespace-nowrap">Crafted with Purpose</span>
        </Marquee>
      </div>
      
      {/* SECTION 2: VỀ RE:BA */}
      <section className="relative w-full bg-background text-foreground pt-12 md:pt-20">
        
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row relative gap-8 lg:gap-16">
          
          {/* CỘT TRÁI - Rộng 40% */}
          <div className="w-full md:w-5/12 md:sticky md:top-0 h-auto md:h-screen flex flex-col justify-center items-start pt-16 md:pt-0 z-10">
            
            {/* Tăng không gian chứa chữ 3D để BendText to hơn */}
            <div className="w-full h-[150px] sm:h-[180px] md:h-[220px] relative -ml-4 md:-ml-6">
              <BendText /> 
            </div>
            
            {/* Phụ đề tĩnh - Đẩy sát lại với tiêu đề 3D */}
            <div className="mt-0 md:-mt-4 pl-4 md:pl-6">
              <h3 className="text-xl md:text-2xl font-medium text-foreground/80 leading-snug max-w-sm">
                Từ phụ phẩm nông nghiệp đến vật liệu bền vững
              </h3>
              {/* Thêm một đường gạch ngang nhỏ tạo điểm nhấn thanh lịch */}
              <div className="h-1 w-12 bg-green-700/60 mt-6 rounded-full"></div>
            </div>

          </div>

          {/* CỘT PHẢI - Rộng 60% */}
          <div className="w-full md:w-7/12 flex items-center relative z-20">
            <TextRevealByWord 
              text="RE:BA là doanh nghiệp phát triển vật liệu sinh học từ sợi thân chuối – một nguồn phụ phẩm nông nghiệp dồi dào nhưng chưa được khai thác hiệu quả tại Việt Nam." 
            />
          </div>

        </div>

        {/* Khối Sticky Scroll chi tiết nằm ở dưới (giữ nguyên component của dự án) */}
        <div className="relative w-full z-20 bg-background">
           <AboutStickyCards />
        </div>
      </section>

      {/* SECTION 3: TẠI SAO CHỌN RE:BA? */}
      <ValueStackingCards />

      {/* SECTION 4: NHÀ CUNG ỨNG SỢI CHUỐI */}
      <SupplierBlogSection 
        tagline="RE:BA – NHÀ CUNG ỨNG SỢI CHUỐI CHIẾN LƯỢC"
        heading="Tác động của chúng tôi"
        description="RE:BA cam kết tạo ra giá trị bền vững thông qua quy trình sản xuất minh bạch và trách nhiệm."
        items={supplierItems.map(item => ({
          title: item.title,
          icon: item.icon,
          bullets: item.bullets
        }))}
      />

      {/* SECTION 5: SẢN PHẨM SỢI */}
      <section className="py-32 bg-brand-sand/20">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <h2 className="text-[40px] md:text-[64px] font-serif text-brand-charcoal">Danh mục vật liệu</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard 
              title="Sợi chuối thô"
              description="Sợi được xử lý làm sạch hoàn toàn, loại bỏ phần thịt và tạp chất, mang lại độ mềm và tính đồng đều cao, phù hợp cho các ứng dụng thủ công và dệt cơ bản."
              features={["Sợi mềm, sạch, dễ xử lý", "Đã loại bỏ tạp chất và phần keo tự nhiên", "Ứng dụng: dệt thủ công, decor, nguyên liệu sản xuất"]}
              weight="Khối lượng: 1kg – 20kg"
              imageUrl="https://i.pinimg.com/1200x/6c/33/b3/6c33b34f09db802f78780313580d7ed5.jpg"
              imageAlt="Sợi chuối thô"
              priceText="Liên hệ"
              onBookNow={() => {}}
            />
            <ProductCard 
              title="Sợi chuối se"
              description="Sợi chuối được xe thành dạng dây, tăng độ bền và khả năng ứng dụng trong sản xuất các sản phẩm thủ công và nội thất."
              features={["Chiều dài ~450m/cuộn", "Đường kính sợi ~1mm", "Độ bền cao, dễ sử dụng"]}
              weight="Khối lượng: 1kg/cuộn"
              imageUrl="https://i.pinimg.com/1200x/42/04/a1/4204a113f75458c9944011fa93f999c7.jpg"
              imageAlt="Sợi chuối se"
              priceText="Liên hệ"
              onBookNow={() => {}}
            />
            <ProductCard 
              title="Sợi chuối bện"
              description="Sợi được bện nhiều lớp, tạo kết cấu chắc chắn, phù hợp cho các sản phẩm yêu cầu độ bền và tính thẩm mỹ cao."
              features={["Chiều dài ~450m/cuộn", "Kết cấu bền chắc", "Phù hợp nội thất và sản phẩm cao cấp"]}
              weight="Khối lượng: 1kg/cuộn"
              imageUrl="https://i.pinimg.com/1200x/35/c9/13/35c9137e20754967c1d2ba18af5a4693.jpg"
              imageAlt="Sợi chuối bện"
              priceText="Liên hệ"
              onBookNow={() => {}}
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: KHÁCH HÀNG & ĐỐI TÁC (Reverted to Impact Style) */}
      <section className="py-32 bg-brand-sand/30 dark:bg-brand-sand/5 overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[52px] font-serif text-brand-charcoal dark:text-white mb-6"
            >
              Khách hàng & Đối tác nói gì
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-charcoal/70 dark:text-white/60 max-w-2xl mx-auto"
            >
              Những doanh nghiệp đã đồng hành cùng RE:BA trên hành trình xanh.
            </motion.p>
          </div>
          
          <ScrollingTestimonials 
            testimonials={testimonials.map((item: any, i: number) => ({
              name: item.name,
              role: item.title,
              content: item.quote,
              avatar: [
                "https://i.pinimg.com/1200x/c4/25/16/c425167fbe96f60d07475048c1dbb7f6.jpg",
                "https://i.pinimg.com/736x/0e/9c/80/0e9c80436f4a4c020fe7320a8eefa920.jpg",
                "https://i.pinimg.com/736x/80/ec/3b/80ec3b65c68990283ad135deec394a96.jpg",
                "https://i.pinimg.com/736x/8d/e6/df/8de6dffe18b46413338a6b011cc1c1f9.jpg"
              ][i % 4]
            }))}
          />
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
