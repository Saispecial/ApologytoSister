import React from 'react';
import { motion } from 'framer-motion';
import { ForgiveOption } from '../types/game';

interface ForgiveOptionsProps {
  options: ForgiveOption[];
  onSelect: (option: ForgiveOption) => void;
  attempts: number;
}

export function ForgiveOptions({ options, onSelect, attempts }: ForgiveOptionsProps) {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 0, y: 20 },
    animate: { scale: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="grid grid-cols-2 gap-4"
    >
      {options.map((option, index) => (
        <motion.button
          key={index}
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg text-white transition-colors ${
            option.isCorrect ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'
          }`}
          onClick={() => onSelect(option)}
          style={{
            fontSize: `${Math.min(1 + attempts * 0.05, 1.5)}rem`
          }}
        >
          {option.text}
        </motion.button>
      ))}
    </motion.div>
  );
}