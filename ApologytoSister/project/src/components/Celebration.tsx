import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles, Gift } from 'lucide-react';

interface CelebrationProps {
  onReset: () => void;
}

export function Celebration({ onReset }: CelebrationProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="text-center space-y-6"
    >
      <motion.h2
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-3xl font-bold text-purple-300"
      >
        Thank You Shivani! 🎉
      </motion.h2>
      <p className="text-purple-400">Best brother-sister duo forever! 💜</p>
      <div className="flex justify-center space-x-4">
        {[Heart, Star, Sparkles, Gift].map((Icon, index) => (
          <motion.div
            key={index}
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              delay: index * 0.2 
            }}
          >
            <Icon className="w-8 h-8 text-purple-400" />
          </motion.div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
      >
        Start Over ↺
      </motion.button>
    </motion.div>
  );
}