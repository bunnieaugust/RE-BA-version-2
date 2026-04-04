import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface TestimonialGridProps {
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialGrid = ({ testimonials, className }: TestimonialGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="rounded-3xl border border-brand-charcoal/10 shadow-soft flex flex-col">
          <CardHeader className="flex flex-row items-center gap-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <h4 className="font-serif font-semibold text-brand-charcoal">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <Quote className="w-8 h-8 text-brand-olive mb-4 opacity-50" />
            <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { TestimonialGrid };
