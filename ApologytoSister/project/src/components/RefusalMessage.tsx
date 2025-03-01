import React from 'react';
import { motion } from 'framer-motion';

interface RefusalMessageProps {
  message: string;
  attempts: number;
}

export function RefusalMessage({ message, attempts }: RefusalMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        scale: [1, 1.1, 1],
        rotate: [-5, 5, -5, 5, 0],
      }}
      transition={{ duration: 0.5 }}
      className="text-center my-4"
    >
      <p 
        className="text-red-400 font-bold"
        style={{
          fontSize: `${Math.min(1 + attempts * 0.1, 2)}rem`,
          transform: `rotate(${Math.sin(attempts) * 5}deg)`
        }}
      >
        {message}
      </p>
    </motion.div>
  );
}