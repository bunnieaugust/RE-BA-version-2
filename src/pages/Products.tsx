import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { ImageLens } from '../components/ui/image-lens';
import { MagneticButton } from '../components/ui/magnetic-button';
import { QuoteModal } from '../components/ui/quote-modal';
import { useState } from 'react';

export function Products() {
  const { t } = useLanguage();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const products = [
    {
      title: "Sợi chuối thô",
      description: "Sợi được xử lý làm sạch hoàn toàn, loại bỏ phần thịt và tạp chất, mang lại độ mềm và tính đồng đều cao, phù hợp cho các ứng dụng thủ công và dệt cơ bản.",
      image: "https://musapacta.com.vn/wp-content/uploads/2022/05/z3238337825345_0796dbc46c32aa10df86e5cfdb2ae6d3.jpg",
      tags: ["Sợi mềm, sạch, dễ xử lý", "Đã loại bỏ tạp chất và phần keo tự nhiên", "Ứng dụng: dệt thủ công, decor, nguyên liệu sản xuất"],
      badge: "Khối lượng: 1kg - 20kg",
      price: "Liên hệ"
    },
    {
      title: "Sợi chuối se",
      description: "Sợi chuối được xe thành dạng dây, tăng độ bền và khả năng ứng dụng trong sản xuất các sản phẩm thủ công và nội thất.",
      image: "https://i.pinimg.com/1200x/35/c9/13/35c9137e20754967c1d2ba18af5a4693.jpg",
      tags: ["Chiều dài ~450m/cuộn", "Đường kính sợi ~1mm", "Độ bền cao, dễ sử dụng"],
      badge: "Khối lượng: 1kg/cuộn",
      price: "Liên hệ"
    },
    {
      title: "Sợi chuối bện",
      description: "Sợi được bện nhiều lớp, tạo kết cấu chắc chắn, phù hợp cho các sản phẩm yêu cầu độ bền và tính thẩm mỹ cao.",
      image: "https://i.pinimg.com/1200x/42/04/a1/4204a113f75458c9944011fa93f999c7.jpg",
      tags: ["Chiều dài ~450m/cuộn", "Kết cấu bền chắc", "Phù hợp nội thất và sản phẩm cao cấp"],
      badge: "Khối lượng: 1kg/cuộn",
      price: "Liên hệ"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-ivory">
      
      {/* PRODUCT HERO SECTION */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-brand-sand">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-sand/50 via-transparent to-brand-sand" />
        </div>
        
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold tracking-widest uppercase mb-6">
              DANH MỤC SẢN PHẨM
            </span>
            <h1 className="text-[44px] md:text-[72px] leading-[1.05] font-serif text-brand-charcoal mb-8 tracking-tight max-w-4xl mx-auto">
              Sợi chuối sinh học chuẩn hóa cho doanh nghiệp
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Khám phá các dòng sợi chuối chất lượng cao, được xử lý bằng công nghệ hiện đại, đáp ứng mọi nhu cầu sản xuất bền vững.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS LIST - Z-PATTERN */}
      <section className="py-24 bg-brand-ivory">
        <div className="section-container">
          <div className="space-y-32 md:space-y-48">
            {products.map((product, i) => (
              <div key={i} className={cn(
                "flex flex-col lg:flex-row gap-12 lg:gap-24 items-center",
                i % 2 !== 0 && "lg:flex-row-reverse"
              )}>
                {/* Image Section with Lens */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 w-full"
                >
                  <div className="relative group">
                    <ImageLens 
                      src={product.image} 
                      alt={product.title}
                      className="aspect-[4/3] shadow-soft hover:shadow-2xl transition-shadow duration-500"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg z-10 hidden md:block">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-olive">Texture Zoom</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1"
                >
                  <h2 className="text-[40px] md:text-[52px] font-serif text-brand-charcoal mb-6 leading-tight">
                    {product.title}
                  </h2>
                  <p className="text-lg text-brand-charcoal/60 leading-relaxed mb-8">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map((tag, j) => (
                      <span key={j} className="px-4 py-2 bg-brand-charcoal/5 rounded-full text-xs font-medium text-brand-charcoal/70">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-10">
                    <span className="px-4 py-2 bg-brand-olive/10 text-brand-olive rounded-lg text-sm font-bold">
                      {product.badge}
                    </span>
                    <span className="text-xl font-serif text-brand-charcoal">
                      Giá: <span className="text-brand-olive font-bold">{product.price}</span>
                    </span>
                  </div>

                  <MagneticButton 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-brand-olive hover:bg-brand-green"
                  >
                    ĐẶT MUA
                  </MagneticButton>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}

