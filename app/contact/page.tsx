"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { 
  Mail, 
  Send, 
  FileText, 
  Github, 
  MapPin, 
  Phone
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<ContactFormData>();
  
  const onSubmit = (data: ContactFormData) => {
    // In a real implementation, this would send the form data to a backend
    console.log(data);
    setIsSubmitted(true);
    reset();
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          title="Contact & Resources"
          subtitle="Get in touch with our research team and access project resources"
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <GlassCard className="h-full">
              <h3 className="text-xl font-semibold mb-6">Research Team Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-full mt-1">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-white/80">pcos.research@medical-center.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-full mt-1">
                    <Phone className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-full mt-1">
                    <MapPin className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-white/80">
                      Division of Computational Medicine<br />
                      University Medical Research Center<br />
                      123 Innovation Drive<br />
                      Cambridge, MA 02139
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Resources</h3>
                
                <div className="space-y-4">
                  <a 
                    href="/files/pcos-research-report.pdf" 
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg"
                  >
                    <FileText className="h-5 w-5 text-purple-400" />
                    <span>Download Full Research Report</span>
                  </a>
                  
                  <a 
                    href="https://github.com/pcos-research/ml-dl-models" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg"
                  >
                    <Github className="h-5 w-5 text-white" />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 p-6 rounded-lg text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-500/30 p-3 rounded-full">
                      <Send className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Message Sent Successfully!</h4>
                  <p className="text-white/80">
                    Thank you for reaching out. A member of our research team will respond to your inquiry shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-400' : 'border-white/20'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                        placeholder="Enter your name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full bg-white/5 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                        placeholder="Enter your email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`w-full bg-white/5 border ${errors.subject ? 'border-red-400' : 'border-white/20'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                      placeholder="What is your message about?"
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-400' : 'border-white/20'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none`}
                      placeholder="Type your message here..."
                      {...register("message", { 
                        required: "Message is required",
                        minLength: {
                          value: 20,
                          message: "Message must be at least 20 characters"
                        }
                      })}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <GlassButton type="submit" className="w-full md:w-auto">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Message
                    </GlassButton>
                  </div>
                </form>
              )}
              
              <div className="mt-8 p-4 bg-blue-500/10 rounded-lg">
                <h4 className="font-medium mb-2">Research Collaboration</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Interested in collaborating on future PCOS detection research? We welcome inquiries from fellow researchers, healthcare institutions, and industry partners. Please mention "Research Collaboration" in your message subject for priority routing.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
        
        {/* FAQ Section */}
        <GlassCard>
          <h3 className="text-xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="font-medium mb-2">How can I access the models used in this research?</h4>
              <p className="text-white/80 leading-relaxed">
                The models, training scripts, and documentation are available in our GitHub repository. For access to pre-trained models or specific implementations, please contact our research team directly.
              </p>
            </div>
            
            <div className="border-b border-white/10 pb-6">
              <h4 className="font-medium mb-2">Is the dataset used in this study publicly available?</h4>
              <p className="text-white/80 leading-relaxed">
                A de-identified version of the dataset is available for academic research purposes upon request. Researchers must complete a data use agreement to ensure compliance with privacy regulations and ethical guidelines.
              </p>
            </div>
            
            <div className="border-b border-white/10 pb-6">
              <h4 className="font-medium mb-2">Can these models be implemented in clinical practice?</h4>
              <p className="text-white/80 leading-relaxed">
                While our models show promising results, clinical implementation requires additional validation, regulatory approval, and integration with existing healthcare systems. We are currently working with partner institutions on pilot implementations.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Are you accepting research interns or collaborators?</h4>
              <p className="text-white/80 leading-relaxed">
                Yes, we periodically offer research internships for graduate students in related fields. For collaboration opportunities, please send a detailed proposal through our contact form or email directly to our research coordinator.
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}