"use client";
import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
    text: string;
    className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
    // [FIX 1]: Chỉ dùng 1 ref duy nhất cho thẻ div bọc ngoài cùng
    const targetRef = useRef<HTMLDivElement | null>(null);
    
    // [FIX 2 TĂNG TỐC]: Thu hẹp khoảng cách offset để rút ngắn quãng đường cuộn.
    // "start 80%": Bắt đầu hiệu ứng ngay khi khung text vừa lú lên 20% từ dưới màn hình.
    // "start 25%": Chữ SÁNG XONG HOÀN TOÀN cực nhanh khi khung text cuộn đến mốc 25% phía trên.
    // -> Quãng đường hoàn thành giờ rất ngắn (chỉ tốn khoảng nửa vòng lăn chuột).
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start 80%", "start 25%"]
    });

    const words = text.split(" ");

    return (
        <div ref={targetRef} className={cn("relative z-0 h-[100vh] w-full", className)}>
            <div className={"sticky top-0 mx-auto flex h-full w-full items-center bg-transparent"}>
                
                {/* ĐÃ XÓA bỏ thuộc tính ref={targetRef} bị dư thừa ở thẻ <p> này */}
                <p className={"flex flex-wrap text-lg md:text-xl font-medium leading-loose tracking-wide text-foreground/30"}>
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </p>
                
            </div>
        </div>
    );
};

interface WordProps {
    children: ReactNode;
    progress: MotionValue<number>;
    range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="relative mx-1 lg:mx-1.5 my-1">
            <span className={"absolute opacity-30"}>{children}</span>
            <motion.span style={{ opacity: opacity }} className={"text-foreground"}>
                {children}
            </motion.span>
        </span>
    );
};

export { TextRevealByWord };
