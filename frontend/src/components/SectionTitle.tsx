import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-primary-green mb-4">{title}</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
};
