"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedCounter from "./AnimatedCounter";
import { BadgeCheck, AlertCircle, Gauge, Award } from "lucide-react";

interface ModelCardProps {
  name: string;
  description: string;
  metrics: {
    accuracy: number;
    precision: number;
    recall: number;
    f1: number;
  };
  isTopPerformer?: boolean;
  className?: string;
}

export default function ModelCard({ 
  name, 
  description, 
  metrics, 
  isTopPerformer,
  className
}: ModelCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "model-card glass-card h-full", 
        isTopPerformer && "ring-2 ring-yellow-400/50",
        className
      )}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold">{name}</h3>
        {isTopPerformer && (
          <div className="bg-yellow-400/20 p-1.5 rounded-full">
            <Award className="h-5 w-5 text-yellow-400" />
          </div>
        )}
      </div>
      
      <p className="text-sm text-white/70 mt-2 mb-4">{description}</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 p-3 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1 text-sm text-white/80">
            <BadgeCheck className="h-4 w-4 text-blue-400" />
            <span>Accuracy</span>
          </div>
          <div className="text-xl font-semibold">
            <AnimatedCounter value={metrics.accuracy} decimals={2} suffix="%" />
          </div>
        </div>
        
        <div className="bg-white/5 p-3 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1 text-sm text-white/80">
            <Gauge className="h-4 w-4 text-green-400" />
            <span>Precision</span>
          </div>
          <div className="text-xl font-semibold">
            <AnimatedCounter value={metrics.precision} decimals={2} suffix="%" />
          </div>
        </div>
        
        <div className="bg-white/5 p-3 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1 text-sm text-white/80">
            <AlertCircle className="h-4 w-4 text-purple-400" />
            <span>Recall</span>
          </div>
          <div className="text-xl font-semibold">
            <AnimatedCounter value={metrics.recall} decimals={2} suffix="%" />
          </div>
        </div>
        
        <div className="bg-white/5 p-3 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1 text-sm text-white/80">
            <BadgeCheck className="h-4 w-4 text-pink-400" />
            <span>F1 Score</span>
          </div>
          <div className="text-xl font-semibold">
            <AnimatedCounter value={metrics.f1} decimals={2} suffix="%" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}