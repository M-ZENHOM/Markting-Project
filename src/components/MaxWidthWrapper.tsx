import { cn } from "@/utils/tailwind";
import React from "react";

interface IMaxWProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaxWidthWrapper({ children, className }: IMaxWProps) {
  return (
    <div className={cn("w-full max-w-[1440px] mx-auto px-2", className)}>
      {children}
    </div>
  );
}
