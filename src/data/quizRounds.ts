import { GamePhase } from "../types/types";

interface QuizRounds {
  gamePhase: GamePhase;
  duration: number;
  round?: number;
  dataIndex?: number;
  displayTitle?: string;
}

enum IntroTitles {
  QUESTION = "Вопрос",
  MOVIES = "Угадай фильм",
  MUSICS = "Угадай мелодию",
  WORDS = "Составь слова из букв",
  OBSTRUCTION = "Создай игроку препятствие",
  SORTING = "Сортировка",
  MEMORY = "Уровень на память",
  FINAL_ROUND = "Финальный вопрос",
  GAME_END = "Конец игры",
}

const INTRO_DURATION = 2000;
const QUESTION_DURATION = 11000;
const ANSWER_DURATION = 7000;
const OBSTRUCTION_DURATION = 11000;
const MEMORY_DURATION = 11000;
const MEMORY_CHOOSE_DURATION = 16000;
const MEMORY_ANSWER_DURATION = 7000;
const SORTING_DURATION = 21000;
const SORTING_ANSWER_DURATION = 7000;
const MOVIES_DURATION = 11000;
const MOVIES_ANSWER_DURATION = 7000;
const MUSICS_DURATION = 21000;
const MUSICS_ANSWER_DURATION = 7000;
const WORDS_DURATION = 21000;
const WORDS_ANSWER_DURATION = 7000;

export const quizRounds: QuizRounds[] = [
  {
    gamePhase: GamePhase.INTRO,
    round: 1,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.QUESTION,
  },
  {
    gamePhase: GamePhase.QUESTION,
    round: 1,
    duration: QUESTION_DURATION,
    dataIndex: 0,
  },
  {
    gamePhase: GamePhase.ANSWER,
    round: 1,
    duration: ANSWER_DURATION,
    dataIndex: 0,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 2,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.MOVIES,
  },
  {
    gamePhase: GamePhase.MOVIES,
    round: 2,
    duration: MOVIES_DURATION,
    dataIndex: 0,
  },
  {
    gamePhase: GamePhase.MOVIES_ANSWER,
    round: 2,
    duration: MOVIES_ANSWER_DURATION,
    dataIndex: 0,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 3,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.OBSTRUCTION,
  },
  {
    gamePhase: GamePhase.OBSTRUCTION,
    round: 3,
    duration: OBSTRUCTION_DURATION,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 3,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.QUESTION,
  },
  {
    gamePhase: GamePhase.QUESTION,
    round: 3,
    duration: QUESTION_DURATION,
    dataIndex: 1,
  },
  {
    gamePhase: GamePhase.ANSWER,
    round: 3,
    duration: ANSWER_DURATION,
    dataIndex: 1,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 4,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.MUSICS,
  },
  {
    gamePhase: GamePhase.MUSICS,
    round: 4,
    duration: MUSICS_DURATION,
    dataIndex: 0,
  },
  {
    gamePhase: GamePhase.MUSICS_ANSWER,
    round: 4,
    duration: MUSICS_ANSWER_DURATION,
    dataIndex: 0,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 5,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.SORTING,
  },
  {
    gamePhase: GamePhase.SORTING,
    round: 5,
    duration: SORTING_DURATION,
    dataIndex: 0,
  },
  {
    gamePhase: GamePhase.SORTING_ANSWER,
    round: 5,
    duration: SORTING_ANSWER_DURATION,
    dataIndex: 0,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 6,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.OBSTRUCTION,
  },
  {
    gamePhase: GamePhase.OBSTRUCTION,
    round: 6,
    duration: OBSTRUCTION_DURATION,
  },
  {
    gamePhase: GamePhase.QUESTION,
    round: 6,
    duration: QUESTION_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.ANSWER,
    round: 6,
    duration: ANSWER_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 7,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.WORDS,
  },
  {
    gamePhase: GamePhase.WORDS,
    round: 7,
    duration: WORDS_DURATION,
    dataIndex: 0,
  },
  {
    gamePhase: GamePhase.WORDS_ANSWER,
    round: 7,
    duration: WORDS_ANSWER_DURATION,
    dataIndex: 0,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 8,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.MOVIES,
  },
  {
    gamePhase: GamePhase.MOVIES,
    round: 8,
    duration: MOVIES_DURATION,
    dataIndex: 1,
  },
  {
    gamePhase: GamePhase.MOVIES_ANSWER,
    round: 8,
    duration: MOVIES_ANSWER_DURATION,
    dataIndex: 1,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 9,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.QUESTION,
  },
  {
    gamePhase: GamePhase.QUESTION,
    round: 9,
    duration: QUESTION_DURATION,
    dataIndex: 3,
  },
  {
    gamePhase: GamePhase.ANSWER,
    round: 9,
    duration: ANSWER_DURATION,
    dataIndex: 3,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 10,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.MEMORY,
  },
  {
    gamePhase: GamePhase.MEMORY,
    round: 10,
    duration: MEMORY_DURATION,
  },
  {
    gamePhase: GamePhase.MEMORY_CHOOSE,
    round: 10,
    duration: MEMORY_CHOOSE_DURATION,
  },
  {
    gamePhase: GamePhase.MEMORY_ANSWER,
    round: 10,
    duration: MEMORY_ANSWER_DURATION,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 11,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.OBSTRUCTION,
  },
  {
    gamePhase: GamePhase.OBSTRUCTION,
    round: 11,
    duration: OBSTRUCTION_DURATION,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 11,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.QUESTION,
  },
  {
    gamePhase: GamePhase.QUESTION,
    round: 11,
    duration: QUESTION_DURATION,
    dataIndex: 4,
  },
  {
    gamePhase: GamePhase.ANSWER,
    round: 11,
    duration: ANSWER_DURATION,
    dataIndex: 4,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 12,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.MUSICS,
  },
  {
    gamePhase: GamePhase.MUSICS,
    round: 12,
    duration: MUSICS_DURATION,
    dataIndex: 1,
  },
  {
    gamePhase: GamePhase.MUSICS_ANSWER,
    round: 12,
    duration: MUSICS_ANSWER_DURATION,
    dataIndex: 1,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 13,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.WORDS,
  },
  {
    gamePhase: GamePhase.WORDS,
    round: 13,
    duration: WORDS_DURATION,
    dataIndex: 1,
  },
  {
    gamePhase: GamePhase.WORDS_ANSWER,
    round: 13,
    duration: WORDS_ANSWER_DURATION,
    dataIndex: 1,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 14,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.QUESTION,
  },
  {
    gamePhase: GamePhase.QUESTION,
    round: 14,
    duration: QUESTION_DURATION,
    dataIndex: 5,
  },
  {
    gamePhase: GamePhase.ANSWER,
    round: 14,
    duration: ANSWER_DURATION,
    dataIndex: 5,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 15,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.MOVIES,
  },
  {
    gamePhase: GamePhase.MOVIES,
    round: 15,
    duration: MOVIES_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.MOVIES_ANSWER,
    round: 15,
    duration: MOVIES_ANSWER_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 16,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.OBSTRUCTION,
  },
  {
    gamePhase: GamePhase.OBSTRUCTION,
    round: 16,
    duration: OBSTRUCTION_DURATION,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 16,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.QUESTION,
  },
  {
    gamePhase: GamePhase.QUESTION,
    round: 16,
    duration: QUESTION_DURATION,
    dataIndex: 6,
  },
  {
    gamePhase: GamePhase.ANSWER,
    round: 16,
    duration: ANSWER_DURATION,
    dataIndex: 6,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 17,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.SORTING,
  },
  {
    gamePhase: GamePhase.SORTING,
    round: 17,
    duration: SORTING_DURATION,
    dataIndex: 1,
  },
  {
    gamePhase: GamePhase.SORTING_ANSWER,
    round: 17,
    duration: SORTING_ANSWER_DURATION,
    dataIndex: 1,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 18,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.MUSICS,
  },
  {
    gamePhase: GamePhase.MUSICS,
    round: 18,
    duration: MUSICS_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.MUSICS_ANSWER,
    round: 18,
    duration: MUSICS_ANSWER_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 19,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.OBSTRUCTION,
  },
  {
    gamePhase: GamePhase.OBSTRUCTION,
    round: 19,
    duration: OBSTRUCTION_DURATION,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 19,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.QUESTION,
  },
  {
    gamePhase: GamePhase.QUESTION,
    round: 19,
    duration: QUESTION_DURATION,
    dataIndex: 7,
  },
  {
    gamePhase: GamePhase.ANSWER,
    round: 19,
    duration: ANSWER_DURATION,
    dataIndex: 7,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 20,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.WORDS,
  },
  {
    gamePhase: GamePhase.WORDS,
    round: 20,
    duration: WORDS_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.WORDS_ANSWER,
    round: 20,
    duration: WORDS_ANSWER_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 21,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.MOVIES,
  },
  {
    gamePhase: GamePhase.MOVIES,
    round: 21,
    duration: MOVIES_DURATION,
    dataIndex: 3,
  },
  {
    gamePhase: GamePhase.MOVIES_ANSWER,
    round: 21,
    duration: MOVIES_ANSWER_DURATION,
    dataIndex: 3,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 22,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.SORTING,
  },
  {
    gamePhase: GamePhase.SORTING,
    round: 22,
    duration: SORTING_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.SORTING_ANSWER,
    round: 22,
    duration: SORTING_ANSWER_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 23,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.QUESTION,
  },
  {
    gamePhase: GamePhase.QUESTION,
    round: 23,
    duration: QUESTION_DURATION,
    dataIndex: 8,
  },
  {
    gamePhase: GamePhase.ANSWER,
    round: 23,
    duration: ANSWER_DURATION,
    dataIndex: 8,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 24,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.MOVIES,
  },
  {
    gamePhase: GamePhase.MOVIES,
    round: 24,
    duration: MOVIES_DURATION,
    dataIndex: 4,
  },
  {
    gamePhase: GamePhase.MOVIES_ANSWER,
    round: 24,
    duration: MOVIES_ANSWER_DURATION,
    dataIndex: 4,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 25,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.SORTING,
  },
  {
    gamePhase: GamePhase.SORTING,
    round: 25,
    duration: SORTING_DURATION,
    dataIndex: 3,
  },
  {
    gamePhase: GamePhase.SORTING_ANSWER,
    round: 25,
    duration: SORTING_ANSWER_DURATION,
    dataIndex: 3,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 26,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.WORDS,
  },
  {
    gamePhase: GamePhase.WORDS,
    round: 26,
    duration: WORDS_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.WORDS_ANSWER,
    round: 26,
    duration: WORDS_ANSWER_DURATION,
    dataIndex: 2,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 27,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.OBSTRUCTION,
  },
  {
    gamePhase: GamePhase.OBSTRUCTION,
    round: 27,
    duration: OBSTRUCTION_DURATION,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 27,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.QUESTION,
  },
  {
    gamePhase: GamePhase.QUESTION,
    round: 27,
    duration: QUESTION_DURATION,
    dataIndex: 9,
  },
  {
    gamePhase: GamePhase.ANSWER,
    round: 27,
    duration: ANSWER_DURATION,
    dataIndex: 9,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 28,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.MUSICS,
  },
  {
    gamePhase: GamePhase.MUSICS,
    round: 28,
    duration: MUSICS_DURATION,
    dataIndex: 3,
  },
  {
    gamePhase: GamePhase.MUSICS_ANSWER,
    round: 28,
    duration: MUSICS_ANSWER_DURATION,
    dataIndex: 3,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 29,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.WORDS,
  },
  {
    gamePhase: GamePhase.WORDS,
    round: 29,
    duration: WORDS_DURATION,
    dataIndex: 3,
  },
  {
    gamePhase: GamePhase.WORDS_ANSWER,
    round: 29,
    duration: WORDS_ANSWER_DURATION,
    dataIndex: 3,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 30,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.OBSTRUCTION,
  },
  {
    gamePhase: GamePhase.OBSTRUCTION,
    round: 30,
    duration: OBSTRUCTION_DURATION,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 30,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.FINAL_ROUND,
  },
  {
    gamePhase: GamePhase.QUESTION,
    round: 30,
    duration: QUESTION_DURATION,
    dataIndex: 10,
  },
  {
    gamePhase: GamePhase.ANSWER,
    round: 30,
    duration: ANSWER_DURATION,
    dataIndex: 10,
  },
  {
    gamePhase: GamePhase.INTRO,
    round: 30,
    duration: INTRO_DURATION,
    displayTitle: IntroTitles.GAME_END,
  },
  {
    gamePhase: GamePhase.GAME_END,
    duration: 0,
  },
];

// Массив для быстрого тестирования

// export const quizRounds: QuizRounds[] = [
//   {
//     gamePhase: GamePhase.INTRO,
//     round: 1,
//     duration: INTRO_DURATION,
//     displayTitle: IntroTitles.WORDS,
//   },
//   {
//     gamePhase: GamePhase.WORDS,
//     round: 1,
//     duration: WORDS_DURATION,
//     dataIndex: 0,
//   },
//   {
//     gamePhase: GamePhase.WORDS_ANSWER,
//     round: 1,
//     duration: WORDS_ANSWER_DURATION,
//     dataIndex: 0,
//   },
//   {
//     gamePhase: GamePhase.INTRO,
//     round: 2,
//     duration: INTRO_DURATION,
//     displayTitle: IntroTitles.MOVIES,
//   },
//   {
//     gamePhase: GamePhase.MOVIES,
//     round: 2,
//     duration: MOVIES_DURATION,
//     dataIndex: 0,
//   },
//   {
//     gamePhase: GamePhase.MOVIES_ANSWER,
//     round: 2,
//     duration: MOVIES_ANSWER_DURATION,
//     dataIndex: 0,
//   },
//   {
//     gamePhase: GamePhase.INTRO,
//     round: 3,
//     duration: INTRO_DURATION,
//     displayTitle: IntroTitles.OBSTRUCTION,
//   },
//   {
//     gamePhase: GamePhase.OBSTRUCTION,
//     round: 3,
//     duration: OBSTRUCTION_DURATION,
//   },
//   {
//     gamePhase: GamePhase.INTRO,
//     round: 4,
//     duration: INTRO_DURATION,
//     displayTitle: IntroTitles.QUESTION,
//   },
//   {
//     gamePhase: GamePhase.QUESTION,
//     round: 4,
//     duration: QUESTION_DURATION,
//     dataIndex: 1,
//   },
//   {
//     gamePhase: GamePhase.ANSWER,
//     round: 4,
//     duration: ANSWER_DURATION,
//     dataIndex: 1,
//   },
//   {
//     gamePhase: GamePhase.INTRO,
//     round: 5,
//     duration: INTRO_DURATION,
//     displayTitle: IntroTitles.MEMORY,
//   },
//   {
//     gamePhase: GamePhase.MEMORY,
//     round: 5,
//     duration: MEMORY_DURATION,
//   },
//   {
//     gamePhase: GamePhase.MEMORY_CHOOSE,
//     round: 5,
//     duration: MEMORY_CHOOSE_DURATION,
//   },
//   {
//     gamePhase: GamePhase.MEMORY_ANSWER,
//     round: 5,
//     duration: MEMORY_ANSWER_DURATION,
//   },
//   {
//     gamePhase: GamePhase.INTRO,
//     round: 6,
//     duration: INTRO_DURATION,
//     displayTitle: IntroTitles.SORTING,
//   },
//   {
//     gamePhase: GamePhase.SORTING,
//     round: 6,
//     duration: SORTING_DURATION,
//     dataIndex: 0,
//   },
//   {
//     gamePhase: GamePhase.SORTING_ANSWER,
//     round: 6,
//     duration: SORTING_ANSWER_DURATION,
//     dataIndex: 0,
//   },
//   {
//     gamePhase: GamePhase.INTRO,
//     round: 7,
//     duration: INTRO_DURATION,
//     displayTitle: IntroTitles.MUSICS,
//   },
//   {
//     gamePhase: GamePhase.MUSICS,
//     round: 7,
//     duration: MUSICS_DURATION,
//     dataIndex: 0,
//   },
//   {
//     gamePhase: GamePhase.MUSICS_ANSWER,
//     round: 7,
//     duration: MUSICS_ANSWER_DURATION,
//     dataIndex: 0,
//   },
//   {
//     gamePhase: GamePhase.INTRO,
//     round: 7,
//     duration: INTRO_DURATION,
//     displayTitle: IntroTitles.GAME_END,
//   },
//   {
//     gamePhase: GamePhase.GAME_END,
//     round: 7,
//     duration: 0,
//   },
// ];
