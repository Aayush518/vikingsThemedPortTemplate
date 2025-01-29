import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  description: string;
  color: string;
  proficiency: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ 
  icon, 
  title, 
  skills, 
  description, 
  color,
  proficiency 
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div 
        className={`absolute inset-0.5 bg-gradient-to-r opacity-75 blur-sm group-hover:opacity-100 transition duration-300 rounded-lg ${color}`}
      />
      
      <div className="relative bg-gray-800 p-6 rounded-lg transform group-hover:scale-[1.02] transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg backdrop-blur-sm" />
        
        <div className="relative z-10">
          <motion.div 
            className="text-yellow-500 mb-4"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          
          <h3 className="text-xl font-bold mb-2 font-norse tracking-wider">{title}</h3>
          <p className="text-gray-400 mb-4 text-sm">{description}</p>
          
          {/* Proficiency Bar */}
          <div className="mb-4">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-400">Mastery</span>
              <span className="text-yellow-500">{proficiency}%</span>
            </div>
          </div>
          
          <ul className="space-y-2">
            {skills.map((skill, idx) => (
              <motion.li 
                key={idx}
                className="flex items-center space-x-2"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="group-hover:text-yellow-500 transition-colors duration-300">
                  {skill}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 rounded-lg border border-yellow-600/20 group-hover:border-yellow-500/50 transition-colors duration-300" />
        </div>
      </div>
    </motion.div>
  );
};