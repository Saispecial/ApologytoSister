import React from 'react';

interface FloatingTextProps {
  text: string;
  delay?: number;
}

export function FloatingText({ text, delay = 0 }: FloatingTextProps) {
  return (
    <div 
      className="absolute text-2xl font-bold text-purple-400 pointer-events-none"
      style={{
        animation: `float 10s infinite ${delay}s`,
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 80}%`
      }}
    >
      {text}
    </div>
  );
}