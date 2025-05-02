"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      photo: "/images/team/adeba.jpg",
      university: "Islamic University Of Technology",
      id: "200021102"
    },
    {
      name: "Sadat Al Rashad",
      photo: "/images/team/sadat.jpg",
      university: "Islamic University Of Technology",
      id: "200021106"
    },
    {
      name: "Md. Nazmul Aman",
      photo: "/images/team/nazmul.jpg",
      university: "Islamic University Of Technology",
      id: "200021132"
    },
  ];

  const displayedMembers = teamMembers.slice(0, 3);
  
  // Supervisor data
  const supervisor = {
    name: "Md. Arefin Rabbi Emon",
    title: "Lecturer",
    department: "Department of Electrical and Electronic Engineering",
    university: "Islamic University of Technology",
    photo: "https://eee.iutoic-dhaka.edu/uploads/img/1669798959_1344.jpg"
  };
  
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
        
        {/* Supervisor Section */}
        <div className="mt-16">
          <SectionHeading
            title="Project Supervisor"
            subtitle="Guiding our research with expertise and vision"
            align="center"
          />
          <div className="max-w-2xl mx-auto mt-10">
            <GlassCard>
              <motion.div 
                className="flex flex-col md:flex-row items-center p-8 space-y-6 md:space-y-0 md:space-x-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 flex-shrink-0">
                  <Image 
                    src={supervisor.photo} 
                    alt={supervisor.name} 
                    width={192} 
                    height={192} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center w-full">
                  <h3 className="text-2xl font-semibold text-white mb-2">{supervisor.name}</h3>
                  <p className="text-white/80 mb-3 text-lg">{supervisor.title}</p>
                  <div className="text-white/70 space-y-2">
                    <div className="flex items-center justify-center">
                      <School className="w-5 h-5 mr-2" />
                      <span>{supervisor.department}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Users className="w-5 h-5 mr-2" />
                      <span>{supervisor.university}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </GlassCard>
          </div>
        </div>

        {/* Team Members */}
        <div className="mt-16">
          <SectionHeading
            title="Our Research Team"
            subtitle="Dedicated researchers working to advance PCOS detection"
            align="center"
          />
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
                  <h4 className="text-lg font-semibold text-center">{member.name}</h4>
                  <p className="text-base text-white/70 text-center">{member.university}</p>
                  <p className="text-base text-white/70 text-center">{member.id}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Acknowledgments */}
        <div className="mt-8 p-4 bg-blue-500/10 rounded-lg">
          <h4 className="text-2xl font-semibold text-center mb-4">Acknowledgments</h4>
          <p className="text-white/80 text-base leading-relaxed">
            We extend our gratitude to the participants who contributed to this study and the anonymous reviewers who provided valuable feedback on our research methodology. Special thanks to our supervisor, Arefin Rabbi Emon, Lecturer, IUT, for his guidance and support throughout the project. We also thank the Department of Computational Medicine for providing computational resources and technical support.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
