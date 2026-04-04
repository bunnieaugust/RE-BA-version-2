import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SupplierItem {
  title: string;
  icon: React.ReactNode;
  bullets: string[];
}

interface SupplierBlogSectionProps {
  tagline: string;
  heading: string;
  description: string;
  items: SupplierItem[];
}

const SupplierBlogSection = ({
  tagline = "RE:BA – NHÀ CUNG ỨNG SỢI CHUỐI CHIẾN LƯỢC",
  heading = "Tác động của chúng tôi",
  description = "RE:BA cam kết tạo ra giá trị bền vững thông qua quy trình sản xuất minh bạch và trách nhiệm.",
  items = [],
}: SupplierBlogSectionProps) => {
  return (
    <section className="py-32 bg-brand-ivory">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 bg-brand-olive text-white">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-serif font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl text-brand-charcoal">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item, index) => (
            <Card key={index} className="grid grid-rows-[auto_auto_1fr] rounded-3xl border border-brand-charcoal/10 shadow-soft">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-brand-sand/30 rounded-full text-brand-olive">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-charcoal">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-brand-olive mt-1">●</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export { SupplierBlogSection };
