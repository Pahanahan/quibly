export interface QuizMemories {
  id: number;
  name: string;
  rusName: string;
}

export interface QuizMemoriesItems {
  items: QuizMemories;
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
  gamePhase: GamePhase;
  startTimeRound: number;
  maxPlayers: number;
  minPlayers: number;
  maxQuestions: number;
  players?: Record<string, QuizPlayer>;
  questions: QuizQuestion[];
  topics: object;
  roomId: string;
  memoryGame: object;
  sortingGame: object;
}

export enum GamePhase {
  LOBBY = "lobby",
  QUESTION = "question",
  ANSWER = "answer",
  OBSTRUCTION = "obstruction",
  MEMORY = "memory",
  MEMORY_CHOOSE = "memoryChoose",
  MEMORY_ANSWER = "memoryAnswer",
  SORTING = "sorting",
  SORTING_ANSWER = "sortingAnswer",
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

export interface Variable {
  id: number;
  name: string;
  order?: number;
}

export interface QuizSorting {
  id: number;
  category: string;
  question: string;
  variables: Variable[];
}

export interface QuizSortingItems {
  items: QuizSorting;
}

export type MemScoreText = "highScore" | "zeroScore" | "normal";
