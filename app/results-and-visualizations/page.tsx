"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, LineChart, ChevronLeft, ChevronRight, Award, Zap, Target, BarChart3 } from "lucide-react";
import dynamic from 'next/dynamic';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import SectionHeading from "@/components/ui/SectionHeading";
import Tabs from "@/components/ui/Tabs";
import GlassCard from "@/components/ui/GlassCard";

// Data for ML Results Before Tuning - RFE
const rfeData = [
  { name: 'RF', Accuracy: 93.68, Precision: 93.67, Recall: 93.67, F1Score: 93.61 },
  { name: 'DT', Accuracy: 86.4, Precision: 86.49, Recall: 86.53, F1Score: 86.37 },
  { name: 'SVM', Accuracy: 92.17, Precision: 91.67, Recall: 92.84, F1Score: 92.19 },
  { name: 'LR', Accuracy: 90.79, Precision: 90.57, Recall: 91.20, F1Score: 90.76 },
  { name: 'KNN', Accuracy: 86.81, Precision: 84.54, Recall: 90.41, F1Score: 87.21 }
];

// Data for ML Results Before Tuning - MI
const miData = [
  { name: 'RF', Accuracy: 93.54, Precision: 93.47, Recall: 93.67, F1Score: 93.49 },
  { name: 'DT', Accuracy: 87.65, Precision: 87.99, Recall: 87.64, F1Score: 87.63 },
  { name: 'SVM', Accuracy: 92.30, Precision: 91.49, Recall: 93.39, F1Score: 92.35 },
  { name: 'LR', Accuracy: 91.07, Precision: 91.54, Recall: 90.65, F1Score: 90.93 },
  { name: 'KNN', Accuracy: 87.91, Precision: 85.55, Recall: 91.49, F1Score: 88.32 }
];

// Model comparison data
const modelComparisonData = [
  { metric: 'Accuracy', ml: 97.26, dl: 98.48 },
  { metric: 'Precision', ml: 97.26, dl: 98 },
  { metric: 'Recall', ml: 97.26, dl: 98 },
  { metric: 'F1 Score', ml: 97.26, dl: 98 },
  { metric: 'ROC-AUC', ml: 95, dl: 98 }
];

// Dynamically import model components
const MachineLearningModels = dynamic(() => import('@/components/models/MachineLearningModels'), {
  loading: () => (
    <GlassCard>
      <div className="h-96 flex items-center justify-center">
        <div className="animate-pulse text-white/70">Loading Machine Learning Models...</div>
      </div>
    </GlassCard>
  )
});

const DeepLearningModels = dynamic(() => import('@/components/models/DeepLearningModels'), {
  loading: () => (
    <GlassCard>
      <div className="h-96 flex items-center justify-center">
        <div className="animate-pulse text-white/70">Loading Deep Learning Models...</div>
      </div>
    </GlassCard>
  )
});

// RFE Feature Importance Data
const rfeFeatureImportanceData = [
  { feature: 'Follicle No. (R)', importance: 0.212567 },
  { feature: 'Follicle No. (L)', importance: 0.156566 },
  { feature: 'Skin darkening (Y/N)', importance: 0.062378 },
  { feature: 'Cycle(R/I)', importance: 0.049615 },
  { feature: 'Weight gain(Y/N)', importance: 0.043854 },
  { feature: 'hair growth(Y/N)', importance: 0.041808 },
  { feature: 'Fast food (Y/N)', importance: 0.029661 },
  { feature: 'AMH(ng/mL)', importance: 0.024682 },
  { feature: 'Cycle length(days)', importance: 0.024139 },
  { feature: 'Age (yrs)', importance: 0.019718 },
  { feature: 'Waist:Hip Ratio', importance: 0.017051 },
  { feature: 'TSH (mIU/L)', importance: 0.016514 },
  { feature: 'LH(mIU/mL)', importance: 0.016466 },
  { feature: 'Avg. F size (R) (mm)', importance: 0.016238 },
  { feature: 'BMI', importance: 0.016077 },
  { feature: 'FSH(mIU/mL)', importance: 0.015872 },
  { feature: 'RBS(mg/dl)', importance: 0.015207 },
  { feature: 'Hb(g/dl)', importance: 0.014799 },
  { feature: 'Weight (Kg)', importance: 0.014533 },
  { feature: 'FSH/LH', importance: 0.014498 },
  { feature: 'Avg. F size (L) (mm)', importance: 0.014467 },
  { feature: 'Endometrium (mm)', importance: 0.014387 },
  { feature: 'I beta-HCG(mIU/mL)', importance: 0.014314 },
  { feature: 'Hip(inch)', importance: 0.014235 },
  { feature: 'Height(Cm)', importance: 0.013514 },
  { feature: 'Waist(inch)', importance: 0.013293 },
  { feature: 'Marraige Status (Yrs)', importance: 0.013051 },
  { feature: 'Vit D3 (ng/mL)', importance: 0.012641 },
  { feature: 'Pulse rate(bpm)', importance: 0.012550 },
  { feature: 'Pimples(Y/N)', importance: 0.012253 },
  { feature: 'PRL(ng/mL)', importance: 0.012245 },
  { feature: 'PRG(ng/mL)', importance: 0.012167 },
  { feature: 'Blood Group', importance: 0.006922 },
  { feature: 'II beta-HCG(mIU/mL)', importance: 0.006035 },
  { feature: 'RR (breaths/min)', importance: 0.005685 },
];

// SelectKBest Feature Importance Data
const selectKBestFeatureImportanceData = [
  { feature: 'Follicle No. (R)', importance: 0.365941 },
  { feature: 'Follicle No. (L)', importance: 0.340411 },
  { feature: 'Hip(inch)', importance: 0.187925 },
  { feature: 'Cycle length(days)', importance: 0.182550 },
  { feature: 'Avg. F size (R) (mm)', importance: 0.180444 },
  { feature: 'Age (yrs)', importance: 0.175953 },
  { feature: 'Skin darkening (Y/N)', importance: 0.155970 },
  { feature: 'Avg. F size (L) (mm)', importance: 0.149932 },
  { feature: 'Waist(inch)', importance: 0.145328 },
  { feature: 'hair growth(Y/N)', importance: 0.141332 },
  { feature: 'Height(Cm)', importance: 0.134726 },
  { feature: 'Hb(g/dl)', importance: 0.127151 },
  { feature: 'BP _Systolic (mmHg)', importance: 0.122853 },
  { feature: 'Marraige Status (Yrs)', importance: 0.120885 },
  { feature: 'Pulse rate(bpm)', importance: 0.119494 },
  { feature: 'Weight gain(Y/N)', importance: 0.113753 },
  { feature: 'Fast food (Y/N)', importance: 0.108012 },
  { feature: 'Cycle(R/I)', importance: 0.104533 },
  { feature: 'Weight (Kg)', importance: 0.101867 },
  { feature: 'AMH(ng/mL)', importance: 0.096629 },
  { feature: 'Waist:Hip Ratio', importance: 0.093185 },
  { feature: 'PRG(ng/mL)', importance: 0.092439 },
  { feature: 'RR (breaths/min)', importance: 0.080152 },
  { feature: 'RBS(mg/dl)', importance: 0.072968 },
  { feature: 'BP _Diastolic (mmHg)', importance: 0.071650 },
  { feature: 'Endometrium (mm)', importance: 0.067610 },
  { feature: 'Pimples(Y/N)', importance: 0.066137 },
  { feature: 'Blood Group', importance: 0.058693 },
  { feature: 'No. of aborptions', importance: 0.053315 },
  { feature: 'Pregnant(Y/N)', importance: 0.047336 },
  { feature: 'FSH/LH', importance: 0.046981 },
  { feature: 'FSH(mIU/mL)', importance: 0.038181 },
  { feature: 'I beta-HCG(mIU/mL)', importance: 0.037316 },
  { feature: 'Vit D3 (ng/mL)', importance: 0.030028 },
  { feature: 'Hair loss(Y/N)', importance: 0.026063 },
  { feature: 'PRL(ng/mL)', importance: 0.026009 },
  { feature: 'LH(mIU/mL)', importance: 0.021077 },
  { feature: 'BMI', importance: 0.014574 },
  { feature: 'II beta-HCG(mIU/mL)', importance: 0.010809 },
  { feature: 'Reg.Exercise(Y/N)', importance: 0.002816 },
  { feature: 'TSH (mIU/L)', importance: 0.000000 }
];

export default function ResultsAndVisualizations() {
  const [activeTab, setActiveTab] = useState("ml");
  const [showRFE, setShowRFE] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [selectedFeatureMethod, setSelectedFeatureMethod] = useState("rfe");

  const tabs = [
    {
      id: "ml",
      label: "Machine Learning Models",
      icon: <LineChart className="h-4 w-4" />
    },
    {
      id: "dl",
      label: "Deep Learning Models",
      icon: <Brain className="h-4 w-4" />
    }
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleFeatureMethodChange = (method: string) => {
    setSelectedFeatureMethod(method);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          title="Results & Visualizations"
          subtitle="Comprehensive analysis of model performance and data insights"
          align="center"
        />

        {/* Feature Importance Section */}
        <div className="mb-16">
          <GlassCard>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Feature Importance</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => handleFeatureMethodChange("rfe")}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedFeatureMethod === "rfe" ? "bg-white/20" : "bg-white/5 hover:bg-white/10"}`}
                >
                  RFE
                </button>
                <button
                  onClick={() => handleFeatureMethodChange("selectkbest")}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedFeatureMethod === "selectkbest" ? "bg-white/20" : "bg-white/5 hover:bg-white/10"}`}
                >
                  SelectKBest
                </button>
              </div>
            </div>

            <div className="h-[600px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={selectedFeatureMethod === "rfe" ? rfeFeatureImportanceData : selectKBestFeatureImportanceData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} horizontal={false} />
                  <XAxis
                    type="number"
                    tick={{ fill: '#ffffff', opacity: 0.8 }}
                    domain={selectedFeatureMethod === "rfe" ? [0, 0.25] : [0, 0.4]}
                    label={{ 
                      value: selectedFeatureMethod === "rfe" ? 'RFE Importance Score' : 'Mutual Information Score', 
                      offset: 10, 
                      position: 'bottom', 
                      fill: '#ffffff' 
                    }}
                  />
                  <YAxis
                    dataKey="feature"
                    type="category"
                    interval={0}
                    tick={{ fill: '#ffffff', opacity: 0.8, fontSize: 8, width: 200 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(10, 10, 20, 0.8)',
                      borderRadius: '8px',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#ffffff'
                    }}
                  />
                  <Bar 
                    dataKey="importance" 
                    fill={selectedFeatureMethod === "rfe" ? "rgba(99, 102, 241, 0.8)" : "rgba(236, 72, 153, 0.8)"} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <h4 className="font-medium mb-2">Key Insights</h4>
              <p className="text-white/80 text-sm">
                {selectedFeatureMethod === "rfe" ? (
                  "RFE analysis shows that follicle numbers (right and left) are the most important predictors, followed by skin darkening and menstrual cycle characteristics. This suggests that physical examination findings play a crucial role in PCOS detection."
                ) : (
                  "Mutual Information analysis confirms the importance of follicle counts and reveals strong correlations with physical measurements like hip circumference and cycle length. The method also highlights the significance of age and skin darkening as diagnostic indicators."
                )}
              </p>
            </div>
          </GlassCard>
        </div>

        {/* ML vs DL Results */}
        <div className="mb-16">
          <GlassCard
            className="relative"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">
                Feature Selection Method Comparison: {showRFE ? 'RFE' : 'MI'}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowRFE(true)}
                  className={`px-4 py-2 rounded-lg transition-colors ${showRFE ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'
                    }`}
                >
                  RFE
                </button>
                <button
                  onClick={() => setShowRFE(false)}
                  className={`px-4 py-2 rounded-lg transition-colors ${!showRFE ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'
                    }`}
                >
                  MI
                </button>
              </div>
            </div>

            <motion.div
              key={showRFE ? 'rfe' : 'mi'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={showRFE ? rfeData : miData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#ffffff', opacity: 0.8 }}
                  />
                  <YAxis
                    tick={{ fill: '#ffffff', opacity: 0.8 }}
                    domain={[80, 100]}
                    label={{
                      value: 'Percentage (%)',
                      angle: -90,
                      position: 'insideLeft',
                      fill: '#ffffff',
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(10, 10, 20, 0.8)',
                      borderRadius: '8px',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#ffffff'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="Accuracy" fill="rgba(99, 102, 241, 0.8)" />
                  <Bar dataKey="Precision" fill="rgba(139, 92, 246, 0.8)" />
                  <Bar dataKey="Recall" fill="rgba(236, 72, 153, 0.8)" />
                  <Bar dataKey="F1Score" fill="rgba(14, 165, 233, 0.8)" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </GlassCard>
        </div>

        {/* Tabs for ML vs DL Models */}
        <Tabs
          tabs={tabs}
          defaultTab="ml"
          onChange={handleTabChange}
        />

        {/* Display active tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          {activeTab === "ml" && <MachineLearningModels />}
          {activeTab === "dl" && <DeepLearningModels />}
        </motion.div>

        {/* Performance Comparison */}
        <GlassCard>
          <h3 className="text-xl font-semibold mb-6">Performance Comparison: ML vs DL</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={modelComparisonData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} horizontal={false} />
                  <XAxis type="number" domain={[80, 100]} tick={{ fill: '#ffffff', opacity: 0.8 }} />
                  <YAxis
                    dataKey="metric"
                    type="category"
                    tick={{ fill: '#ffffff', opacity: 0.8 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(10, 10, 20, 0.8)',
                      borderRadius: '8px',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#ffffff'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="ml" name="Random Forest" fill="rgba(99, 102, 241, 0.8)" />
                  <Bar dataKey="dl" name="FNN" fill="rgba(236, 72, 153, 0.8)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Key Insights */}
            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-lg flex items-start gap-4">
                <div className="bg-blue-500/20 p-2 rounded-full mt-1">
                  <Award className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Best Overall Performance</h4>
                  <p className="text-white/80 text-sm">
                    FNN achieved 98.48% accuracy compared to Random Forest's 97.26%.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-lg flex items-start gap-4">
                <div className="bg-purple-500/20 p-2 rounded-full mt-1">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Precision & Recall Balance</h4>
                  <p className="text-white/80 text-sm">
                    Both models maintained similar balance between precision and recall.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-lg flex items-start gap-4">
                <div className="bg-pink-500/20 p-2 rounded-full mt-1">
                  <Target className="h-5 w-5 text-pink-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Clinical Implications</h4>
                  <p className="text-white/80 text-sm">
                    The high F1 scores suggest reliable performance for clinical applications, with minimal false positives/negatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}