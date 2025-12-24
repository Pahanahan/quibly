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
  ready: string;
  id: string;
  currentScore: 0;
  score: number;
  avatar: string;
  obstructions: [];
}

export interface QuizRoom {
  createDate: string;
  currentQuestionIndex: number;
  isGameEnd: boolean;
  isGameStarted: boolean;
  isObstruction: boolean;
  startTimeRound: number;
  maxPlayers: number;
  minPlayers: number;
  maxQuestions: number;
  players?: Record<string, QuizPlayer>;
  questions: QuizQuestion[];
  topics: object;
  roomId: string;
}

export type GamePhase = "lobby" | "question" | "answer" | "obstruction" | "end";
