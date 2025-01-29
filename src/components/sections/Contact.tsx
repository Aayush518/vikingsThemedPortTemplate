import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Sword, Shield, Axe, Ship } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Sword className="w-8 h-8" />,
      title: "Battle Strategy",
      description: "Let's discuss your project requirements",
      action: "Schedule Call"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Alliance Formation",
      description: "Partner with us for long-term success",
      action: "Form Alliance"
    },
    {
      icon: <Axe className="w-8 h-8" />,
      title: "Quick Strike",
      description: "Need immediate assistance?",
      action: "Strike Now"
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Join the Raid",
      description: "Become part of our warrior clan",
      action: "Join Us"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SectionTitle className="justify-center">Send Ravens</SectionTitle>
            <p className="text-gray-300 text-lg">
              Let us forge alliances and conquer new digital territories together
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg blur opacity-25 group-hover:opacity-75 transition-all duration-300"></div>
                <div className="relative bg-gray-900 p-6 rounded-lg text-center transform group-hover:scale-105 transition-all duration-300 border border-yellow-600/20">
                  <div className="text-yellow-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-norse">{method.title}</h3>
                  <p className="text-gray-400 mb-4">{method.description}</p>
                  <button className="text-yellow-500 font-bold hover:text-yellow-400 transition-colors">
                    {method.action} →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg blur opacity-25"></div>
            <div className="relative bg-gray-900 p-4 sm:p-8 rounded-lg border border-yellow-600/20">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-gray-300 font-norse text-lg">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-300 font-norse text-lg">Your Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label className="text-gray-300 font-norse text-lg">Subject</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700 transition-all duration-300"
                  placeholder="What brings you to our shores?"
                />
              </div>
              <div className="space-y-2 mb-6">
                <label className="text-gray-300 font-norse text-lg">Your Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700 transition-all duration-300"
                  placeholder="Share your tale..."
                ></textarea>
              </div>
              <motion.button 
                className="relative group w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
                <span className="relative block bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg font-norse border border-yellow-600 group-hover:border-yellow-500 transition-all duration-300">
                  Send Message
                </span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};