import React from 'react';
import { Shield, Sword, Axe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {[Shield, Sword, Axe].map((Icon, index) => (
            <Icon 
              key={index} 
              className="w-6 h-6 text-yellow-500 hover:text-yellow-400 cursor-pointer transform hover:scale-110 transition-all duration-300" 
            />
          ))}
        </div>
        <p className="text-gray-400">
          Forged in the fires of Valhalla © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};