import React from 'react';
import { GameStage } from './components/GameStage';
import { Celebration } from './components/Celebration';
import { Background } from './components/Background';
import { useGameState } from './hooks/useGameState';
import { messages } from './constants/messages';

export default function App() {
  const {
    gameState,
    showConfetti,
    handleNext,
    handleForgive,
    handleReset
  } = useGameState();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 overflow-hidden relative">
      <Background />
      
      <div className="relative z-10 max-w-md w-full bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-purple-500/20">
        {showConfetti ? (
          <Celebration onReset={handleReset} />
        ) : (
          <GameStage
            message={messages[gameState.stage]}
            onNext={handleNext}
            isLastStage={gameState.stage === messages.length - 1}
            attempts={gameState.attempts}
            onForgive={handleForgive}
            lastRefusal={gameState.lastRefusal}
          />
        )}
      </div>
    </div>
  );
}