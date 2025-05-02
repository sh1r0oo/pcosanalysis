"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Book, Link2 } from "lucide-react";

export default function ReferencesPage() {
  const references = [
    {
      title: "Polycystic ovary syndrome",
      authors: "Azziz, R., et al.",
      journal: "Nature Publishing Group",
      year: 2016,
      doi: "10.1038/nrdp.2016.57"
    },
    {
      title: "Cardiovascular risk in women with polycystic ovary syndrome",
      authors: "Giallauria, F., et al.",
      journal: "Journal of Cardiovascular Medicine",
      year: 2008,
      doi: "10.2459/JCM.0b013e32830b58d4"
    },
    {
      title: "Insulin resistance and the polycystic ovary syndrome revisited",
      authors: "Diamanti-Kandarakis, E., & Dunaif, A.",
      journal: "Endocrine Reviews",
      year: 2012,
      doi: "10.1210/er.2011-1034"
    },
    {
      title: "The prevalence and phenotypic features of polycystic ovary syndrome",
      authors: "Bozdag, G., et al.",
      journal: "Human Reproduction",
      year: 2016,
      doi: "10.1093/humrep/dew218"
    },
    {
      title: "Polycystic ovary syndrome",
      authors: "Joham, A. E., et al.",
      journal: "Lancet Diabetes Endocrinology",
      year: 2022,
      doi: "10.1016/S2213-8587(22)00163-2"
    },
    {
      title: "Diagnosis and treatment of polycystic ovary syndrome",
      authors: "Legro, R. S., et al.",
      journal: "Journal of Clinical Endocrinology & Metabolism",
      year: 2013,
      doi: "10.1210/jc.2013-2350"
    },
    {
      title: "Quantification of visceral adipose tissue in PCOS",
      authors: "Frøssing, S., et al.",
      journal: "Acta Radiologica",
      year: 2018,
      doi: "10.1177/0284185117711475"
    },
    {
      title: "PCOcare: PCOS Detection using Machine Learning",
      authors: "Thakre, V.",
      journal: "Biosci Biotechnol Res Commun",
      year: 2020,
      doi: "10.21786/bbrc/13.14/56"
    },
    {
      title: "A classification of PCOS based on follicle detection",
      authors: "Purnama, B., et al.",
      journal: "IEEE International Conference on Information and Communication Technology",
      year: 2015,
      doi: "10.1109/ICoICT.2015.7231458"
    },
    {
      title: "Machine Learning Classification for PCOS Prediction",
      authors: "Dutta, P., et al.",
      journal: "Research Square",
      year: 2021,
      doi: "10.21203/rs.3.rs-1043852/v1"
    },
    {
      title: "CNN for PCOS Disease Detection",
      authors: "Sumathi, M., et al.",
      journal: "IOP Conference Series",
      year: 2021,
      doi: "10.1088/1757-899X/1070/1/012062"
    },
    {
      title: "CNN on PCO Classification from Ultrasound Images",
      authors: "Cahyono, B., et al.",
      journal: "IEEE International Conference on Information and Communication Technology",
      year: 2017,
      doi: "10.1109/ICoICT.2017.8074702"
    },
    {
      title: "Machine Learning Algorithms for PCOS Diagnosis",
      authors: "Bharati, S., et al.",
      journal: "IEEE Region 10 Symposium",
      year: 2020,
      doi: "10.1109/TENSYMP50017.2020.9230932"
    },
    {
      title: "Machine Learning for PCOS Detection",
      authors: "Hdaib, D., et al.",
      journal: "International Conference on Engineering Technology",
      year: 2022,
      doi: "10.1109/IICETA54559.2022.9888677"
    },
    {
      title: "SMOTE-Based PCOS Prediction using Deep Learning",
      authors: "Ahmad, R., et al.",
      journal: "Diagnostics",
      year: 2024,
      doi: "10.3390/diagnostics14192225"
    }
  ];

  return (
    <div className="mt-20 mb-20">
      <SectionHeading 
        title="Research References" 
        subtitle="Academic sources and citations supporting our PCOS detection research" 
        align="center"
      />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4"
        >
          {references.map((ref, index) => (
            <GlassCard key={index} className="p-6 hover:scale-105 transition-transform duration-300 h-full flex flex-col min-h-[300px]">
              <div className="flex items-start gap-4 mb-4">
                <Book className="h-8 w-8 text-blue-400 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">{ref.title}</h3>
              </div>
              <div className="space-y-3 flex-grow">
                <p className="text-white/80"><strong>Authors:</strong> {ref.authors}</p>
                <p className="text-white/80"><strong>Journal:</strong> {ref.journal}</p>
                <p className="text-white/80"><strong>Year:</strong> {ref.year}</p>
                <div className="flex items-center gap-2 mt-4 overflow-hidden">
                  <Link2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <a 
                    href={`https://doi.org/${ref.doi}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-300 hover:underline truncate max-w-full block"
                  >
                    DOI: {ref.doi}
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    );
}
