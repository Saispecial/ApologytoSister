import React from 'react';
import { FloatingText } from './FloatingText';
import { AnimatedIcons } from './AnimatedIcons';
import { backgroundWords } from '../constants/background';

export function Background() {
  return (
    <>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10"
        style={{
          animation: 'gradient 15s ease infinite',
          backgroundSize: '400% 400%'
        }}
      />
      
      <AnimatedIcons />
      
      {backgroundWords.map((word, index) => (
        <FloatingText 
          key={word} 
          text={word} 
          delay={index * 0.5} 
        />
      ))}
    </>
  );
}