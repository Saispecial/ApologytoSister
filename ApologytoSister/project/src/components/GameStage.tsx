import React from 'react';
import { motion } from 'framer-motion';
import { ForgiveOptions } from './ForgiveOptions';
import { RefusalMessage } from './RefusalMessage';
import { ForgiveOption } from '../types/game';
import { forgiveOptions, refusalMessages } from '../constants/forgiveOptions';

interface GameStageProps {
  message: string;
  onNext: () => void;
  isLastStage: boolean;
  attempts: number;
  onForgive: (option: ForgiveOption) => void;
  lastRefusal?: string;
}

export function GameStage({ 
  message, 
  onNext, 
  isLastStage,
  attempts,
  onForgive,
  lastRefusal
}: GameStageProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6"
    >
      <motion.p
        className="text-2xl font-bold text-purple-300 cursor-pointer hover:text-purple-400 transition-colors"
        whileHover={{ scale: 1.1 }}
        style={{
          fontSize: isLastStage ? `${Math.min(1.5 + attempts * 0.1, 2.5)}rem` : '1.5rem'
        }}
      >
        {message}
      </motion.p>

      {isLastStage ? (
        <>
          {lastRefusal && (
            <RefusalMessage message={lastRefusal} attempts={attempts} />
          )}
          <ForgiveOptions 
            options={forgiveOptions} 
            onSelect={onForgive}
            attempts={attempts}
          />
        </>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          onClick={onNext}
        >
          Next →
        </motion.button>
      )}
    </motion.div>
  );
}