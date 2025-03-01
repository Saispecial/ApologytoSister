import React from 'react';
import { Star, Heart, Sparkles, Music, Coffee, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [
  { Icon: Star, color: 'text-yellow-400', size: 24 },
  { Icon: Heart, color: 'text-pink-400', size: 20 },
  { Icon: Sparkles, color: 'text-purple-400', size: 22 },
  { Icon: Music, color: 'text-blue-400', size: 18 },
  { Icon: Coffee, color: 'text-amber-400', size: 20 },
  { Icon: Sun, color: 'text-orange-400', size: 24 },
  { Icon: Moon, color: 'text-indigo-400', size: 22 }
];

export function AnimatedIcons() {
  return (
    <>
      {icons.map(({ Icon, color, size }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </>
  );
}