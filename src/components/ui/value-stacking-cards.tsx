'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';
import { motion } from 'motion/react';

interface ValueCardData {
  title: string;
  description: string;
  color: string;
  rotation: string;
}

const valuesData: ValueCardData[] = [
  {
    title: 'Chất lượng chuẩn hóa',
    description: "Sợi có độ đồng đều, độ bền và độ mềm phù hợp cho sản xuất công nghiệp và thủ công mỹ nghệ cao cấp.",
    color: '#E8E4D9', // Brand Sand
    rotation: 'rotate-2',
  },
  {
    title: 'Quy trình thân thiện',
    description: 'Ứng dụng enzyme sinh học trong xử lý, giảm thiểu tối đa tác động tiêu cực đến hệ sinh thái tự nhiên.',
    color: '#D4D9C6', // Brand Olive
    rotation: '-rotate-2',
  },
  {
    title: 'Nguồn cung ổn định',
    description: 'Khai thác từ vùng nguyên liệu địa phương dồi dào, đảm bảo khả năng cung ứng lâu dài cho đối tác B2B.',
    color: '#E8E4D9', // Brand Sand
    rotation: 'rotate-1',
  },
  {
    title: 'Hỗ trợ B2B linh hoạt',
    description: 'Cung cấp mẫu thử, tư vấn ứng dụng chuyên sâu và chính sách giá ưu đãi theo sản lượng đặt hàng.',
    color: '#D4D9C6', // Brand Olive
    rotation: '-rotate-1',
  },
];

export const ValueStackingCards = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-brand-ivory' ref={ref}>
        <section className='text-brand-charcoal w-full py-20 flex flex-col items-center'>
          <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-8'>
            <div className='grid gap-4'>
              {valuesData.map((card, i) => (
                <figure key={i} className='sticky top-20 h-[50vh] grid place-content-center'>
                  <motion.article
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`h-72 w-[22rem] md:w-[30rem] rounded-3xl ${card.rotation} p-8 grid place-content-center gap-4 shadow-xl border border-brand-charcoal/10`}
                    style={{ backgroundColor: card.color }}
                  >
                    <h1 className='text-3xl font-serif font-bold text-brand-charcoal'>{card.title}</h1>
                    <p className='text-brand-charcoal/80 text-lg'>{card.description}</p>
                  </motion.article>
                </figure>
              ))}
            </div>
            <div className='sticky top-0 h-[40vh] md:h-screen grid place-content-center'>
              <h1 className='text-4xl md:text-5xl font-serif font-medium text-center tracking-tight leading-[120%] text-brand-green'>
                Giá trị khác biệt <br /> tạo nên sự tin cậy
              </h1>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
});

ValueStackingCards.displayName = 'ValueStackingCards';
