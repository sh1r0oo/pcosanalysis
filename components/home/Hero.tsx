"use client";
// components/home/Hero.tsx
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Comparative Analysis of ML & DL Models for PCOS Detection
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            A comprehensive study evaluating the performance of various machine learning 
            and deep learning approaches for accurate PCOS diagnosis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card my-12 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Top DL Accuracy</h3>
            <div className="text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter value={98.48} decimals={2} suffix="%" />
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Models Compared</h3>
            <div className="text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter value={10} />
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Features Analyzed</h3>
            <div className="text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter value={35} />
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Top ML Accuracy</h3>
            <div className="text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter value={97.26} decimals={2} suffix="%" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <GlassButton href="/project-overview" className="text-lg">
            Explore Project
            <ChevronRight className="h-5 w-5" />
          </GlassButton>
        </motion.div>
      </div>
    </div>
  );
}
