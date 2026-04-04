import React from "react";
import { cn } from "../../lib/utils";

export const CometCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[16px] p-[2px] backdrop-blur-3xl",
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="relative h-full w-full rounded-[14px] bg-brand-charcoal overflow-hidden">
        {children}
      </div>
    </div>
  );
};
