"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export default function Tabs({ 
  tabs, 
  defaultTab, 
  onChange, 
  className 
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };
  
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex overflow-x-auto space-x-1 glass-card p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              "relative px-4 py-2.5 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors",
              activeTab === tab.id 
                ? "text-white" 
                : "text-white/70 hover:text-white hover:bg-white/5"
            )}
          >
            {tab.icon}
            <span>{tab.label}</span>
            
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}