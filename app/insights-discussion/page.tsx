"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  ShieldAlert,
  Database,
  Cpu,
  BarChart,
  PieChart,
  FlaskConical,
  Settings,
  Search,
  Layers3,
  Clock,
  Leaf,
  HeartHandshake,
  Puzzle,
  TrendingDown,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function InsightsDiscussion() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          title="Discussion and Insights"
          subtitle="Model performance, applications, future directions, and ethical considerations"
          align="center"
        />

        {/* Section 1: Critical Evaluation of Models */}
        <GlassCard className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-full">
              <Lightbulb className="h-6 w-6 text-yellow-400" />
            </div>
            <h2 className="text-xl font-semibold">Critical Evaluation of Models</h2>
          </div>
          <p className="text-white/80 mb-4">
            Summarizing performance differences among models and highlighting strengths/weaknesses.
          </p>
          <div className="flex gap-4 items-stretch">
            <GlassCard className="p-4 mb-4 w-1/2 h-full">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <h3 className="text-lg font-semibold">Top-Performing Models</h3>
              </div>
              <p className="text-white/80">
                <strong>Models:</strong> RF, SVM, LR, FNN, CNN, MLP
              </p>
              <ul className="list-disc list-inside text-white/80">
                <li>Consistent and accurate in handling tabular data.</li>
                <li>Robust performance across different validation techniques.</li>
                <li>Strong candidates for practical applications in PCOS detection.</li>
              </ul>
            </GlassCard>
            <GlassCard className="p-4 w-1/2 h-full">
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="h-5 w-5 text-red-400" />
                <h3 className="text-lg font-semibold">Underperforming Models</h3>
              </div>
              <p className="text-white/80">
                <strong>Models:</strong> DT, KNN, LSTM-CNN, GRU
              </p>
              <ul className="list-disc list-inside text-white/80">
                <li>Inconsistent performance compared to top-performing models.</li>
                <li>Higher sensitivity to noise and outliers in the dataset.</li>
                <li>Potential for improvement with advanced tuning and feature engineering.</li>
              </ul>
            </GlassCard>
          </div>
        </GlassCard>

        {/* Section 2: Practical Applications */}
        <GlassCard className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-full">
              <HeartHandshake className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold">Practical Applications</h2>
          </div>
          <p className="text-white/80 mb-4">
            Illustrating how successful models can be implemented in real-world healthcare settings.
          </p>
          <div className="flex gap-4 items-stretch">
            <GlassCard className="p-4 mb-4 w-1/3">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="h-5 w-5 text-purple-400" />
                <h3 className="text-lg font-semibold">Healthcare Integration</h3>
              </div>
              <ul className="list-disc list-inside text-white/80">
                <li>Automated diagnosis of PCOS in clinics/hospitals to streamline the diagnostic process.</li>
                <li>Quicker and more reliable diagnosis compared to traditional methods, improving patient outcomes.</li>
                <li>Integration with existing healthcare systems for seamless adoption.</li>
              </ul>
            </GlassCard>
            <GlassCard className="p-4 mb-4 w-1/3">
              <div className="flex items-center gap-3 mb-2">
                <BarChart className="h-5 w-5 text-indigo-400" />
                <h3 className="text-lg font-semibold">Generalizability</h3>
              </div>
              <ul className="list-disc list-inside text-white/80">
                <li>Potential for classifying other diseases using tabular data, expanding their applicability.</li>
                <li>Adaptability to different datasets and medical domains.</li>
                <li>Opportunities for collaboration with other research teams and healthcare providers.</li>
              </ul>
            </GlassCard>
            <GlassCard className="p-4 mb-4 w-1/3">
              <div className="flex items-center gap-3 mb-2">
                <Puzzle className="h-5 w-5 text-pink-400" />
                <h3 className="text-lg font-semibold">Academic Contribution</h3>
              </div>
              <ul className="list-disc list-inside text-white/80">
                <li>Comparative analysis contributes to the research community, fostering innovation.</li>
                <li>Encourages adoption of AI in disease diagnostics, paving the way for future advancements.</li>
                <li>Provides a benchmark for future studies and model development.</li>
              </ul>
            </GlassCard>
          </div>
        </GlassCard>

        {/* Section 3: Future Work and Improvements */}
        <GlassCard className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-full">
              <FlaskConical className="h-6 w-6 text-orange-400" />
            </div>
            <h2 className="text-xl font-semibold">Future Work and Improvements</h2>
          </div>
          <p className="text-white/80 mb-4">
            Identifying areas for enhancement and ongoing research to push the boundaries of PCOS detection.
          </p>
          <div className="flex gap-4 items-stretch">
            <GlassCard className="p-4 mb-4 w-1/3">
              <div className="flex items-center gap-3 mb-2">
                <Settings className="h-5 w-5 text-yellow-400" />
                <h3 className="text-lg font-semibold">Possible Enhancements</h3>
              </div>
              <ul className="list-disc list-inside text-white/80">
                <li>Use of a larger and balanced dataset to improve model consistency and accuracy.</li>
                <li>Handling missing values effectively through advanced imputation techniques.</li>
                <li>Hyperparameter optimization using advanced algorithms to fine-tune model performance.</li>
                <li>Advanced feature engineering to extract more relevant information from the data.</li>
                <li>Regularization methods (Dropout, L2) to reduce overfitting and improve generalization.</li>
                <li>Exploring ensemble learning (e.g., RF + CNN) to combine the strengths of multiple models.</li>
              </ul>
            </GlassCard>
            <GlassCard className="p-4 mb-4 w-1/3">
              <div className="flex items-center gap-3 mb-2">
                <Search className="h-5 w-5 text-green-400" />
                <h3 className="text-lg font-semibold">Scalability and Deployment</h3>
              </div>
              <ul className="list-disc list-inside text-white/80">
                <li>Low-cost, efficient models for deployment (RF, LR, FNN) to ensure accessibility.</li>
                <li>Use of cloud platforms or edge devices for scalable and reliable deployment.</li>
                <li>Development of user-friendly interfaces or APIs for seamless integration into healthcare systems.</li>
              </ul>
            </GlassCard>
            <GlassCard className="p-4 mb-4 w-1/3">
              <div className="flex items-center gap-3 mb-2">
                <Layers3 className="h-5 w-5 text-blue-400" />
                <h3 className="text-lg font-semibold">Potential Research Directions</h3>
              </div>
              <ul className="list-disc list-inside text-white/80">
                <li>Advanced architectures: Transformers, GNNs for improved performance and insights.</li>
                <li>Explainability tools: SHAP, LIME to interpret model predictions and enhance transparency.</li>
                <li>Statistical validation: Paired T-tests, ANOVA for robust model evaluation.</li>
                <li>Transfer learning to leverage external datasets and improve model performance.</li>
                <li>Lightweight models for real-time predictions in low-resource settings, expanding practical applicability.</li>
              </ul>
            </GlassCard>
          </div>
        </GlassCard>

        {/* Section : Ethical Considerations and Sustainability */}
        <GlassCard>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-full">
              <ShieldAlert className="h-6 w-6 text-red-400" />
            </div>
            <h2 className="text-xl font-semibold">Ethical Considerations and Sustainability</h2>
          </div>
          <p className="text-white/80 mb-4">
            Addressing ethical implications and long-term viability to ensure responsible AI deployment.
          </p>
          <div className="flex gap-4 items-stretch">
            <GlassCard className="p-4 mb-4 w-1/2 h-full">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-5 w-5 text-orange-400" />
                <h3 className="text-lg font-semibold">Ethical Issues</h3>
              </div>
              <ul className="list-disc list-inside text-white/80">
                <li>Data Privacy: Anonymize patient data to protect sensitive health information.</li>
                <li>Informed Consent: Ensure transparency and approval from participants regarding data usage.</li>
                <li>Accountability: Establish responsibility for diagnostic outcomes to address errors and ensure patient safety.</li>
              </ul>
            </GlassCard>
            <GlassCard className="p-4 w-1/2 h-full">
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="h-5 w-5 text-green-400" />
                <h3 className="text-lg font-semibold">Sustainability</h3>
              </div>
              <ul className="list-disc list-inside text-white/80">
                <li>Environmental Concerns: Optimize training efficiency to reduce energy consumption.</li>
                <li>Maintenance: Periodic updates with new data to maintain model accuracy and relevance.</li>
                <li>Monitoring: Continuous evaluation post-deployment to detect performance drift and ensure reliability.</li>
              </ul>
            </GlassCard>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
