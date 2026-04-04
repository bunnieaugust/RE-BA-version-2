import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
  weight: string;
  priceText: string;
  onBookNow?: () => void;
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      className,
      imageUrl,
      imageAlt,
      title,
      description,
      features,
      weight,
      priceText,
      onBookNow,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative w-full h-[450px] max-w-sm overflow-hidden rounded-xl border border-border bg-card shadow-lg",
          "transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2",
          className
        )}
        {...props}
      >
        {/* Background Image with Zoom Effect on Hover */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          referrerPolicy="no-referrer"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/80 transition-all duration-500"></div>

        {/* Content Container */}
        <div className="relative flex h-full flex-col justify-end p-6 text-white">
          
          {/* Main Content (slides up on hover) */}
          <div className="space-y-3 transition-transform duration-500 ease-in-out group-hover:-translate-y-24">
            <h3 className="text-3xl font-bold font-serif text-white">{title}</h3>
            
            {/* Hidden content that fades in and expands */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
              <p className="text-sm text-white/90 leading-relaxed mb-3">
                {description}
              </p>
              
              <ul className="text-sm text-white/80 space-y-1.5 mb-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                {weight}
              </span>
            </div>
          </div>

          {/* Bottom Section: Price and Button (revealed on hover) */}
          <div className="absolute -bottom-24 left-0 w-full p-6 opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
            <div className="flex items-center justify-between border-t border-white/20 pt-4">
              <div>
                <span className="text-xs text-white/70 uppercase tracking-wider block mb-1">👉 Giá</span>
                <span className="text-xl font-bold text-white">{priceText}</span>
              </div>
              <Button onClick={onBookNow} className="bg-white text-black hover:bg-gray-200 rounded-full font-medium px-6">
                ĐẶT MUA <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
ProductCard.displayName = "ProductCard";
export { ProductCard };
