"use client";

import { BendText } from "./bend-text";
import { TextRevealByWord } from "./text-reveal-by-word";

export const AboutSection = () => {
    return (
        <section className="py-20 bg-brand-ivory flex flex-col md:flex-row items-center justify-between gap-10 px-8">
            <div className="w-full md:w-1/2 flex justify-center">
                <BendText />
            </div>
            <div className="w-full md:w-1/2">
                <TextRevealByWord 
                    text="RE:BA là doanh nghiệp phát triển vật liệu sinh học từ sợi thân chuối – một nguồn phụ phẩm nông nghiệp dồi dào nhưng chưa được khai thác hiệu quả tại Việt Nam. Thông qua quy trình xử lý kết hợp cơ học và enzyme, RE:BA tạo ra sợi chuối có chất lượng ổn định, thân thiện với môi trường và phù hợp với sản xuất trong các lĩnh vực thủ công mỹ nghệ, dệt may và thiết kế ứng dụng."
                    className="h-[100vh]"
                />
            </div>
        </section>
    );
};
