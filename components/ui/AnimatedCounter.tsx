"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2.5,
  decimals = 0,
  prefix = "",
  suffix = "",
  className
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrameId: number;
    
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    
    const animate = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const relativeProgress = runtime / (duration * 1000);
      
      if (relativeProgress < 1) {
        const easedProgress = easeOutQuart(relativeProgress);
        setCount(easedProgress * value);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    animationFrameId = requestAnimationFrame(startAnimation);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [inView, value, duration]);
  
  // Easing function for smooth counter animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };
  
  // Format number with commas and specified decimals
  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  };
  
  return (
    <div ref={ref} className={cn("counter-animation", className)}>
      {inView ? (
        <>
          {prefix}
          {formatNumber(count)}
          {suffix}
        </>
      ) : (
        <>
          {prefix}
          {formatNumber(0)}
          {suffix}
        </>
      )}
    </div>
  );
}