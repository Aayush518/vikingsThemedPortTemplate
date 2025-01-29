import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`text-4xl font-bold mb-6 font-norse relative inline-block ${className}`}>
      {children}
      <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-yellow-600"></span>
    </h2>
  );
};