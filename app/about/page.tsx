"use client";

import { motion } from "framer-motion";
import { 
  MicroscopeIcon, 
  GraduationCap, 
  Users, 
  School, 
  Calendar
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  // Team members data
  const teamMembers = [
    {
      name: "Khandaker Adeba Tabassum",
      title: "Lead Researcher",
      photo: "public/images/team/adeba.jpg",
      university: "Islamic University Of Technology",
      id: "200021102"
    },
    {
      name: "Sadat Al Rashad",
      title: "Clinical Advisor",
      photo: "public/images/team/sadat.jpg",
       university: "Islamic University Of Technology",
      id: "200021106"
    },
    {
      name: "Md. Nazmul Aman",
      title: "Data Scientist",
      photo: "public/images/team/nazmul.jpg",
       university: "Islamic University Of Technology",
      id: "200021132"
    },
  ];

  const displayedMembers = teamMembers.slice(0, 3);
  
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          title="About the Research Team"
          subtitle="Meet the interdisciplinary group behind the PCOS detection research project"
          align="center"
        />
        
        {/* Team Members */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Meet Our Team</h3>
          
          <div className="flex gap-6 justify-center">
            {displayedMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="aspect-[3/5] w-80 flex flex-col items-center justify-center p-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-center">{member.name}</h4>
                  <p className="text-sm text-white/70 text-center">{member.university}</p>
                  <p className="text-sm text-white/70 text-center">{member.id}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Acknowledgments */}
        <div className="mt-8 p-4 bg-blue-500/10 rounded-lg">
          <h4 className="text-xl font-semibold text-center mb-2">Acknowledgments</h4>
          <p className="text-white/80 text-sm leading-relaxed">
            We extend our gratitude to the participants who contributed to this study and the anonymous reviewers who provided valuable feedback on our research methodology. Special thanks to our supervisor, Arefin Rabbi Emon, Lecturer, IUT, for his guidance and support throughout the project. We also thank the Department of Computational Medicine for providing computational resources and technical support.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
