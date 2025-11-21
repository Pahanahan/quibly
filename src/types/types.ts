export interface QuizQuestion {
  id: number;
  question: string;
  answers: string[];
  rightAnswer: string;
}

export interface QuizPlayer {
  userName: string;
  ready: boolean;
  id: string;
  score: number;
  avatar: string;
}

export interface QuizRoom {
  currentQuestionIndex: number;
  isActive: boolean;
  isGameStarted: boolean;
  maxPlayers: number;
  minPlayers: number;
  players?: Record<string, QuizPlayer>;
  questions: QuizQuestion[];
  roomId: string;
}
