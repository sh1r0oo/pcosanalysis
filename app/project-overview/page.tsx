"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CircleCheck,
  Microscope,
  Brain,
  FileSpreadsheet,
  ArrowRight,
  Database,
  SlidersHorizontal,
  CheckCircle2,
  ListChecks,
  Zap,
  Layers3,
  Activity,
  BarChart,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const Flowchart = () => {
  const flowchartRef = useRef(null);
  const flowchartInView = useInView(flowchartRef, { once: true, amount: 0.2 });

  const arrowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const sectionSpacing = 40;

  return (
    <div ref={flowchartRef} className="mb-20">
      <SectionHeading
        title="Overall System Design"
        subtitle="Flowchart of the PCOS detection system using machine learning and deep learning"
        align="center"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={flowchartInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <GlassCard className="p-6">
          <div className="space-y-8">
            {/* Dataset */}
            <GlassCard className="p-4 w-[250px] mx-auto">
              <div className="flex flex-col items-center gap-4">
                <Database className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-semibold text-white text-center">
                  Dataset
                </span>
              </div>
            </GlassCard>

            {/* Downward Arrow */}
            <motion.div
              variants={arrowVariants}
              initial="hidden"
              animate={flowchartInView ? "visible" : "hidden"}
              className="flex justify-center"
              style={{ marginTop: sectionSpacing, marginBottom: sectionSpacing }}
            >
              <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
            </motion.div>

            {/* Data Pre-processing */}
            <GlassCard className="p-4 w-[250px] mx-auto">
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2 text-center">
                  <SlidersHorizontal className="h-6 w-6 text-purple-400" />
                  Data Pre-processing
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">Missing Data Handling</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">
                      Normalization of Dataset
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">
                      SMOTE to balance the dataset
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Downward Arrow */}
            <motion.div
              variants={arrowVariants}
              initial="hidden"
              animate={flowchartInView ? "visible" : "hidden"}
              className="flex justify-center"
              style={{ marginTop: sectionSpacing, marginBottom: sectionSpacing }}
            >
              <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
            </motion.div>

            {/* Feature Selection */}
            <GlassCard className="p-4 w-[250px] mx-auto">
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2 text-center">
                  <ListChecks className="h-6 w-6 text-yellow-400" />
                  Feature Selection
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">RFE</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">SelectKBest with MI</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Downward Arrow */}
            <motion.div
              variants={arrowVariants}
              initial="hidden"
              animate={flowchartInView ? "visible" : "hidden"}
              className="flex justify-center"
              style={{ marginTop: sectionSpacing, marginBottom: sectionSpacing }}
            >
              <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
            </motion.div>

            {/* Validation Techniques */}
            <GlassCard className="p-4 w-[250px] mx-auto">
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2 text-center">
                  <Activity className="h-6 w-6 text-pink-400" />
                  Validation Techniques
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">
                      K-Fold Cross Validation Technique
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">
                      Split Validation Technique
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Downward Arrow */}
            <motion.div
              variants={arrowVariants}
              initial="hidden"
              animate={flowchartInView ? "visible" : "hidden"}
              className="flex justify-center"
              style={{ marginTop: sectionSpacing, marginBottom: sectionSpacing }}
            >
              <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
            </motion.div>

            {/* Running the Model */}
            <GlassCard className="p-4 w-[250px] mx-auto">
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2 text-center">
                  <Zap className="h-6 w-6 text-orange-400" />
                  Running the Model
                </h3>
                <div className="flex gap-12">
                  {/* ML Models */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-white/90 text-center">
                      ML Models
                    </h4>
                    <div className="space-y-2">
                      <span className="text-white/80 flex items-center justify-center gap-2">
                        <CircleCheck className="h-4 w-4 text-blue-400" />
                        RF
                      </span>
                      <span className="text-white/80 flex items-center justify-center gap-2">
                        <CircleCheck className="h-4 w-4 text-blue-400" />
                        DT
                      </span>
                      <span className="text-white/80 flex items-center justify-center gap-2">
                        <CircleCheck className="h-4 w-4 text-blue-400" />
                        SVM
                      </span>
                      <span className="text-white/80 flex items-center justify-center gap-2">
                        <CircleCheck className="h-4 w-4 text-blue-400" />
                        LR
                      </span>
                      <span className="text-white/80 flex items-center justify-center gap-2">
                        <CircleCheck className="h-4 w-4 text-blue-400" />
                        KNN
                      </span>
                    </div>
                  </div>

                  {/* DL Models */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-white/90 text-center">
                      DL Models
                    </h4>
                    <div className="space-y-2">
                      <span className="text-white/80 flex items-center justify-center gap-2">
                        <CircleCheck className="h-4 w-4 text-blue-400" />
                        FNN
                      </span>
                      <span className="text-white/80 flex items-center justify-center gap-2">
                        <CircleCheck className="h-4 w-4 text-blue-400" />
                        CNN
                      </span>
                      <span className="text-white/80 flex items-center justify-center gap-2">
                        <CircleCheck className="h-4 w-4 text-blue-400" />
                        LSTM
                      </span>
                      <span className="text-white/80 flex items-center justify-center gap-2">
                        <CircleCheck className="h-4 w-4 text-blue-400" />
                        MLP
                      </span>
                      <span className="text-white/80 flex items-center justify-center gap-2">
                        <CircleCheck className="h-4 w-4 text-blue-400" />
                        GRU
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Downward Arrow */}
            <motion.div
              variants={arrowVariants}
              initial="hidden"
              animate={flowchartInView ? "visible" : "hidden"}
              className="flex justify-center"
              style={{ marginTop: sectionSpacing, marginBottom: sectionSpacing }}
            >
              <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
            </motion.div>

            {/* Evaluation Metrics */}
            <GlassCard className="p-4 w-[250px] mx-auto">
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2 text-center">
                  <BarChart className="h-6 w-6 text-emerald-400" />
                  Evaluation Metrics
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">Accuracy</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">Precision</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">Recall</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">F1-Score</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white/90">ROC-AUC</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default function ProjectOverview() {
  const abstractRef = useRef(null);
  const objectivesRef = useRef(null);
  const methodologyRef = useRef(null);

  const abstractInView = useInView(abstractRef, { once: true, amount: 0.2 });
  const objectivesInView = useInView(objectivesRef, {
    once: true,
    amount: 0.2,
  });
  const methodologyInView = useInView(methodologyRef, {
    once: true,
    amount: 0.2,
  });

  const objectives = [
    "Develop a robust model for diagnosing PCOS using advanced AI techniques, leveraging both machine learning (ML) and deep learning (DL) algorithms.",
    "Explore and evaluate various ML algorithms (Random Forest, Decision Tree, SVM, Logistic Regression, KNN) and deep learning models (FNN, 1D-CNN, LSTM, GRU, MLP) for PCOS detection.",
    "Prepare and preprocess data by normalizing it and addressing class imbalance using Synthetic Minority Over-sampling Technique (SMOTE).",
    "Implement feature selection techniques such as Recursive Feature Elimination (RFE) and SelectKBest to enhance model accuracy.",
    "Optimize model performance through k-fold cross-validation, hyperparameter tuning with GridSearchCV, and split validation, aiming to achieve high accuracy and precision.",
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading
        title="Project Overview"
        subtitle="A comprehensive analysis of machine learning and deep learning approaches to PCOS detection"
        align="center"
      />

      {/* Abstract Section */}
      <div ref={abstractRef} className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={abstractInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Microscope className="h-6 w-6 text-blue-400" />
              Abstract
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed text-justify">
              <p>
                Polycystic Ovary Syndrome (PCOS) stands as one of the most
                harmful endocrine disorders among women in their reproductive
                years with complications ranging from infertility to metabolic
                irregularities and cardiovascular risks. Timely and accurate
                diagnosis of PCOS is very important for effective intervention,
                yet conventional diagnostic approaches often stumble due to their
                dependence on subjective assessments and inconsistent accuracy.
              </p>
              <p>
                This study delves into the potential of different machine
                learning (ML) and deep learning (DL) methodologies to refine PCOS
                detection, by using a dataset consisting of 541 patients and
                their 41 clinical and physical attributes. A bunch of ML models
                was defined and evaluated, including Random Forest (RF), Decision
                Tree (DT), Support Vector Machine (SVM), Logistic Regression
                (LR), and K-Nearest Neighbors (KNN), alongside DL frameworks
                such as Feedforward Neural Networks (FNN), Convolutional Neural
                Networks (CNN), Long Short-Term Memory (LSTM), Gated Recurrent Units (GRU), and
                Multilayer Perceptrons (MLP).
              </p>
              <p>
                The dataset was preprocessed employing median imputation to
                handle the missing values, MinMax normalization for scaling, and
                Synthetic Minority Oversampling Technique (SMOTE) to rectify
                class imbalances. Feature selection was implemented using
                Recursive Feature Elimination (RFE) and SelectKBest, while
                hyperparameter optimization was done through GridSearchCV and
                Keras Tuner.
              </p>
              <p>
                The results show that RF outperformed its ML counterparts,
                attaining an accuracy of 97.26% via split validation. In the DL
                domain, FNN soared to an accuracy of 98.48%, achieving the total
                high score. However, the study also exposed the limitations of
                certain models, such as DT and KNN, which underperformed despite
                different optimizations. Moreover, DL architectures like
                LSTM and GRU exhibited erratic validation accuracy, hinting
                at inherent challenges in achieving consistent generalization.
              </p>
              <p>
                This research illuminates the promise of ML and DL models,
                particularly RF and FNN, in revolutionizing PCOS diagnosis,
                presenting a formidable alternative to traditional diagnostic
                paradigms. Future endeavors will focus on broadening the
                dataset, refining feature engineering strategies, and
                incorporating ensemble techniques to amplify model efficacy and
                adaptability.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Objectives Section */}
      <div ref={objectivesRef} className="mb-16">
        <SectionHeading
          title="Research Objectives"
          subtitle="Key goals guiding our comprehensive approach to PCOS detection research"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={objectivesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={objectivesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex items-start gap-4">
                <div className="mt-1">
                  <CircleCheck className="h-5 w-5 text-green-400" />
                </div>
                <p className="text-white/90 text-left">{objective}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Methodology Section */}
      <div ref={methodologyRef}>
        <SectionHeading
          title="Methodology & System Architecture"
          subtitle="Our systematic approach to developing and evaluating PCOS detection models"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={methodologyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-purple-400" />
                  Data Processing Pipeline
                </h3>
                <ul className="space-y-3 text-white/80 text-left">
                  <li className="flex items-start gap-2">
                    <span className="bg-white/10 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>
                      Dataset collection with 41 clinical features from 541
                      patients
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/10 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>
                      Preprocessing: normalization, standardization, and outlier
                      handling
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/10 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>
                      Feature selection using RFE and SelectKBest with
                      chi-squared test
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/10 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <span>Class imbalance correction using SMOTE technique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/10 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      5
                    </span>
                    <span>Data splitting: 80% training, 20% validation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-blue-400" />
                  Model Development
                </h3>
                <ul className="space-y-3 text-white/80 text-left">
                  <li className="flex items-start gap-2">
                    <span className="bg-white/10 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>
                      Implementation of 5 traditional ML algorithms (RF, SVM, KNN,
                      DT, LR)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/10 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>
                      Development of 5 DL architectures (FNN, CNN, LSTM, GRU,
                      MLP)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/10 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>
                      Hyperparameter tuning using grid search and
                      cross-validation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/10 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <span>Early stopping and dropout layers to prevent overfitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-white/10 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      5
                    </span>
                    <span>Comprehensive evaluation using multiple performance metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
      <Flowchart />
    </div>
  );
}