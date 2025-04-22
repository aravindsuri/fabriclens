import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      viewBox="0 0 300 100"
    >
      {/* Background elements representing "fabric" */}
      <rect x="20" y="30" width="40" height="40" rx="5" fill="#0AA58B" opacity="0.9"/>
      <rect x="55" y="20" width="40" height="40" rx="5" fill="#00B294" opacity="0.8"/>
      <rect x="90" y="25" width="40" height="40" rx="5" fill="#4CD2C0" opacity="0.7"/>
      
      {/* Lens element */}
      <circle cx="95" cy="50" r="40" fill="none" stroke="#00B294" strokeWidth="6"/>
      <circle cx="95" cy="50" r="30" fill="none" stroke="#4CD2C0" strokeWidth="3"/>
      <path d="M130 70 L160 100" stroke="#00B294" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
};