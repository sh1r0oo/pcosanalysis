"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "glass-button inline-flex items-center justify-center whitespace-nowrap gap-2",
  {
    variants: {
      variant: {
        default: "bg-white/10 hover:bg-white/20 text-white",
        outline: "bg-transparent border border-white/30 hover:bg-white/10 text-white",
        subtle: "bg-white/5 hover:bg-white/10 text-white",
        ghost: "hover:bg-white/10 text-white",
        link: "underline-offset-4 hover:underline text-white bg-transparent",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

const GlassButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export default GlassButton;