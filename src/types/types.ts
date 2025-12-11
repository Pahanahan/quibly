export interface QuizQuestion {
  id: number;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  answers: [string, string, string, string];
  rightAnswer: string;
}

export interface QuizPlayer {
  userName: string;
  ready: boolean;
  id: string;
  currentScore: 0;
  score: number;
  avatar: string;
  isFake?: boolean;
}

export interface QuizRoom {
  createDate: string;
  currentQuestionIndex: number;
  isGameEnd: boolean;
  isGameStarted: boolean;
  maxPlayers: number;
  minPlayers: number;
  maxQuestions: number;
  players?: Record<string, QuizPlayer>;
  questions: QuizQuestion[];
  topics: object;
  roomId: string;
}

export enum StepGame {
  ADDED_PLAYER = "added",
  TOPICS = "topics",
  READY = "ready",
}
