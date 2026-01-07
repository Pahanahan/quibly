export interface QuizMemories {
  id: number;
  name: string;
  rusName: string;
}

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
  ready: "addedTopics" | "ready" | "memory";
  id: string;
  currentScore: 0;
  score: number;
  avatar: string;
  obstructions: {
    x2: boolean;
    x5: boolean;
    x10: boolean;
    fadeIn: boolean;
    scale: boolean;
    blurIn: boolean;
    rotate: boolean;
    helicopter: boolean;
    pulse: boolean;
    shake: boolean;
    defender: boolean;
  };
}

export interface QuizRoom {
  createDate: string;
  currentQuestionIndex: number;
  // isGameEnd: boolean;
  // isGameStarted: boolean;
  // isObstruction: boolean;
  // isMemoryGame: boolean;
  gamePhase: GamePhase;
  startTimeRound: number;
  maxPlayers: number;
  minPlayers: number;
  maxQuestions: number;
  players?: Record<string, QuizPlayer>;
  questions: QuizQuestion[];
  topics: object;
  roomId: string;
}

// export type GamePhase =
//   | "lobby"
//   | "question"
//   | "answer"
//   | "obstruction"
//   | "memory"
//   | "memoryChoose"
//   | "memoryAnswer"
//   | "end";

export enum GamePhase {
  LOBBY = "lobby",
  QUESTION = "question",
  ANSWER = "answer",
  OBSTRUCTION = "obstruction",
  MEMORY = "memory",
  MEMORY_CHOOSE = "memoryChoose",
  MEMORY_ANSWER = "memoryAnswer",
  GAME_END = "end",
}

export interface QuizObstruction {
  id: number;
  name: string;
  rusName: string;
}

export interface ObstructionsObj {
  x2: boolean;
  x5: boolean;
  x10: boolean;
  fadeIn: boolean;
  scale: boolean;
  blurIn: boolean;
  rotate: boolean;
  helicopter: boolean;
  pulse: boolean;
  shake: boolean;
  defender: boolean;
}
