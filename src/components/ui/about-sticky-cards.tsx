"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "motion/react"
import { cn } from "@/lib/utils"

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number
  incrementY?: number
  incrementZ?: number
}

const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ perspective: "1000px", ...props.style }}
      {...props}
    >
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 60,
      incrementZ = 20,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const y = index * incrementY
    const z = index * incrementZ

    return (
      <motion.div
        ref={ref}
        layout="position"
        style={{
          top: y,
          z,
          backfaceVisibility: "hidden",
          ...style,
        }}
        className={cn("sticky bg-white p-8 rounded-3xl shadow-lg border border-brand-charcoal/10", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

CardSticky.displayName = "CardSticky"

const aboutData = [
  {
    title: "Công nghệ xử lý",
    description: "Thông qua quy trình xử lý kết hợp cơ học và enzyme, RE:BA tạo ra sợi chuối có chất lượng ổn định, thân thiện với môi trường và phù hợp với sản xuất trong các lĩnh vực thủ công mỹ nghệ, dệt may và thiết kế ứng dụng."
  },
  {
    title: "Cam kết bền vững",
    description: "Không chỉ dừng lại ở vật liệu “xanh”, RE:BA hướng tới việc đảm bảo: Minh bạch nguồn gốc nguyên liệu, Giá trị bền vững xuyên suốt chuỗi sản xuất."
  },
  {
    title: "Định hướng B2B",
    description: "RE:BA hoạt động theo mô hình B2B, tập trung cung cấp sợi thân chuối cho: Doanh nghiệp thủ công mỹ nghệ, Thương hiệu thời trang bền vững, Nhà thiết kế và đơn vị sáng tạo."
  }
]

export const AboutStickyCards = () => {
  return (
    <ContainerScroll className="py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        {aboutData.map((item, index) => (
          <CardSticky key={index} index={index} className="bg-brand-ivory/80 backdrop-blur-sm">
            <h3 className="text-3xl font-serif text-brand-green mb-4">{item.title}</h3>
            <p className="text-brand-charcoal/80 text-lg leading-relaxed">{item.description}</p>
          </CardSticky>
        ))}
      </div>
    </ContainerScroll>
  )
}
