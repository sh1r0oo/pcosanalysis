"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  LineChart, 
  BarChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  Bar,
  Line
} from "recharts";
import { Brain } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

// ML Results Before Tuning - RFE
const rfeData = [
  { name: 'RF', Accuracy: 93.68, Precision: 93.67, Recall: 93.67, F1Score: 93.61 },
  { name: 'DT', Accuracy: 86.4, Precision: 86.49, Recall: 86.53, F1Score: 86.37 },
  { name: 'SVM', Accuracy: 92.17, Precision: 91.67, Recall: 92.84, F1Score: 92.19 },
  { name: 'LR', Accuracy: 90.79, Precision: 90.57, Recall: 91.20, F1Score: 90.76 },
  { name: 'KNN', Accuracy: 86.81, Precision: 84.54, Recall: 90.41, F1Score: 87.21 }
];

// ML Results Before Tuning - MI
const miData = [
  { name: 'RF', Accuracy: 93.54, Precision: 93.47, Recall: 93.67, F1Score: 93.49 },
  { name: 'DT', Accuracy: 87.65, Precision: 87.99, Recall: 87.64, F1Score: 87.63 },
  { name: 'SVM', Accuracy: 92.30, Precision: 91.49, Recall: 93.39, F1Score: 92.35 },
  { name: 'LR', Accuracy: 91.07, Precision: 91.54, Recall: 90.65, F1Score: 90.93 },
  { name: 'KNN', Accuracy: 87.91, Precision: 85.55, Recall: 91.49, F1Score: 88.32 }
];

// ML Results After Tuning
const mlResultsAfterTuning = [
  { name: 'RF', Accuracy: 92.86, Precision: 92.93, Recall: 92.85, F1: 92.78 },
  { name: 'DT', Accuracy: 85.72, Precision: 87.13, Recall: 84.31, F1: 85.45 },
  { name: 'SVM', Accuracy: 92.45, Precision: 92.14, Recall: 92.85, F1: 92.40 },
  { name: 'LR', Accuracy: 90.52, Precision: 90.80, Recall: 90.37, F1: 90.41 },
  { name: 'KNN', Accuracy: 90.39, Precision: 89.10, Recall: 92.31, F1: 90.58 }
];

// ML Results Split Validation
const mlResultsSplitValidation = [
  { name: 'RF', Accuracy: 97.26, Precision: 97.26, Recall: 97.26, F1: 97.26 },
  { name: 'DT', Accuracy: 88.36, Precision: 90.00, Recall: 86.30, F1: 88.11 },
  { name: 'SVM', Accuracy: 90.41, Precision: 88.31, Recall: 93.15, F1: 90.67 },
  { name: 'LR', Accuracy: 94.52, Precision: 95.77, Recall: 93.15, F1: 94.44 },
  { name: 'KNN', Accuracy: 88.36, Precision: 91.12, Recall: 84.93, F1: 87.94 }
];

// Confusion matrix data for cross-validation (no tuning)
const confusionMatrixDataNoTuning = {
  "Random Forest": {
    truePositive: 34,
    falsePositive: 2,
    falseNegative: 2,
    trueNegative: 34
  },
  "Decision Tree": {
    truePositive: 31,
    falsePositive: 5,
    falseNegative: 5,
    trueNegative: 31
  },
  "SVM": {
    truePositive: 33,
    falsePositive: 4,
    falseNegative: 3,
    trueNegative: 32
  },
  "Logistic Regression": {
    truePositive: 33,
    falsePositive: 4,
    falseNegative: 3,
    trueNegative: 32
  },
  "KNN": {
    truePositive: 33,
    falsePositive: 7,
    falseNegative: 3,
    trueNegative: 29
  }
} as const;

// Confusion matrix data for cross-validation (with tuning)
const confusionMatrixDataWithTuning = {
  "Random Forest": {
    truePositive: 34,
    falsePositive: 2,
    falseNegative: 2,
    trueNegative: 34
  },
  "Decision Tree": {
    truePositive: 29,
    falsePositive: 3,
    falseNegative: 7,
    trueNegative: 31
  },
  "SVM": {
    truePositive: 34,
    falsePositive: 3,
    falseNegative: 2,
    trueNegative: 33
  },
  "Logistic Regression": {
    truePositive: 33,
    falsePositive: 4,
    falseNegative: 3,
    trueNegative: 32
  },
  "KNN": {
    truePositive: 31,
    falsePositive: 4,
    falseNegative: 3,
    trueNegative: 32
  }
} as const;

// Confusion matrix data for split validation
const confusionMatrixData = {
  "Random Forest": {
    truePositive: 70,
    falsePositive: 3,
    falseNegative: 4,
    trueNegative: 69
  },
  "Decision Tree": {
    truePositive: 66,
    falsePositive: 7,
    falseNegative: 10,
    trueNegative: 63
  },
  "SVM": {
    truePositive: 64,
    falsePositive: 9,
    falseNegative: 5,
    trueNegative: 68
  },
  "Logistic Regression": {
    truePositive: 70,
    falsePositive: 3,
    falseNegative: 5,
    trueNegative: 68
  },
  "KNN": {
    truePositive: 67,
    falsePositive: 6,
    falseNegative: 11,
    trueNegative: 62
  }
} as const;

// Best parameters data
const bestParameters = {
  "Random Forest": {
    max_depth: "None",
    min_samples_leaf: "2",
    min_samples_split: "5",
    n_estimators: "100"
  },
  "Decision Tree": {
    max_depth: "None",
    min_samples_leaf: "4",
    min_samples_split: "10"
  },
  "SVM": {
    C: "10",
    kernel: "Poly"
  },
  "Logistic Regression": {
    C: "1",
    solver: "Liblinear"
  },
  "KNN": {
    n_neighbors: "3",
    weights: "Distance",
    metric: "Manhattan"
  }
} as const;

// ROC data for ML models
const mlRocData = [
  { model: "RF", fpr: 0.00, tpr: 0.00 },
  { model: "RF", fpr: 0.01, tpr: 0.94 },
  { model: "RF", fpr: 0.03, tpr: 0.97 },
  { model: "RF", fpr: 0.15, tpr: 0.99 },
  { model: "RF", fpr: 0.40, tpr: 1.00 },
  { model: "RF", fpr: 1.00, tpr: 1.00 },
  { model: "DT", fpr: 0.00, tpr: 0.00 },
  { model: "DT", fpr: 0.05, tpr: 0.85 },
  { model: "DT", fpr: 0.18, tpr: 0.90 },
  { model: "DT", fpr: 0.50, tpr: 0.94 },
  { model: "DT", fpr: 0.85, tpr: 0.97 },
  { model: "DT", fpr: 1.00, tpr: 1.00 },
  { model: "SVM", fpr: 0.00, tpr: 0.00 },
  { model: "SVM", fpr: 0.03, tpr: 0.88 },
  { model: "SVM", fpr: 0.10, tpr: 0.92 },
  { model: "SVM", fpr: 0.30, tpr: 0.96 },
  { model: "SVM", fpr: 0.70, tpr: 0.985 },
  { model: "SVM", fpr: 1.00, tpr: 1.00 },
  { model: "LR", fpr: 0.00, tpr: 0.00 },
  { model: "LR", fpr: 0.02, tpr: 0.93 },
  { model: "LR", fpr: 0.06, tpr: 0.96 },
  { model: "LR", fpr: 0.25, tpr: 0.99 },
  { model: "LR", fpr: 0.55, tpr: 1.00 },
  { model: "LR", fpr: 1.00, tpr: 1.00 },
  { model: "KNN", fpr: 0.00, tpr: 0.00 },
  { model: "KNN", fpr: 0.08, tpr: 0.82 },
  { model: "KNN", fpr: 0.20, tpr: 0.88 },
  { model: "KNN", fpr: 0.55, tpr: 0.92 },
  { model: "KNN", fpr: 0.90, tpr: 0.96 },
  { model: "KNN", fpr: 1.00, tpr: 1.00 },
];

// ML ROC AUC data
const mlResultsRocAuc = [
  { name: 'RF', roc_auc: 0.95 },
  { name: 'DT', roc_auc: 0.88 },
  { name: 'SVM', roc_auc: 0.90 },
  { name: 'LR', roc_auc: 0.95 },
  { name: 'KNN', roc_auc: 0.88 }
];

export default function MachineLearningModels() {
  const [selectedModelNoTuning, setSelectedModelNoTuning] = useState<keyof typeof confusionMatrixDataNoTuning>("Random Forest");
  const [selectedModelWithTuning, setSelectedModelWithTuning] = useState<keyof typeof confusionMatrixDataWithTuning>("Random Forest");
  const [selectedModel, setSelectedModel] = useState<keyof typeof confusionMatrixData>("Random Forest");
  const [selectedBestParamsModel, setSelectedBestParamsModel] = useState<keyof typeof bestParameters>("Random Forest");
  const [showRFE, setShowRFE] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [selectedRocModel, setSelectedRocModel] = useState<string>("RF");
  const [selectedModelRocAuc, setSelectedModelRocAuc] = useState<number | null>(mlResultsRocAuc.find(model => model.name === "RF")?.roc_auc || null);

  const beforeTuningRef = useRef(null);
  const afterTuningRef = useRef(null);
  const splitValidationRef = useRef(null);
  const matrixNoTuningRef = useRef(null);
  const matrixWithTuningRef = useRef(null);
  const matrixRef = useRef(null);

  const beforeTuningInView = useInView(beforeTuningRef, { once: true, amount: 0.2 });
  const afterTuningInView = useInView(afterTuningRef, { once: true, amount: 0.2 });
  const splitValidationInView = useInView(splitValidationRef, { once: true, amount: 0.2 });
  const matrixNoTuningInView = useInView(matrixNoTuningRef, { once: true, amount: 0.2 });
  const matrixWithTuningInView = useInView(matrixWithTuningRef, { once: true, amount: 0.2 });
  const matrixInView = useInView(matrixRef, { once: true, amount: 0.2 });

  const mlRocDataFiltered = mlRocData.filter(item => item.model === selectedRocModel);
  const modelColors: Record<string, string> = {
    "Random Forest": "rgba(99, 102, 241, 0.8)",
    "Decision Tree": "rgba(139, 92, 246, 0.8)",
    "SVM": "rgba(236, 72, 153, 0.8)",
    "Logistic Regression": "rgba(14, 165, 233, 0.8)",
    "KNN": "rgba(255, 107, 107, 0.8)"
  };

  const handleRocModelClick = (modelName: string) => {
    setSelectedRocModel(modelName);
    const rocAucValue = mlResultsRocAuc.find(model => model.name === modelName)?.roc_auc || null;
    setSelectedModelRocAuc(rocAucValue);
  };

  return (
    <div>
      <SectionHeading
        title="Traditional Machine Learning Models"
        subtitle="Performance analysis of five different ML algorithms for PCOS detection"
      />

      {/* Results Before Tuning */}
      <div ref={beforeTuningRef} className="mb-16">
        <GlassCard>
          <h3 className="text-xl font-semibold mb-6">ML Results Before Tuning (K-Fold Cross-Validation)</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={beforeTuningInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={rfeData}
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

      {/* Results After Tuning */}
      <div ref={afterTuningRef} className="mb-16">
        <GlassCard>
          <h3 className="text-xl font-semibold mb-6">ML Results After Tuning (K-Fold Cross-Validation)</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={afterTuningInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mlResultsAfterTuning}
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
                <Bar dataKey="F1" fill="rgba(14, 165, 233, 0.8)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </GlassCard>
      </div>

      {/* Split Validation Results */}
      <div ref={splitValidationRef} className="mb-16">
        <GlassCard>
          <h3 className="text-xl font-semibold mb-6">ML Results (Split Validation)</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={splitValidationInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mlResultsSplitValidation}
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
                <Bar dataKey="F1" fill="rgba(14, 165, 233, 0.8)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </GlassCard>
      </div>

      {/* Confusion Matrix (Cross-validation No Tuning) */}
      <div ref={matrixNoTuningRef} className="mb-16">
        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Confusion Matrix (Cross-validation No Tuning)</h3>
            <div className="flex gap-2">
              {Object.keys(confusionMatrixDataNoTuning).map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedModelNoTuning(model as keyof typeof confusionMatrixDataNoTuning)}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedModelNoTuning === model ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  {model === "Logistic Regression" ? "LR" : model}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={selectedModelNoTuning}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">True Positive</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataNoTuning[selectedModelNoTuning].truePositive}
                </p>
              </div>

              <div className="bg-orange-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">False Positive</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataNoTuning[selectedModelNoTuning].falsePositive}
                </p>
              </div>

              <div className="bg-orange-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">False Negative</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataNoTuning[selectedModelNoTuning].falseNegative}
                </p>
              </div>

              <div className="bg-green-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">True Negative</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataNoTuning[selectedModelNoTuning].trueNegative}
                </p>
              </div>
            </div>
          </motion.div>
        </GlassCard>
      </div>

      {/* Confusion Matrix (Cross-validation With Tuning) */}
      <div ref={matrixWithTuningRef} className="mb-16">
        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Confusion Matrix (Cross-validation With Tuning)</h3>
            <div className="flex gap-2">
              {Object.keys(confusionMatrixDataWithTuning).map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedModelWithTuning(model as keyof typeof confusionMatrixDataWithTuning)}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedModelWithTuning === model ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  {model === "Logistic Regression" ? "LR" : model}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={selectedModelWithTuning}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">True Positive</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataWithTuning[selectedModelWithTuning].truePositive}
                </p>
              </div>

              <div className="bg-orange-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">False Positive</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataWithTuning[selectedModelWithTuning].falsePositive}
                </p>
              </div>

              <div className="bg-orange-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">False Negative</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataWithTuning[selectedModelWithTuning].falseNegative}
                </p>
              </div>

              <div className="bg-green-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">True Negative</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataWithTuning[selectedModelWithTuning].trueNegative}
                </p>
              </div>
            </div>
          </motion.div>
        </GlassCard>
      </div>

      {/* Confusion Matrix (Split Validation with HyperParameter Tuning) */}
      <div ref={matrixRef} className="mb-16">
        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Confusion Matrix (Split Validation with HyperParameter Tuning)</h3>
            <div className="flex gap-2">
              {Object.keys(confusionMatrixData).map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model as keyof typeof confusionMatrixData)}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedModel === model ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  {model === "Logistic Regression" ? "LR" : model}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={selectedModel}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">True Positive</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixData[selectedModel].truePositive}
                </p>
              </div>

              <div className="bg-orange-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">False Positive</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixData[selectedModel].falsePositive}
                </p>
              </div>

              <div className="bg-orange-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">False Negative</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixData[selectedModel].falseNegative}
                </p>
              </div>

              <div className="bg-green-500/20 p-6 rounded-lg text-center">
                <p className="text-sm text-white/80 mb-2">True Negative</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixData[selectedModel].trueNegative}
                </p>
              </div>
            </div>
          </motion.div>
        </GlassCard>
      </div>

      {/* Best Parameters */}
      <div className="mt-16">
        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Best Parameters from Hyperparameter Training</h3>
            <div className="flex gap-2">
              {Object.keys(bestParameters).map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedBestParamsModel(model as keyof typeof bestParameters)}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedBestParamsModel === model ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  {model === "Logistic Regression" ? "LR" : model}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={selectedBestParamsModel}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium mb-4">{selectedBestParamsModel}</h4>
              <ul className="space-y-2 text-sm">
                {Object.entries(bestParameters[selectedBestParamsModel]).map(([param, value]) => (
                  <li key={param} className="flex justify-between">
                    <span className="text-white/70">{param}:</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </GlassCard>
      </div>

      {/* ROC-AUC Curve */}
      <div className="mt-16">
        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">ROC-AUC Curve</h3>
            <div className="flex gap-2">
              {mlResultsRocAuc.map((model) => (
                <button
                  key={model.name}
                  onClick={() => handleRocModelClick(model.name)}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedRocModel === model.name ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  {model.name}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={mlRocDataFiltered}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
              <XAxis dataKey="fpr" stroke="#fff" domain={[0, 1]} label={{ value: 'False Positive Rate', style: { fill: '#fff' }, offset: -5, position: 'insideBottom' }} />
              <YAxis dataKey="tpr" stroke="#fff" domain={[0, 1]} label={{ value: 'True Positive Rate', angle: -90, style: { fill: '#fff' }, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(10, 10, 20, 0.9)', color: '#fff', borderRadius: '8px' }}
                formatter={(value: number, name: string, props: any) => {
                  return [`TPR: ${value}`, `Model: ${name}`];
                }}
              />
              <Legend wrapperStyle={{ color: '#fff' }} />
              <Line
                type="monotone"
                dataKey="tpr"
                stroke={modelColors[selectedRocModel]}
                strokeWidth={2}
                dot={false}
                name={selectedRocModel}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-white/80 mt-2">
            {selectedModelRocAuc !== null ? (
              <span>{selectedRocModel}: ROC-AUC Score: {selectedModelRocAuc}</span>
            ) : (
              mlResultsRocAuc.map(model => (
                <span key={model.name}>
                  {model.name}: ROC-AUC Score: {model.roc_auc} &nbsp;
                </span>
              ))
            )}
          </p>
        </GlassCard>
      </div>
    </div>
  );
}