"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { BarChart, Database, Cpu, PieChart, Layers, CheckSquare } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: <Layers className="h-10 w-10 text-green-400" />,
    title: "Dataset Normalization",
    description: "Standardizing data distributions to improve model performance and convergence rates.",
  },
  {
    icon: <PieChart className="h-10 w-10 text-pink-400" />,
    title: "Dataset Balancing",
    description: "Implementation of SMOTE and other techniques to address class imbalance for unbiased model training.",
  },
  {
    icon: <Database className="h-10 w-10 text-blue-400" />,
    title: "Feature Selection",
    description: "Comprehensive analysis of critical medical parameters for optimal model training and accuracy.",
  },
  {
    icon: <CheckSquare className="h-10 w-10 text-yellow-400" />,
    title: "Validation Techniques",
    description: "Cross-validation strategies ensuring robust model evaluation and generalization capabilities.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-purple-400" />,
    title: "ML & DL Models",
    description: "Training with various machine learning algorithms and deep neural network architectures.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-indigo-400" />,
    title: "Performance Metrics",
    description: "Detailed evaluation using accuracy, precision, recall, F1-score, and ROC-AUC metrics.",
  },
];

export default function FeaturedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
 
  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Research Highlights"
          subtitle="Key methodologies and technologies employed in our PCOS detection analysis"
          align="center"
        />
       
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="h-full flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-white/10">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}