"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";

const dlResults = [
  { name: 'FNN', Accuracy: 98, Precision: 98, Recall: 98, F1Score: 98, ROC_AUC: 98 },
  { name: 'CNN', Accuracy: 94, Precision: 94, Recall: 94, F1Score: 94, ROC_AUC: 98 },
  { name: 'LSTM CNN', Accuracy: 95, Precision: 95, Recall: 95, F1Score: 95, ROC_AUC: 98 },
  { name: 'GRU', Accuracy: 90, Precision: 90, Recall: 90, F1Score: 90, ROC_AUC: 97 },
  { name: 'MLP', Accuracy: 92.47, Precision: 93.06, Recall: 91.78, F1Score: 92.41, ROC_AUC: 98.16 }
];

const dlResultsRocAuc = [
  { name: 'FNN', roc_auc: 0.97 },
  { name: 'CNN', roc_auc: 0.95 },
  { name: 'LSTM', roc_auc: 0.96 },
  { name: 'GRU', roc_auc: 0.94 },
  { name: 'MLP', roc_auc: 0.96 }
];

// Restructured ROC data
const rocData = [
    { model: "FNN", fpr: 0.00, tpr: 0.00 },
    { model: "FNN", fpr: 0.01, tpr: 0.95 },
    { model: "FNN", fpr: 0.02, tpr: 0.98 },
    { model: "FNN", fpr: 0.10, tpr: 0.99 },
    { model: "FNN", fpr: 0.50, tpr: 1.00 },
    { model: "FNN", fpr: 1.00, tpr: 1.00 },
    { model: "CNN", fpr: 0.00, tpr: 0.00 },
    { model: "CNN", fpr: 0.05, tpr: 0.90 },
    { model: "CNN", fpr: 0.10, tpr: 0.95 },
    { model: "CNN", fpr: 0.30, tpr: 0.97 },
    { model: "CNN", fpr: 0.70, tpr: 0.985 },
    { model: "CNN", fpr: 1.00, tpr: 1.00 },
    { model: "LSTM", fpr: 0.00, tpr: 0.00 },
    { model: "LSTM", fpr: 0.04, tpr: 0.92 },
    { model: "LSTM", fpr: 0.08, tpr: 0.97 },
    { model: "LSTM", fpr: 0.20, tpr: 0.99 },
    { model: "LSTM", fpr: 0.60, tpr: 1.00 },
    { model: "LSTM", fpr: 1.00, tpr: 1.00 },
    { model: "GRU", fpr: 0.00, tpr: 0.00 },
    { model: "GRU", fpr: 0.06, tpr: 0.90 },
    { model: "GRU", fpr: 0.15, tpr: 0.92 },
    { model: "GRU", fpr: 0.40, tpr: 0.95 },
    { model: "GRU", fpr: 0.80, tpr: 0.98 },
     { model: "GRU", fpr: 1.00, tpr: 1.00 },
    { model: "MLP", fpr: 0.00, tpr: 0.00 },
    { model: "MLP", fpr: 0.05, tpr: 0.91 },
    { model: "MLP", fpr: 0.12, tpr: 0.94 },
    { model: "MLP", fpr: 0.35, tpr: 0.96 },
    { model: "MLP", fpr: 0.75, tpr: 0.985 },
    { model: "MLP", fpr: 1.00, tpr: 1.00 }
];

const confusionMatrixDataWithTuning = {
  "FNN": {
    "truePositive": 51,
    "falsePositive": 1,
    "falseNegative": 1,
    "trueNegative": 63
  },
  "CNN": {
    "truePositive": 70,
    "falsePositive": 6,
    "falseNegative": 3,
    "trueNegative": 67
  },
  "LSTM CNN": {
    "truePositive": 71,
    "falsePositive": 6,
    "falseNegative": 2,
    "trueNegative": 67
  },
   "GRU": {
    "truePositive": 66,
    "falsePositive": 8,
    "falseNegative": 7,
    "trueNegative": 65
  },
  "MLP": {
    "truePositive": 67,
    "falsePositive": 5,
    "falseNegative": 6,
    "trueNegative": 68
  }
} as const;

const bestParameters = {
  "FNN": {
    "model__dropout_1": 0.2,
    "model__dropout_2": 0.2,
    "model__dropout_3": 0.2,
    "model__dropout_4": 0.2
  },
  "CNN": {
    "model__neurons": 64,
    "model__filters": 64,
    "model__dropout_rate": 0.4
  },
  "GRU": {
    "units_1": 96,
    "dropout_1": 0.2,
    "units_2": 128,
    "dropout_2": 0.4,
     "units_3": 48,
    "dropout_3": 0.5,
    "units_4": 16,
    "dropout_4": 0.2
  },
  "MLP": {
    "activation": "tanh",
    "hidden_layer_sizes": "(64, 32)",
    "solver": "adam"
  }
} as const;

type ModelName = keyof typeof confusionMatrixDataWithTuning;

const modelColors: { [key: string]: string } = {
  "FNN": "rgba(99, 102, 241, 0.8)",
  "CNN": "rgba(139, 92, 246, 0.8)",
  "LSTM": "rgba(236, 72, 153, 0.8)",
  "GRU": "rgba(14, 165, 233, 0.8)",
  "MLP": "rgba(255, 107, 107, 0.8)"
};

export default function DeepLearningModels() {
  const [selectedModel, setSelectedModel] = useState("fnn");
  const [selectedDLModelWithTuning, setSelectedDLModelWithTuning] = useState<ModelName>("FNN");
  const [selectedRocModel, setSelectedRocModel] = useState<string>("FNN");
  const [selectedModelRocAuc, setSelectedModelRocAuc] = useState<number | null>(dlResultsRocAuc.find(model => model.name === "FNN")?.roc_auc || null);
  const [selectedBestParamsModel, setSelectedBestParamsModel] = useState<keyof typeof bestParameters>("FNN");

  const rocDataFiltered = rocData.filter(item => item.model === selectedRocModel);

  const handleRocModelClick = (modelName: string) => {
    setSelectedRocModel(modelName);
    const rocAucValue = dlResultsRocAuc.find(model => model.name === modelName)?.roc_auc || null;
    setSelectedModelRocAuc(rocAucValue);
  };

  const handleBestParamsModelClick = (modelName: keyof typeof bestParameters) => {
    setSelectedBestParamsModel(modelName);
  };

  return (
    <div className="w-full space-y-8">
       <GlassCard>
           <h3 className="text-xl font-semibold mb-6">DL Results</h3>
           <ResponsiveContainer width="100%" height={400}>
             <BarChart
               data={dlResults}
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
         </GlassCard>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Deep Learning Models</h3>
        <div className="flex gap-2">
          {["fnn", "cnn", "lstm", "gru"].map((model) => (
            <button
              key={model}
              onClick={() => setSelectedModel(model)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedModel === model ? "bg-white/20" : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {model.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
          <Image
            src={`/images/training-accuracy/${selectedModel}-training.png`}
            alt={`${selectedModel.toUpperCase()} Training and Validation Accuracy`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Confusion Matrix*/}
      <div className="mb-16">
        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Confusion Matrix</h3>
            <div className="flex gap-2">
              {(Object.keys(confusionMatrixDataWithTuning) as ModelName[]).map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedDLModelWithTuning(model)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedDLModelWithTuning === model ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={selectedDLModelWithTuning}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              type: "spring", 
              stiffness: 100, 
              damping: 10,
              staggerChildren: 0.1
            }}
            className="max-w-xl mx-auto"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-green-500/20 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-white/80 mb-2">True Positive</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataWithTuning[selectedDLModelWithTuning].truePositive}
                </p>
              </motion.div>

              <motion.div 
                className="bg-orange-500/20 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <p className="text-sm text-white/80 mb-2">False Positive</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataWithTuning[selectedDLModelWithTuning].falsePositive}
                </p>
              </motion.div>

              <motion.div 
                className="bg-orange-500/20 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <p className="text-sm text-white/80 mb-2">False Negative</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataWithTuning[selectedDLModelWithTuning].falseNegative}
                </p>
              </motion.div>

              <motion.div 
                className="bg-green-500/20 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <p className="text-sm text-white/80 mb-2">True Negative</p>
                <p className="text-3xl font-bold text-white">
                  {confusionMatrixDataWithTuning[selectedDLModelWithTuning].trueNegative}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </GlassCard>
      </div>

      {/* ROC-AUC Curve */}
       <div className="mb-16">
        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">ROC-AUC Curve</h3>
             <div className="flex gap-2">
              {dlResultsRocAuc.map((model) => (
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
              data={rocDataFiltered}
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
              dlResultsRocAuc.map(model => (
                <span key={model.name}>
                  {model.name}: ROC-AUC Score: {model.roc_auc} &nbsp;
                </span>
              ))
            )}
          </p>
        </GlassCard>
      </div>
        {/* Best Parameters */}
        <div className="mt-16">
          <GlassCard>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Best Parameters from Hyperparameter Training</h3>
              <div className="flex gap-2">
                {(Object.keys(bestParameters) as Array<keyof typeof bestParameters>).map((model) => (
                  <button
                    key={model}
                    onClick={() => handleBestParamsModelClick(model)}
                    className={`px-4 py-2 rounded-lg transition-colors ${selectedBestParamsModel === model ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'}`}
                  >
                    {model}
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
    </div>
  );
}