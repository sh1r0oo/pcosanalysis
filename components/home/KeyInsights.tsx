"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LineChart, BarChart, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassButton from "@/components/ui/GlassButton";

export default function KeyInsights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Key Insights"
          subtitle="Our research has led to significant findings with potential clinical applications"
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card relative overflow-hidden h-full"
          >
            <div className="absolute -bottom-6 -right-6 opacity-10">
              <LineChart className="w-32 h-32" />
            </div>
            <div className="relative z-10 p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">Model Performance</h3>
              <p className="text-white/70 mb-6 flex-grow">
                Deep learning models consistently outperformed traditional ML approaches, with 
                FNN achieving up to 98.48% accuracy and 98.62% precision.
              </p>
              <GlassButton href="/results-and-visualizations" variant="outline">
                View Results
              </GlassButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card relative overflow-hidden h-full"
          >
            <div className="absolute -bottom-6 -right-6 opacity-10">
              <BarChart className="w-32 h-32" />
            </div>
            <div className="relative z-10 p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">Feature Importance</h3>
              <p className="text-white/70 mb-6 flex-grow">
                RFE and SelectKBest identified FSH/LH ratio, AMH levels, and follicle count as critical 
                diagnostic indicators for PCOS detection.
              </p>
              <GlassButton href="/results-and-visualizations" variant="outline">
                See Visualizations
              </GlassButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card relative overflow-hidden h-full"
          >
            <div className="absolute -bottom-6 -right-6 opacity-10">
              <BarChart3 className="w-32 h-32" />
            </div>
            <div className="relative z-10 p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">Clinical Impact</h3>
              <p className="text-white/70 mb-6 flex-grow">
                Automated PCOS detection using our models could reduce diagnostic time by up to 75%, 
                enabling earlier interventions and improved patient outcomes.
              </p>
              <GlassButton href="/insights-discussion" variant="outline">
                Explore Implications
              </GlassButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}