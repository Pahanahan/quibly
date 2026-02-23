// Создай вопрос и 4 варианта ответа, для игры викторина "Угадай мелодию", 1 вариант ответа правильный, все остальные 3 ответа 100% неправильные вот по такому шаблоку interface QuizMusics {
//  id: number;
//   question: string;
//   answers: [string, string, string, string];
//   rightAnswer: string;
//   srcMusic: string;
// }
// Ответы должны быть названиями песен, не исполнителей, а именно название песен
// Еще ответы должны быть из той же категории ответов, допустим музыка джаз, значит и остальные ответы которые неправильные, они тоже в стиле джаз, тоже самое для рока, классики, репа и так далее, что бы было сложнее отвечать и для того, что бы варианты ответов были почаще разными. Но обязательно 1 правильный ответ и 3 100% неправильных

import { QuizMusics } from "../types/types";

export const quizMusics: QuizMusics[] = [
  {
    id: 1,
    question: "Угадай мелодию",
    answers: ["Mambo Italiano", "Sway", "Quando, Quando, Quando", "Volare"],
    rightAnswer: "Mambo Italiano",
    srcMusic: "/quiz-musics/0001_Shaft_Mambo_Italiano.m4a",
  },
  {
    id: 2,
    question: "Угадай мелодию",
    answers: ["Hey Jude", "Let It Be", "Yesterday", "Help!"],
    rightAnswer: "Hey Jude",
    srcMusic: "/quiz-musics/0002_The_Beatles_Hey_Jude.m4a",
  },
  {
    id: 3,
    question: "Угадай мелодию",
    answers: ["Don't Let Me Down", "Come Together", "Get Back", "Something"],
    rightAnswer: "Don't Let Me Down",
    srcMusic: "/quiz-musics/0003_The_Beatles_Dont_Let_Me_Down.m4a",
  },
  {
    id: 4,
    question: "Угадай мелодию",
    answers: ["Immigrant Song", "Whole Lotta Love", "Black Dog", "Paranoid"],
    rightAnswer: "Immigrant Song",
    srcMusic: "/quiz-musics/0004_Led_Zeppelin_Immigrant_Song.m4a",
  },
  {
    id: 5,
    question: "Угадай мелодию",
    answers: [
      "Stairway to Heaven",
      "Kashmir",
      "Highway to Hell",
      "Smoke on the Water",
    ],
    rightAnswer: "Stairway to Heaven",
    srcMusic: "/quiz-musics/0005_Led_Zeppelin_Stairway_To_Heaven.m4a",
  },
  {
    id: 6,
    question: "Угадай мелодию",
    answers: [
      "Люди встречаются",
      "Трава у дома",
      "Мой адрес — Советский Союз",
      "Синий иней",
    ],
    rightAnswer: "Люди встречаются",
    srcMusic:
      "/quiz-musics/0006_Ansambl_Vesjolye_rebyata_Lyudi_vstrechayutsy.m4a",
  },
  {
    id: 7,
    question: "Угадай мелодию",
    answers: [
      "Love Hurts",
      "Still Loving You",
      "I Want to Know What Love Is",
      "Every Rose Has Its Thorn",
    ],
    rightAnswer: "Love Hurts",
    srcMusic: "/quiz-musics/0007_Nazareth_Love_Hurts.m4a",
  },
  {
    id: 8,
    question: "Угадай мелодию",
    answers: [
      "Bohemian Rhapsody",
      "We Will Rock You",
      "Somebody to Love",
      "Don't Stop Me Now",
    ],
    rightAnswer: "Bohemian Rhapsody",
    srcMusic: "/quiz-musics/0008_Queen_Bohemian_Rhapsody.m4a",
  },
  {
    id: 9,
    question: "Угадай мелодию",
    answers: [
      "Не надо печалиться, вся жизнь впереди",
      "Яблони в цвету",
      "Пусть всегда будет солнце",
      "Всё будет хорошо",
    ],
    rightAnswer: "Не надо печалиться, вся жизнь впереди",
    srcMusic:
      "/quiz-musics/0009_VIA_Samocvety_Ne_nado_pechalitsya_Vsya_zhizn_vperedi.m4a",
  },
  {
    id: 10,
    question: "Угадай мелодию",
    answers: ["Dancing Queen", "Mamma Mia", "Waterloo", "Take a Chance on Me"],
    rightAnswer: "Dancing Queen",
    srcMusic: "/quiz-musics/0010_ABBA_Dancing_Queen.m4a",
  },
];
