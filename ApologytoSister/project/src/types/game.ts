export interface ForgiveOption {
  text: string;
  isCorrect: boolean;
}

export interface GameState {
  stage: number;
  attempts: number;
  lastRefusal?: string;
}