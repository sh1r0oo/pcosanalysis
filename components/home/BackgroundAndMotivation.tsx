// components/home/BackgroundAndMotivation.tsx
"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeIn } from "@/lib/animations";

const BackgroundAndMotivation = () => {
  const text = `Polycystic Ovary Syndrome (PCOS) is the most common endocrine disorder, primarily affecting women during their reproductive years. This hormonal condition not only disrupts ovarian function but also leads to a range of health issues, including metabolic disorders, cardiovascular diseases, infertility, mental health challenges, and type 2 diabetes. Additionally, PCOS is linked to impaired insulin secretion from the pancreas. While the exact cause of PCOS remains unclear, it is thought to arise from a combination of genetic factors, hormonal imbalances, and environmental influences. Alarmingly, PCOS affects approximately 5–18% of women worldwide, making it a significant health concern that demands attention. Despite its prevalence, diagnosing PCOS is a complex and often challenging task, especially in its early stages. Over the years, several biomarkers have been proposed for diagnosing PCOS, with the Rotterdam criteria being the most widely used. These criteria focus on three key features: androgen excess, ovulatory dysfunction, and polycystic ovarian morphology (PCOM). However, relying solely on these criteria can lead to diagnostic inaccuracies. For instance, the presence of polycystic ovaries, as detected through 3D ultrasonography, does not always indicate PCOS. Furthermore, early treatment can reduce the progression of PCOS. This limitation highlights the need for more reliable and comprehensive diagnostic methods.`;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Background and Motivation"
          subtitle="Understanding the need for improved PCOS detection methods"
          align="center"
        />
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <GlassCard>
            <p className="text-white/70 leading-relaxed">{text}</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default BackgroundAndMotivation;
