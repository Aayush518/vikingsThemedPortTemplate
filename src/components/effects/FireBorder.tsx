import React from 'react';
import { motion } from 'framer-motion';

export const FireBorder: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(202,138,4,0.1)_50%,_transparent_100%)]" />
    </div>
  );
};