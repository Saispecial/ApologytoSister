import { useState } from 'react';
import { GameState, ForgiveOption } from '../types/game';
import { refusalMessages } from '../constants/forgiveOptions';
import { messages } from '../constants/messages';

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    stage: 0,
    attempts: 0
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNext = () => {
    if (gameState.stage < messages.length - 1) {
      setGameState(prev => ({ ...prev, stage: prev.stage + 1 }));
    }
  };

  const handleForgive = (option: ForgiveOption) => {
    if (option.isCorrect) {
      setShowConfetti(true);
    } else {
      const newRefusal = refusalMessages[gameState.attempts % refusalMessages.length];
      setGameState(prev => ({
        ...prev,
        attempts: prev.attempts + 1,
        lastRefusal: newRefusal
      }));
    }
  };

  const handleReset = () => {
    setGameState({ stage: 0, attempts: 0 });
    setShowConfetti(false);
  };

  return {
    gameState,
    showConfetti,
    handleNext,
    handleForgive,
    handleReset
  };
}