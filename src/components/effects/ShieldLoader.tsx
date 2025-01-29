import React from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const ShieldLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <Shield className="w-16 h-16 text-yellow-600" />
        <motion.div
          className="absolute inset-0 border-4 border-yellow-500 rounded-full"
          animate={{
            scale: [1, 1.5],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.div>
    </div>
  );
};