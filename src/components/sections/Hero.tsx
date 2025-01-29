import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ParticleRunes } from '../effects/ParticleRunes';
import { Shield, Sword, Axe } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(202,138,4,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 via-transparent to-gray-900/50" />
      </div>
      
      <ParticleRunes />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Floating Icons */}
          <div className="relative mb-8">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 flex justify-center gap-8 opacity-50"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {[Shield, Sword, Axe].map((Icon, index) => (
                <Icon
                  key={index}
                  className="w-8 h-8 text-yellow-500 transform rotate-12"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              ))}
            </motion.div>
          </div>

          {/* Title with Gradient Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg blur-lg opacity-75"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-norse tracking-wide bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-gradient">
              RAGNAR'S LEGACY
            </h1>
          </motion.div>

          {/* Description with Stagger Animation */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-norse"
          >
            The saga of a warrior, coded in the ancient runes of modern technology
          </motion.p>

          {/* Enhanced Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-800 animate-gradient" />
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative text-white font-bold text-lg">
                View Conquests
              </span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 rounded-lg border-2 border-yellow-600 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative text-white font-bold text-lg">
                Send Ravens
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 8, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center space-y-2 text-yellow-500 hover:text-yellow-400 transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-sm font-norse">Begin Journey</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </header>
  );
};