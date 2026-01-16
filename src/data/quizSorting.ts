// Logic & Math
// numbers true 10
// geometry true 2
// percentages true 2
// comparisons true 2
// mathOperations true 7
// equations true 3

// Logic & Thinking
// logicOrder true 6
// causeEffect true 7
// difficulty true 2
// patterns true 2
// rules true 2

// Time & Order
// time true 3
// timeline true 8
// age true 4
// historicalOrder true 9
// lifeCycle true 6
// process true 6

// World & Nature
// countriesSize true 7
// population true 10
// planets true 9
// distance
// weather
// continents
// oceans

// Science
// physics
// chemistryElements
// chemicalReactions
// statesOfMatter
// biology
// humanBody
// energy

// IT & Programming
// dataTypes
// algorithms
// codeExecution
// complexity
// frontendStack
// backendStack
// network
// httpStatus

// Games
// gameLevels
// gameProgression
// skillsUpgrade
// rarity
// loot
// achievements

// Visual & Design
// colors
// colorBrightness
// designHierarchy
// fontsWeight
// uiImportance

// Simple / Universal
// size
// weight
// length
// speed
// temperature

// Meta / Special
// mixed
// randomLogic
// trapOrder
// memorySorting
// reverseOrder

// Мои темы
// Сортировка по количеству букв
// Сортировка по размеру чего нибудь

import { QuizSorting } from "../types/types";

export const quizSorting: QuizSorting[] = [
  {
    id: 1,
    category: "numbers",
    question: "Перетащите числа от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
      { id: 3, name: "3" },
      { id: 4, name: "4" },
      { id: 5, name: "5" },
    ],
  },
  {
    id: 2,
    category: "numbers",
    question: "Отсортируйте числа по возрастанию",
    variables: [
      { id: 1, name: "3" },
      { id: 2, name: "7" },
      { id: 3, name: "10" },
      { id: 4, name: "25" },
      { id: 5, name: "50" },
    ],
  },
  {
    id: 3,
    category: "numbers",
    question: "Перетащите отрицательные и положительные числа по возрастанию",
    variables: [
      { id: 1, name: "-10" },
      { id: 2, name: "-3" },
      { id: 3, name: "0" },
      { id: 4, name: "4" },
      { id: 5, name: "8" },
    ],
  },
  {
    id: 4,
    category: "numbers",
    question: "Отсортируйте числа от меньшего к большему",
    variables: [
      { id: 1, name: "2" },
      { id: 2, name: "6" },
      { id: 3, name: "9" },
      { id: 4, name: "15" },
      { id: 5, name: "21" },
    ],
  },
  {
    id: 5,
    category: "numbers",
    question: "Перетащите дробные числа по возрастанию",
    variables: [
      { id: 1, name: "0.25" },
      { id: 2, name: "0.5" },
      { id: 3, name: "1.2" },
      { id: 4, name: "1.75" },
      { id: 5, name: "2.1" },
    ],
  },
  {
    id: 6,
    category: "numbers",
    question: "Отсортируйте числа от меньшего к большему",
    variables: [
      { id: 1, name: "5" },
      { id: 2, name: "10" },
      { id: 3, name: "20" },
      { id: 4, name: "50" },
      { id: 5, name: "100" },
    ],
  },
  {
    id: 7,
    category: "numbers",
    question: "Перетащите числа в правильном порядке",
    variables: [
      { id: 1, name: "-5" },
      { id: 2, name: "-1" },
      { id: 3, name: "3" },
      { id: 4, name: "7" },
      { id: 5, name: "12" },
    ],
  },
  {
    id: 8,
    category: "numbers",
    question: "Отсортируйте числа по возрастанию",
    variables: [
      { id: 1, name: "0" },
      { id: 2, name: "4" },
      { id: 3, name: "9" },
      { id: 4, name: "16" },
      { id: 5, name: "25" },
    ],
  },
  {
    id: 9,
    category: "numbers",
    question: "Перетащите числа от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "1" },
      { id: 2, name: "3" },
      { id: 3, name: "9" },
      { id: 4, name: "27" },
      { id: 5, name: "81" },
    ],
  },
  {
    id: 10,
    category: "numbers",
    question: "Отсортируйте числа по возрастанию",
    variables: [
      { id: 1, name: "6" },
      { id: 2, name: "12" },
      { id: 3, name: "18" },
      { id: 4, name: "24" },
      { id: 5, name: "30" },
    ],
  },
  {
    id: 11,
    category: "geometry",
    question:
      "Перетащите фигуры в правильном порядке от наименьшего количества углов до наибольшего",
    variables: [
      { id: 1, name: "треугольник" },
      { id: 2, name: "квадрат" },
      { id: 3, name: "пятиугольник" },
      { id: 4, name: "шестиугольник" },
      { id: 5, name: "семиугольник" },
    ],
  },
  {
    id: 12,
    category: "geometry",
    question: "Перетащите фигуры по возрастанию визуальной сложности",
    variables: [
      { id: 1, name: "круг" },
      { id: 2, name: "треугольник" },
      { id: 3, name: "квадрат" },
      { id: 4, name: "пятиугольник" },
      { id: 5, name: "звезда" },
    ],
  },
  {
    id: 13,
    category: "percentages",
    question: "Перетащите проценты по возрастанию значения",
    variables: [
      { id: 1, name: "12%" },
      { id: 2, name: "18%" },
      { id: 3, name: "24%" },
      { id: 4, name: "36%" },
      { id: 5, name: "48%" },
    ],
  },
  {
    id: 14,
    category: "percentages",
    question: "Отсортируйте проценты от меньшего к большему",
    variables: [
      { id: 1, name: "3%" },
      { id: 2, name: "6%" },
      { id: 3, name: "12%" },
      { id: 4, name: "24%" },
      { id: 5, name: "48%" },
    ],
  },
  {
    id: 15,
    category: "comparisons",
    question: "Перетащите дроби по возрастанию",
    variables: [
      { id: 1, name: "1/5" },
      { id: 2, name: "1/4" },
      { id: 3, name: "1/2" },
      { id: 4, name: "3/4" },
      { id: 5, name: "4/5" },
    ],
  },
  {
    id: 16,
    category: "comparisons",
    question: "Отсортируйте дроби и проценты вместе по возрастанию",
    variables: [
      { id: 1, name: "20%" },
      { id: 2, name: "1/4" },
      { id: 3, name: "1/2" },
      { id: 4, name: "60%" },
      { id: 5, name: "3/4" },
    ],
  },
  {
    id: 17,
    category: "mathOperations",
    question: "Отсортируйте результаты сложения по возрастанию",
    variables: [
      { id: 1, name: "1 + 1" },
      { id: 2, name: "2 + 2" },
      { id: 3, name: "3 + 3" },
      { id: 4, name: "4 + 4" },
      { id: 5, name: "5 + 5" },
    ],
  },
  {
    id: 18,
    category: "mathOperations",
    question: "Перетащите результаты вычитания по возрастанию",
    variables: [
      { id: 1, name: "5 - 5" },
      { id: 2, name: "6 - 5" },
      { id: 3, name: "7 - 5" },
      { id: 4, name: "8 - 5" },
      { id: 5, name: "10 - 5" },
    ],
  },
  {
    id: 19,
    category: "mathOperations",
    question: "Отсортируйте результаты умножения по возрастанию",
    variables: [
      { id: 1, name: "1 × 2" },
      { id: 2, name: "2 × 2" },
      { id: 3, name: "2 × 3" },
      { id: 4, name: "3 × 3" },
      { id: 5, name: "3 × 4" },
    ],
  },
  {
    id: 20,
    category: "mathOperations",
    question: "Перетащите результаты деления по возрастанию",
    variables: [
      { id: 1, name: "2 ÷ 2" },
      { id: 2, name: "4 ÷ 2" },
      { id: 3, name: "6 ÷ 2" },
      { id: 4, name: "8 ÷ 2" },
      { id: 5, name: "10 ÷ 2" },
    ],
  },
  {
    id: 21,
    category: "mathOperations",
    question: "Отсортируйте комбинированные операции по возрастанию",
    variables: [
      { id: 1, name: "1 + 2" },
      { id: 2, name: "2 × 2" },
      { id: 3, name: "3 + 3" },
      { id: 4, name: "2 × 4" },
      { id: 5, name: "5 + 5" },
    ],
  },
  {
    id: 21,
    category: "mathOperations",
    question: "Перетащите выражения с разными операциями по возрастанию",
    variables: [
      { id: 1, name: "1 + 1" },
      { id: 2, name: "6 ÷ 2" },
      { id: 3, name: "2 × 2" },
      { id: 4, name: "3 + 3" },
      { id: 5, name: "2 × 4" },
    ],
  },
  {
    id: 22,
    category: "mathOperations",
    question:
      "Перетащите выражения с отрицательным результатом с разными операциями по возрастанию",
    variables: [
      { id: 1, name: "1 - 5" },
      { id: 2, name: "2 - 5" },
      { id: 3, name: "3 - 5" },
      { id: 4, name: "4 - 5" },
      { id: 5, name: "5 - 5" },
    ],
  },
  {
    id: 23,
    category: "equations",
    question: "Отсортируйте результаты уравнений по возрастанию",
    variables: [
      { id: 1, name: "x + 1 = 2" },
      { id: 2, name: "x + 2 = 4" },
      { id: 3, name: "x + 3 = 6" },
      { id: 4, name: "x + 4 = 9" },
      { id: 5, name: "x + 5 = 11" },
    ],
  },
  {
    id: 24,
    category: "equations",
    question: "Перетащите уравнения с делением по возрастанию результата",
    variables: [
      { id: 1, name: "x ÷ 2 = 1" },
      { id: 2, name: "x ÷ 3 = 2" },
      { id: 3, name: "x ÷ 4 = 2" },
      { id: 4, name: "x ÷ 5 = 3" },
      { id: 5, name: "x ÷ 6 = 4" },
    ],
  },
  {
    id: 25,
    category: "equations",
    question: "Отсортируйте простые уравнения по возрастанию результата",
    variables: [
      { id: 1, name: "x + 0 = 1" },
      { id: 2, name: "x - 1 = 1" },
      { id: 3, name: "x × 1 = 3" },
      { id: 4, name: "x ÷ 1 = 4" },
      { id: 5, name: "x + 2 = 7" },
    ],
  },
  {
    id: 26,
    category: "logicOrder",
    question: "Отсортируйте буквы по алфавиту",
    variables: [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
      { id: 4, name: "D" },
      { id: 5, name: "E" },
    ],
  },
  {
    id: 27,
    category: "logicOrder",
    question: "Отсортируйте предметы по времени создания (от старого к новому)",
    variables: [
      { id: 1, name: "камень" },
      { id: 2, name: "дерево" },
      { id: 3, name: "телега" },
      { id: 4, name: "машина" },
      { id: 5, name: "компьютер" },
    ],
  },
  {
    id: 28,
    category: "logicOrder",
    question: "Перетащите животных по размеру (от меньшего к большему)",
    variables: [
      { id: 1, name: "мышь" },
      { id: 2, name: "кот" },
      { id: 3, name: "собака" },
      { id: 4, name: "лошадь" },
      { id: 5, name: "слон" },
    ],
  },
  {
    id: 29,
    category: "logicOrder",
    question: "Отсортируйте предметы по весу (от меньшего к большему)",
    variables: [
      { id: 1, name: "лист бумаги" },
      { id: 2, name: "книга" },
      { id: 3, name: "рюкзак" },
      { id: 4, name: "стул" },
      { id: 5, name: "стол" },
    ],
  },
  {
    id: 30,
    category: "logicOrder",
    question: "Перетащите дни недели по порядку",
    variables: [
      { id: 1, name: "Понедельник" },
      { id: 2, name: "Вторник" },
      { id: 3, name: "Среда" },
      { id: 4, name: "Четверг" },
      { id: 5, name: "Пятница" },
    ],
  },
  {
    id: 31,
    category: "logicOrder",
    question: "Отсортируйте месяцы по порядку",
    variables: [
      { id: 1, name: "Январь" },
      { id: 2, name: "Февраль" },
      { id: 3, name: "Март" },
      { id: 4, name: "Апрель" },
      { id: 5, name: "Май" },
    ],
  },
  {
    id: 32,
    category: "causeEffect",
    question: "Перетащите события по последовательности: приготовление чая",
    variables: [
      { id: 1, name: "Налить воду в чайник" },
      { id: 2, name: "Довести воду до кипения" },
      { id: 3, name: "Заварить чай" },
      { id: 4, name: "Дать настояться" },
      { id: 5, name: "Налить в чашку" },
    ],
  },
  {
    id: 33,
    category: "causeEffect",
    question: "Отсортируйте действия по последовательности: рост человека",
    variables: [
      { id: 1, name: "Рождение" },
      { id: 2, name: "Детство" },
      { id: 3, name: "Подростковый возраст" },
      { id: 4, name: "Взросление" },
      { id: 5, name: "Старение" },
    ],
  },
  {
    id: 34,
    category: "causeEffect",
    question: "Перетащите события по последовательности: день в школе",
    variables: [
      { id: 1, name: "Приход в школу" },
      { id: 2, name: "Уроки" },
      { id: 3, name: "Перемена" },
      { id: 4, name: "Обед" },
      { id: 5, name: "Возвращение домой" },
    ],
  },
  {
    id: 35,
    category: "causeEffect",
    question:
      "Отсортируйте действия по последовательности: приготовление завтрака",
    variables: [
      { id: 1, name: "Взять продукты" },
      { id: 2, name: "Нарезать ингредиенты" },
      { id: 3, name: "Приготовить на сковороде" },
      { id: 4, name: "Подавать на тарелке" },
      { id: 5, name: "Съесть" },
    ],
  },
  {
    id: 36,
    category: "causeEffect",
    question: "Отсортируйте действия по последовательности: строительство дома",
    variables: [
      { id: 1, name: "Планирование проекта" },
      { id: 2, name: "Заливка фундамента" },
      { id: 3, name: "Возведение стен" },
      { id: 4, name: "Крыша и окна" },
      { id: 5, name: "Отделка и сдача дома" },
    ],
  },
  {
    id: 37,
    category: "causeEffect",
    question: "Перетащите события по логике: приготовление письма",
    variables: [
      { id: 1, name: "Продумать содержание" },
      { id: 2, name: "Написать текст" },
      { id: 3, name: "Проверить ошибки" },
      { id: 4, name: "Подписать" },
      { id: 5, name: "Отправить" },
    ],
  },
  {
    id: 38,
    category: "causeEffect",
    question: "Отсортируйте действия по последовательности: поход в магазин",
    variables: [
      { id: 1, name: "Составить список покупок" },
      { id: 2, name: "Взять деньги" },
      { id: 3, name: "Поехать в магазин" },
      { id: 4, name: "Купить товары" },
      { id: 5, name: "Вернуться домой" },
    ],
  },
  {
    id: 39,
    category: "difficulty",
    question: "Отсортируйте уровни игры по сложности",
    variables: [
      { id: 1, name: "уровень 1" },
      { id: 2, name: "уровень 2" },
      { id: 3, name: "уровень 3" },
      { id: 4, name: "уровень 4" },
      { id: 5, name: "уровень 5" },
    ],
  },
  {
    id: 40,
    category: "difficulty",
    question: "Отсортируйте уровни сложности: видеоигры",
    variables: [
      { id: 1, name: "Новичок" },
      { id: 2, name: "Легкий" },
      { id: 3, name: "Средний" },
      { id: 4, name: "Сложный" },
      { id: 5, name: "Эксперт" },
    ],
  },
  {
    id: 41,
    category: "patterns",
    question: "Отсортируйте буквы по шаблону: через одну букву алфавита",
    variables: [
      { id: 1, name: "A" },
      { id: 2, name: "C" },
      { id: 3, name: "E" },
      { id: 4, name: "G" },
      { id: 5, name: "I" },
    ],
  },
  {
    id: 42,
    category: "patterns",
    question: "Отсортируйте буквы по шаблону: алфавит в обратном порядке",
    variables: [
      { id: 1, name: "E" },
      { id: 2, name: "D" },
      { id: 3, name: "C" },
      { id: 4, name: "B" },
      { id: 5, name: "A" },
    ],
  },
  {
    id: 43,
    category: "rules",
    question: "Отсортируйте слова по правилу: длина слова увеличивается",
    variables: [
      { id: 1, name: "кот" },
      { id: 2, name: "окно" },
      { id: 3, name: "дерево" },
      { id: 4, name: "телевизор" },
      { id: 5, name: "автомобиль" },
    ],
  },
  {
    id: 44,
    category: "rules",
    question:
      "Отсортируйте действия по правилу: последовательность приготовления кофе",
    variables: [
      { id: 1, name: "Налить воду" },
      { id: 2, name: "Довести до кипения" },
      { id: 3, name: "Заварить кофе" },
      { id: 4, name: "Подождать" },
      { id: 5, name: "Налить в чашку" },
    ],
  },
  {
    id: 45,
    category: "time",
    question: "Отсортируйте части суток по ходу времени",
    variables: [
      { id: 1, name: "Утро" },
      { id: 2, name: "День" },
      { id: 3, name: "Вечер" },
      { id: 4, name: "Ночь" },
      { id: 5, name: "Полночь" },
    ],
  },
  {
    id: 46,
    category: "time",
    question: "Отсортируйте этапы подготовки к школе по времени",
    variables: [
      { id: 1, name: "Встать с кровати" },
      { id: 2, name: "Почистить зубы" },
      { id: 3, name: "Одеться" },
      { id: 4, name: "Позавтракать" },
      { id: 5, name: "Собрать рюкзак" },
    ],
  },
  {
    id: 47,
    category: "time",
    question: "Отсортируйте события дня по времени",
    variables: [
      { id: 1, name: "Завтрак" },
      { id: 2, name: "Обед" },
      { id: 3, name: "Полдник" },
      { id: 4, name: "Ужин" },
      { id: 5, name: "Ночной перекус" },
    ],
  },
  {
    id: 48,
    category: "timeline",
    question: "Отсортируйте исторические изобретения по времени появления",
    variables: [
      { id: 1, name: "Колесо" },
      { id: 2, name: "Письменность" },
      { id: 3, name: "Печатный станок" },
      { id: 4, name: "Электрическая лампа" },
      { id: 5, name: "Интернет" },
    ],
  },
  {
    id: 49,
    category: "timeline",
    question: "Отсортируйте события жизни человека по хронологии",
    variables: [
      { id: 1, name: "Рождение" },
      { id: 2, name: "Первый день в школе" },
      { id: 3, name: "Окончание школы" },
      { id: 4, name: "Первый рабочий день" },
      { id: 5, name: "Выход на пенсию" },
    ],
  },
  {
    id: 50,
    category: "timeline",
    question: "Отсортируйте события Второй мировой войны",
    variables: [
      { id: 1, name: "Начало войны" },
      { id: 2, name: "Нападение на Пёрл-Харбор" },
      { id: 3, name: "Высадка в Нормандии" },
      { id: 4, name: "Капитуляция Германии" },
      { id: 5, name: "Капитуляция Японии" },
    ],
  },
  {
    id: 51,
    category: "timeline",
    question: "Отсортируйте этапы строительства здания",
    variables: [
      { id: 1, name: "Закладка фундамента" },
      { id: 2, name: "Возведение стен" },
      { id: 3, name: "Крыша" },
      { id: 4, name: "Отделка" },
      { id: 5, name: "Заселение" },
    ],
  },
  {
    id: 52,
    category: "timeline",
    question: "Отсортируйте открытия в области электроники",
    variables: [
      { id: 1, name: "Телеграф" },
      { id: 2, name: "Телефон" },
      { id: 3, name: "Радио" },
      { id: 4, name: "Телевизор" },
      { id: 5, name: "Компьютер" },
    ],
  },
  {
    id: 53,
    category: "timeline",
    question: "Отсортируйте эпохи в истории человечества",
    variables: [
      { id: 1, name: "Каменный век" },
      { id: 2, name: "Бронзовый век" },
      { id: 3, name: "Железный век" },
      { id: 4, name: "Средневековье" },
      { id: 5, name: "Новое время" },
    ],
  },
  {
    id: 54,
    category: "timeline",
    question: "Отсортируйте этапы посадки растения",
    variables: [
      { id: 1, name: "Подготовка почвы" },
      { id: 2, name: "Посев семян" },
      { id: 3, name: "Полив" },
      { id: 4, name: "Рост и уход" },
      { id: 5, name: "Сбор урожая" },
    ],
  },
  {
    id: 55,
    category: "timeline",
    question: "Отсортируйте шаги приготовления пиццы",
    variables: [
      { id: 1, name: "Приготовить тесто" },
      { id: 2, name: "Добавить соус" },
      { id: 3, name: "Выложить ингредиенты" },
      { id: 4, name: "Выпекать" },
      { id: 5, name: "Подавать к столу" },
    ],
  },
  {
    id: 56,
    category: "age",
    question: "Отсортируйте членов семьи по возрасту",
    variables: [
      { id: 1, name: "Младенец" },
      { id: 2, name: "Ребенок" },
      { id: 3, name: "Подросток" },
      { id: 4, name: "Взрослый" },
      { id: 5, name: "Пожилой" },
    ],
  },
  {
    id: 57,
    category: "age",
    question:
      "Отсортируйте растения по времени жизни (от семени к старому дереву)",
    variables: [
      { id: 1, name: "Семя" },
      { id: 2, name: "Росток" },
      { id: 3, name: "Молодое растение" },
      { id: 4, name: "Взрослое дерево" },
      { id: 5, name: "Старое дерево" },
    ],
  },
  {
    id: 58,
    category: "age",
    question: "Отсортируйте этапы взросления лошади",
    variables: [
      { id: 1, name: "Жеребенок" },
      { id: 2, name: "Молодая лошадь" },
      { id: 3, name: "Взрослая лошадь" },
      { id: 4, name: "Старшая лошадь" },
      { id: 5, name: "Пожилая лошадь" },
    ],
  },
  {
    id: 59,
    category: "age",
    question: "Отсортируйте игрушки по возрасту ребёнка, которому они подходят",
    variables: [
      { id: 1, name: "Погремушка" },
      { id: 2, name: "Кубики" },
      { id: 3, name: "Конструктор" },
      { id: 4, name: "Настольная игра" },
      { id: 5, name: "Сложный пазл" },
    ],
  },
  {
    id: 60,
    category: "historicalOrder",
    question: "Отсортируйте важные события России по времени",
    variables: [
      { id: 1, name: "Крещение Руси" },
      { id: 2, name: "Монгольское нашествие" },
      { id: 3, name: "Правление Петра I" },
      { id: 4, name: "Революция 1917 года" },
      { id: 5, name: "Распад СССР" },
    ],
  },
  {
    id: 61,
    category: "historicalOrder",
    question: "Отсортируйте ключевые изобретения",
    variables: [
      { id: 1, name: "Колесо" },
      { id: 2, name: "Печатный станок" },
      { id: 3, name: "Электрическая лампа" },
      { id: 4, name: "Телефон" },
      { id: 5, name: "Компьютер" },
    ],
  },
  {
    id: 62,
    category: "historicalOrder",
    question: "Отсортируйте эпохи в истории искусства",
    variables: [
      { id: 1, name: "Античность" },
      { id: 2, name: "Средневековье" },
      { id: 3, name: "Возрождение" },
      { id: 4, name: "Барокко" },
      { id: 5, name: "Современное искусство" },
    ],
  },
  {
    id: 63,
    category: "historicalOrder",
    question: "Отсортируйте события французской истории",
    variables: [
      { id: 1, name: "Королевство Франция" },
      { id: 2, name: "Великая французская революция" },
      { id: 3, name: "Наполеоновские войны" },
      { id: 4, name: "Первая мировая война" },
      { id: 5, name: "Вторая мировая война" },
    ],
  },
  {
    id: 64,
    category: "historicalOrder",
    question: "Отсортируйте изобретения транспорта по времени",
    variables: [
      { id: 1, name: "Колесо" },
      { id: 2, name: "Паровоз" },
      { id: 3, name: "Автомобиль" },
      { id: 4, name: "Самолет" },
      { id: 5, name: "Космический корабль" },
    ],
  },
  {
    id: 65,
    category: "historicalOrder",
    question: "Отсортируйте правителей по времени правления",
    variables: [
      { id: 1, name: "Юлий Цезарь" },
      { id: 2, name: "Август" },
      { id: 3, name: "Карл Великий" },
      { id: 4, name: "Наполеон Бонапарт" },
      { id: 5, name: "Виктор Эммануил II" },
    ],
  },
  {
    id: 66,
    category: "historicalOrder",
    question: "Отсортируйте открытия в космосе",
    variables: [
      { id: 1, name: "Первый спутник" },
      { id: 2, name: "Первый человек в космосе" },
      { id: 3, name: "Первый выход в открытый космос" },
      { id: 4, name: "Высадка на Луну" },
      { id: 5, name: "Международная космическая станция" },
    ],
  },
  {
    id: 67,
    category: "historicalOrder",
    question: "Отсортируйте важные события Древнего мира",
    variables: [
      { id: 1, name: "Возникновение письменности" },
      { id: 2, name: "Строительство пирамид" },
      { id: 3, name: "Правление Александра Македонского" },
      { id: 4, name: "Римская республика" },
      { id: 5, name: "Падение Римской империи" },
    ],
  },
  {
    id: 68,
    category: "historicalOrder",
    question: "Отсортируйте открытия в области науки",
    variables: [
      { id: 1, name: "Геоцентрическая модель Птолемея" },
      { id: 2, name: "Гелиоцентрическая модель Коперника" },
      { id: 3, name: "Законы Ньютона" },
      { id: 4, name: "Теория относительности Эйнштейна" },
      { id: 5, name: "Расшифровка ДНК" },
    ],
  },
  {
    id: 69,
    category: "lifeCycle",
    question: "Отсортируйте жизненный цикл бабочки",
    variables: [
      { id: 1, name: "Яйцо" },
      { id: 2, name: "Гусеница" },
      { id: 3, name: "Куколка" },
      { id: 4, name: "Взрослая бабочка" },
      { id: 5, name: "Размножение" },
    ],
  },
  {
    id: 70,
    category: "lifeCycle",
    question: "Отсортируйте жизненный цикл растения",
    variables: [
      { id: 1, name: "Семя" },
      { id: 2, name: "Росток" },
      { id: 3, name: "Молодое растение" },
      { id: 4, name: "Взрослое растение" },
      { id: 5, name: "Цветение и плодоношение" },
    ],
  },
  {
    id: 71,
    category: "lifeCycle",
    question: "Отсортируйте жизненный цикл лягушки",
    variables: [
      { id: 1, name: "Икра" },
      { id: 2, name: "Тадпол" },
      { id: 3, name: "Молодая лягушка" },
      { id: 4, name: "Взрослая лягушка" },
      { id: 5, name: "Размножение" },
    ],
  },
  {
    id: 72,
    category: "lifeCycle",
    question: "Отсортируйте жизненный цикл человека",
    variables: [
      { id: 1, name: "Младенец" },
      { id: 2, name: "Ребенок" },
      { id: 3, name: "Подросток" },
      { id: 4, name: "Взрослый" },
      { id: 5, name: "Пожилой" },
    ],
  },
  {
    id: 73,
    category: "lifeCycle",
    question: "Отсортируйте этапы приготовления вина",
    variables: [
      { id: 1, name: "Сбор винограда" },
      { id: 2, name: "Соковыжимание" },
      { id: 3, name: "Ферментация" },
      { id: 4, name: "Выдержка" },
      { id: 5, name: "Розлив в бутылки" },
    ],
  },
  {
    id: 74,
    category: "lifeCycle",
    question: "Отсортируйте этапы развития смартфона",
    variables: [
      { id: 1, name: "Идея" },
      { id: 2, name: "Прототип" },
      { id: 3, name: "Тестирование" },
      { id: 4, name: "Производство" },
      { id: 5, name: "Продажа" },
    ],
  },
  {
    id: 75,
    category: "process",
    question: "Отсортируйте этапы приготовления бутерброда",
    variables: [
      { id: 1, name: "Взять хлеб" },
      { id: 2, name: "Намазать масло" },
      { id: 3, name: "Добавить начинку" },
      { id: 4, name: "Накрыть вторым ломтем хлеба" },
      { id: 5, name: "Нарезать и подать" },
    ],
  },
  {
    id: 76,
    category: "process",
    question: "Отсортируйте этапы запуска приложения",
    variables: [
      { id: 1, name: "Написать код" },
      { id: 2, name: "Скомпилировать проект" },
      { id: 3, name: "Запустить локально" },
      { id: 4, name: "Проверить ошибки" },
      { id: 5, name: "Развернуть на сервер" },
    ],
  },
  {
    id: 77,
    category: "process",
    question: "Отсортируйте этапы работы с документами",
    variables: [
      { id: 1, name: "Написать" },
      { id: 2, name: "Проверить" },
      { id: 3, name: "Отредактировать" },
      { id: 4, name: "Подписать" },
      { id: 5, name: "Отправить" },
    ],
  },
  {
    id: 78,
    category: "process",
    question: "Отсортируйте этапы приготовления салата",
    variables: [
      { id: 1, name: "Помыть овощи" },
      { id: 2, name: "Нарезать овощи" },
      { id: 3, name: "Добавить заправку" },
      { id: 4, name: "Перемешать" },
      { id: 5, name: "Подавать" },
    ],
  },
  {
    id: 79,
    category: "process",
    question: "Отсортируйте шаги установки программного обеспечения",
    variables: [
      { id: 1, name: "Скачать установочный файл" },
      { id: 2, name: "Запустить установку" },
      { id: 3, name: "Принять условия лицензии" },
      { id: 4, name: "Выбрать путь установки" },
      { id: 5, name: "Завершить установку" },
    ],
  },
  {
    id: 80,
    category: "process",
    question: "Отсортируйте этапы стирки одежды",
    variables: [
      { id: 1, name: "Сортировка одежды" },
      { id: 2, name: "Загрузка в стиральную машину" },
      { id: 3, name: "Добавление порошка" },
      { id: 4, name: "Выбор режима стирки" },
      { id: 5, name: "Сушка" },
    ],
  },
  {
    id: 81,
    category: "countriesSize",
    question: "Отсортируйте страны по территории (от наименьшей к наибольшей)",
    variables: [
      { id: 1, name: "Ватикан" },
      { id: 2, name: "Монако" },
      { id: 3, name: "Сан-Марино" },
      { id: 4, name: "Люксембург" },
      { id: 5, name: "Мальта" },
    ],
  },
  {
    id: 82,
    category: "countriesSize",
    question:
      "Отсортируйте страны Европы по площади (от наименьшей к наибольшей)",
    variables: [
      { id: 1, name: "Лихтенштейн" },
      { id: 2, name: "Бельгия" },
      { id: 3, name: "Чехия" },
      { id: 4, name: "Польша" },
      { id: 5, name: "Франция" },
    ],
  },
  {
    id: 83,
    category: "countriesSize",
    question:
      "Отсортируйте страны Азии по территории (от наименьшей к наибольшей)",
    variables: [
      { id: 1, name: "Бахрейн" },
      { id: 2, name: "Кувейт" },
      { id: 3, name: "Япония" },
      { id: 4, name: "Индия" },
      { id: 5, name: "Китай" },
    ],
  },
  {
    id: 84,
    category: "countriesSize",
    question:
      "Отсортируйте страны Южной Америки по территории (от наименьшей к наибольшей)",
    variables: [
      { id: 1, name: "Суринам" },
      { id: 2, name: "Парагвай" },
      { id: 3, name: "Чили" },
      { id: 4, name: "Аргентина" },
      { id: 5, name: "Бразилия" },
    ],
  },
  {
    id: 85,
    category: "countriesSize",
    question:
      "Отсортируйте страны Северной Америки по площади (от наименьшей к наибольшей)",
    variables: [
      { id: 1, name: "Сальвадор" },
      { id: 2, name: "Гватемала" },
      { id: 3, name: "Мексика" },
      { id: 4, name: "США" },
      { id: 5, name: "Канада" },
    ],
  },
  {
    id: 86,
    category: "countriesSize",
    question:
      "Отсортируйте крупнейшие страны мира по территории (от наименьшей к наибольшей)",
    variables: [
      { id: 1, name: "Бразилия" },
      { id: 2, name: "США" },
      { id: 3, name: "Китай" },
      { id: 4, name: "Канада" },
      { id: 5, name: "Россия" },
    ],
  },
  {
    id: 87,
    category: "countriesSize",
    question:
      "Отсортируйте страны по площади Европы (от наименьшей к наибольшей)",
    variables: [
      { id: 1, name: "Португалия" },
      { id: 2, name: "Швеция" },
      { id: 3, name: "Испания" },
      { id: 4, name: "Франция" },
      { id: 5, name: "Украина" },
    ],
  },
  {
    id: 88,
    category: "countriesPopulation",
    question: "Отсортируйте страны по населению от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Ватикан" },
      { id: 2, name: "Монако" },
      { id: 3, name: "Лихтенштейн" },
      { id: 4, name: "Сан-Марино" },
      { id: 5, name: "Мальта" },
    ],
  },
  {
    id: 89,
    category: "countriesPopulation",
    question:
      "Отсортируйте страны Европы по населению от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Исландия" },
      { id: 2, name: "Норвегия" },
      { id: 3, name: "Швеция" },
      { id: 4, name: "Испания" },
      { id: 5, name: "Германия" },
    ],
  },
  {
    id: 90,
    category: "countriesPopulation",
    question:
      "Отсортируйте страны Азии по населению от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Бутан" },
      { id: 2, name: "Непал" },
      { id: 3, name: "Япония" },
      { id: 4, name: "Индонезия" },
      { id: 5, name: "Китай" },
    ],
  },
  {
    id: 91,
    category: "countriesPopulation",
    question:
      "Отсортируйте страны Африки по населению от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Сейшельские острова" },
      { id: 2, name: "Ботсвана" },
      { id: 3, name: "Кения" },
      { id: 4, name: "Эфиопия" },
      { id: 5, name: "Нигерия" },
    ],
  },
  {
    id: 92,
    category: "countriesPopulation",
    question:
      "Отсортируйте страны Южной Америки по населению от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Суринам" },
      { id: 2, name: "Парагвай" },
      { id: 3, name: "Чили" },
      { id: 4, name: "Аргентина" },
      { id: 5, name: "Бразилия" },
    ],
  },
  {
    id: 93,
    category: "countriesPopulation",
    question:
      "Отсортируйте страны Северной Америки по населению от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Сальвадор" },
      { id: 2, name: "Гватемала" },
      { id: 3, name: "Мексика" },
      { id: 4, name: "США" },
      { id: 5, name: "Канада" },
    ],
  },
  {
    id: 94,
    category: "countriesPopulation",
    question:
      "Отсортируйте страны Океании по населению от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Науру" },
      { id: 2, name: "Фиджи" },
      { id: 3, name: "Новая Зеландия" },
      { id: 4, name: "Папуа-Новая Гвинея" },
      { id: 5, name: "Австралия" },
    ],
  },
  {
    id: 95,
    category: "countriesPopulation",
    question:
      "Отсортируйте крупнейшие страны мира по населению от наибольшего к наименьшему",
    variables: [
      { id: 1, name: "Китай" },
      { id: 2, name: "Индия" },
      { id: 3, name: "США" },
      { id: 4, name: "Бразилия" },
      { id: 5, name: "Россия" },
    ],
  },
  {
    id: 96,
    category: "countriesPopulation",
    question: "Отсортируйте страны Европы от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Португалия" },
      { id: 2, name: "Греция" },
      { id: 3, name: "Нидерланды" },
      { id: 4, name: "Швеция" },
      { id: 5, name: "Франция" },
    ],
  },
  {
    id: 97,
    category: "countriesPopulation",
    question:
      "Отсортируйте страны Ближнего Востока по населению от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Бахрейн" },
      { id: 2, name: "Кувейт" },
      { id: 3, name: "ОАЭ" },
      { id: 4, name: "Саудовская Аравия" },
      { id: 5, name: "Иран" },
    ],
  },
  {
    id: 98,
    category: "planets",
    question:
      "Отсортируйте планеты Солнечной системы по расстоянию от Солнца от ближайшей к самой дальней",
    variables: [
      { id: 1, name: "Меркурий" },
      { id: 2, name: "Венера" },
      { id: 3, name: "Земля" },
      { id: 4, name: "Марс" },
      { id: 5, name: "Юпитер" },
      { id: 6, name: "Сатурн" },
      { id: 7, name: "Уран" },
      { id: 8, name: "Нептун" },
    ],
  },
  {
    id: 99,
    category: "planets",
    question:
      "Отсортируйте планеты по размеру (радиус) от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Меркурий" },
      { id: 2, name: "Марс" },
      { id: 3, name: "Венера" },
      { id: 4, name: "Земля" },
      { id: 5, name: "Уран" },
      { id: 6, name: "Нептун" },
      { id: 7, name: "Сатурн" },
      { id: 8, name: "Юпитер" },
    ],
  },
  {
    id: 100,
    category: "planets",
    question: "Отсортируйте планеты по массе от наименьшей к наибольшей",
    variables: [
      { id: 1, name: "Меркурий" },
      { id: 2, name: "Марс" },
      { id: 3, name: "Венера" },
      { id: 4, name: "Земля" },
      { id: 5, name: "Уран" },
      { id: 6, name: "Нептун" },
      { id: 7, name: "Сатурн" },
      { id: 8, name: "Юпитер" },
    ],
  },
  {
    id: 101,
    category: "planets",
    question:
      "Отсортируйте планеты по продолжительности вращения вокруг своей оси (сутки) от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Юпитер" },
      { id: 2, name: "Нептун" },
      { id: 3, name: "Уран" },
      { id: 4, name: "Марс" },
      { id: 5, name: "Венера" },
      { id: 6, name: "Земля" },
      { id: 7, name: "Сатурн" },
      { id: 8, name: "Меркурий" },
    ],
  },
  {
    id: 102,
    category: "planets",
    question:
      "Отсортируйте планеты по количеству спутников от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Венера" },
      { id: 2, name: "Земля" },
      { id: 3, name: "Марс" },
      { id: 4, name: "Нептун" },
      { id: 5, name: "Уран" },
      { id: 6, name: "Юпитер" },
      { id: 7, name: "Сатурн" },
    ],
  },
  {
    id: 103,
    category: "planets",
    question:
      "Отсортируйте планеты по средней температуре на поверхности от самой низкой к самой высокой",
    variables: [
      { id: 1, name: "Уран" },
      { id: 2, name: "Нептун" },
      { id: 3, name: "Марс" },
      { id: 4, name: "Сатурн" },
      { id: 5, name: "Юпитер" },
      { id: 6, name: "Земля" },
      { id: 7, name: "Венера" },
      { id: 8, name: "Меркурий" },
    ],
  },
  {
    id: 104,
    category: "planets",
    question:
      "Отсортируйте планеты по периоду обращения вокруг Солнца от наименьшего к наибольшему",
    variables: [
      { id: 1, name: "Меркурий" },
      { id: 2, name: "Венера" },
      { id: 3, name: "Земля" },
      { id: 4, name: "Марс" },
      { id: 5, name: "Юпитер" },
      { id: 6, name: "Сатурн" },
      { id: 7, name: "Уран" },
      { id: 8, name: "Нептун" },
    ],
  },
  {
    id: 105,
    category: "planets",
    question:
      "Отсортируйте планеты по удалённости от Земли на момент их максимального сближения (от ближней к дальней)",
    variables: [
      { id: 1, name: "Венера" },
      { id: 2, name: "Марс" },
      { id: 3, name: "Меркурий" },
      { id: 4, name: "Юпитер" },
      { id: 5, name: "Сатурн" },
      { id: 6, name: "Уран" },
      { id: 7, name: "Нептун" },
    ],
  },
  {
    id: 106,
    category: "planets",
    question:
      "Отсортируйте планеты по скорости вращения вокруг Солнца (орбитальная скорость) от наименьшей к наибольшей",
    variables: [
      { id: 1, name: "Нептун" },
      { id: 2, name: "Уран" },
      { id: 3, name: "Сатурн" },
      { id: 4, name: "Юпитер" },
      { id: 5, name: "Марс" },
      { id: 6, name: "Земля" },
      { id: 7, name: "Венера" },
      { id: 8, name: "Меркурий" },
    ],
  },
];
