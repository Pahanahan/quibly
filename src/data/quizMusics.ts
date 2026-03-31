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
  {
    id: 11,
    question: "Угадай мелодию",
    answers: ["Sunny", "Rasputin", "Daddy Cool", "Rivers of Babylon"],
    rightAnswer: "Sunny",
    srcMusic: "/quiz-musics/0011_Boney_M_Sunny.m4a",
  },
  {
    id: 12,
    question: "Угадай мелодию",
    answers: [
      "Angel of the City",
      "No Easy Way Out",
      "The Touch",
      "Danger Zone",
    ],
    rightAnswer: "Angel of the City",
    srcMusic: "/quiz-musics/0012_Robert_Tepper_Angel_Of_The_City.m4a",
  },
  {
    id: 13,
    question: "Угадай мелодию",
    answers: [
      "We Are the Champions",
      "Another One Bites the Dust",
      "We Will Rock You",
      "Radio Ga Ga",
    ],
    rightAnswer: "We Are the Champions",
    srcMusic: "/quiz-musics/0013_Queen_We_Are_The_Champions.m4a",
  },
  {
    id: 14,
    question: "Угадай мелодию",
    answers: [
      "We Will Rock You",
      "Another One Bites the Dust",
      "I Want It All",
      "The Show Must Go On",
    ],
    rightAnswer: "We Will Rock You",
    srcMusic: "/quiz-musics/0014_Queen_We_Will_Rock_You.m4a",
  },
  {
    id: 15,
    question: "Угадай мелодию",
    answers: [
      "Утренняя гимнастика",
      "Кони привередливые",
      "Он не вернулся из боя",
      "Песня о друге",
    ],
    rightAnswer: "Утренняя гимнастика",
    srcMusic: "/quiz-musics/0015_Vladimir_Vysockijj_Utrennyaya_gimnastika.m4a",
  },
  {
    id: 16,
    question: "Угадай мелодию",
    answers: ["Just Blue", "Magic Fly", "Running in the City", "Deliverance"],
    rightAnswer: "Just Blue",
    srcMusic: "/quiz-musics/0016_Space_Just_Blue.m4a",
  },
  {
    id: 17,
    question: "Угадай мелодию",
    answers: [
      "Don't Stop Me Now",
      "Bohemian Rhapsody",
      "I Want to Break Free",
      "Somebody to Love",
    ],
    rightAnswer: "Don't Stop Me Now",
    srcMusic: "/quiz-musics/0017_Queen_Dont_Stop_Me_Now.m4a",
  },
  {
    id: 18,
    question: "Угадай мелодию",
    answers: ["Highway to Hell", "Back in Black", "Thunderstruck", "T.N.T."],
    rightAnswer: "Highway to Hell",
    srcMusic: "/quiz-musics/0018_ACDC_Highway_to_Hell.m4a",
  },
  {
    id: 19,
    question: "Угадай мелодию",
    answers: [
      "Dschinghis Khan",
      "Moskau",
      "Rocking Son of Dschinghis Khan",
      "Loreley",
    ],
    rightAnswer: "Dschinghis Khan",
    srcMusic: "/quiz-musics/0019_Dschinghis_Khan_Dschinghis_Khan.m4a",
  },
  {
    id: 20,
    question: "Угадай мелодию",
    answers: [
      "One Way Ticket",
      "Eruption",
      "Rock You Like a Hurricane",
      "Smoke on the Water",
    ],
    rightAnswer: "One Way Ticket",
    srcMusic: "/quiz-musics/0020_Eruption_One_Way_Ticket.m4a",
  },
  {
    id: 21,
    question: "Угадай мелодию",
    answers: [
      "Синяя песня",
      "Катюша",
      "В лесу родилась ёлочка",
      "Подмосковные вечера",
    ],
    rightAnswer: "Синяя песня",
    srcMusic: "/quiz-musics/0021_Zdravstvujj_pesnya_Sinyaya_pesnya.m4a",
  },
  {
    id: 22,
    question: "Угадай мелодию",
    answers: [
      "Gimme! Gimme! Gimme!",
      "Dancing Queen",
      "Mamma Mia",
      "Take a Chance on Me",
    ],
    rightAnswer: "Gimme! Gimme! Gimme!",
    srcMusic: "/quiz-musics/0022_ABBA_Gimme_Gimme_Gimme.m4a",
  },
  {
    id: 23,
    question: "Угадай мелодию",
    answers: [
      "Galactica",
      "Future Woman",
      "Electric Delight",
      "On the Road Again",
    ],
    rightAnswer: "Galactica",
    srcMusic: "/quiz-musics/0023_Rockets_Galactica.m4a",
  },
  {
    id: 24,
    question: "Угадай мелодию",
    answers: [
      "Мои года — моё богатство",
      "Дорогой длинною",
      "Синяя вечность",
      "Осенний вальс",
    ],
    rightAnswer: "Мои года — моё богатство",
    srcMusic: "/quiz-musics/0024_Vakhtang_Kikabidze_Moi_goda_moe_bogatstvo.m4a",
  },
  {
    id: 25,
    question: "Угадай мелодию",
    answers: ["Back in Black", "Thunderstruck", "Highway to Hell", "T.N.T."],
    rightAnswer: "Back in Black",
    srcMusic: "/quiz-musics/0025_ACDC_Back_In_Black.m4a",
  },
  {
    id: 26,
    question: "Угадай мелодию",
    answers: ["Hands Up", "D.I.S.C.O.", "Hello Hello", "Crazy Music"],
    rightAnswer: "Hands Up",
    srcMusic: "/quiz-musics/0026_Ottawan_Hands_Up.m4a",
  },
  {
    id: 27,
    question: "Угадай мелодию",
    answers: [
      "Мечта сбывается",
      "Белый кораблик",
      "Надежда",
      "Песня о счастье",
    ],
    rightAnswer: "Мечта сбывается",
    srcMusic: "/quiz-musics/0027_YUrijj_Antonov_Mechta_sbyvaetsya.m4a",
  },
  {
    id: 28,
    question: "Угадай мелодию",
    answers: ["Lovemachine", "Fly with Me", "Lovestory", "World of Today"],
    rightAnswer: "Lovemachine",
    srcMusic: "/quiz-musics/0028_Supermax_Lovemachine.m4a",
  },
  {
    id: 29,
    question: "Угадай мелодию",
    answers: [
      "Восьмиклассница",
      "Перемен",
      "Пачка сигарет",
      "Звезда по имени Солнце",
    ],
    rightAnswer: "Восьмиклассница",
    srcMusic: "/quiz-musics/0029_Viktor_Cojj_Vosmiklassnica.m4a",
  },
  {
    id: 30,
    question: "Угадай мелодию",
    answers: [
      "Bad to the Bone",
      "Move It On Over",
      "Who Do You Love?",
      "I Drink Alone",
    ],
    rightAnswer: "Bad to the Bone",
    srcMusic: "/quiz-musics/0030_George_Thorogood_Bad_To_The_Bone.m4a",
  },
  {
    id: 31,
    question: "Угадай мелодию",
    answers: ["Felicità", "Ci Sara", "Sempre Sempre", "Nostalgia Canaglia"],
    rightAnswer: "Felicità",
    srcMusic: "/quiz-musics/0031_Al_Bano_Felicita.m4a",
  },
  {
    id: 32,
    question: "Угадай мелодию",
    answers: [
      "Не волнуйтесь, тётя",
      "Люди встречаются",
      "Трава у дома",
      "Мой адрес — Советский Союз",
    ],
    rightAnswer: "Не волнуйтесь, тётя",
    srcMusic: "/quiz-musics/0032_Vesjolye_rebyata_Ne_volnujjtes_tjotya.m4a",
  },
  {
    id: 33,
    question: "Угадай мелодию",
    answers: ["Eye in the Sky", "Sirius", "Time", "Games People Play"],
    rightAnswer: "Eye in the Sky",
    srcMusic: "/quiz-musics/0033_The_Alan_Parsons_Project_Eye_In_The_Sky.m4a",
  },
  {
    id: 34,
    question: "Угадай мелодию",
    answers: ["Трава у дома", "Синяя песня", "Лунная дорожка", "Звёздная ночь"],
    rightAnswer: "Трава у дома",
    srcMusic: "/quiz-musics/0034_Zemlyane_Trava_u_doma.m4a",
  },
  {
    id: 35,
    question: "Угадай мелодию",
    answers: ["Миллион алых роз", "Арлекино", "Примадонна", "Миллион лет"],
    rightAnswer: "Миллион алых роз",
    srcMusic: "/quiz-musics/0035_Alla_Pugachjova_Million_alykh_roz.m4a",
  },
  {
    id: 36,
    question: "Угадай мелодию",
    answers: [
      "Living on Video",
      "Dolce Vita",
      "Are 'Friends' Electric?",
      "I.O.U.",
    ],
    rightAnswer: "Living on Video",
    srcMusic: "/quiz-musics/0036_Trans-X_Living_On_Video.m4a",
  },
  {
    id: 37,
    question: "Угадай мелодию",
    answers: [
      "Holding Out for a Hero",
      "Total Eclipse of the Heart",
      "It's a Heartache",
      "Lost in France",
    ],
    rightAnswer: "Holding Out for a Hero",
    srcMusic: "/quiz-musics/0037_Bonnie_Tyler_Holding_Out_For_A_Hero.m4a",
  },
  {
    id: 38,
    question: "Угадай мелодию",
    answers: [
      "I Want to Break Free",
      "Another One Bites the Dust",
      "Radio Ga Ga",
      "We Will Rock You",
    ],
    rightAnswer: "I Want to Break Free",
    srcMusic: "/quiz-musics/0038_Queen_I_Want_To_Break_Free.m4a",
  },
  {
    id: 39,
    question: "Угадай мелодию",
    answers: [
      "Forever Young",
      "Big in Japan",
      "Sounds Like a Melody",
      "Dance with Me",
    ],
    rightAnswer: "Forever Young",
    srcMusic: "/quiz-musics/0039_Alphaville_Forever_Young.m4a",
  },
  {
    id: 40,
    question: "Угадай мелодию",
    answers: [
      "You Think You Are a Man",
      "Native Love",
      "Love Reaction",
      "Baby Doll",
    ],
    rightAnswer: "You Think You Are a Man",
    srcMusic: "/quiz-musics/0040_Divine_You_Think_You_Are_A_Man.m4a",
  },
  {
    id: 41,
    question: "Угадай мелодию",
    answers: [
      "Летящей походкой",
      "Мечта сбывается",
      "Белый теплоход",
      "Крыша дома твоего",
    ],
    rightAnswer: "Летящей походкой",
    srcMusic: "/quiz-musics/0041_YUrijj_Antonov_Letyashhejj_pokhodkojj.m4a",
  },
  {
    id: 42,
    question: "Угадай мелодию",
    answers: [
      "You're a Woman",
      "Pretty Young Girl",
      "I Wanna Hear Your Heartbeat",
      "Come Back and Stay",
    ],
    rightAnswer: "You're a Woman",
    srcMusic: "/quiz-musics/0042_Bad_Boys_Blue_Youre_a_Woman.m4a",
  },
  {
    id: 43,
    question: "Угадай мелодию",
    answers: [
      "Maria Magdalena",
      "In the Heat of the Night",
      "Everlasting Love",
      "Little Girl",
    ],
    rightAnswer: "Maria Magdalena",
    srcMusic: "/quiz-musics/0043_Sandra_Maria_Magdalena.m4a",
  },
  {
    id: 44,
    question: "Угадай мелодию",
    answers: ["Ночное рандеву", "Замыкая круг", "Усталое такси", "Старый друг"],
    rightAnswer: "Ночное рандеву",
    srcMusic: "/quiz-musics/0044_Kris_Kelmi_Nochnoe_randevu_na_bulvare_roz.m4a",
  },
  {
    id: 45,
    question: "Угадай мелодию",
    answers: [
      "In the Heat of the Night",
      "Maria Magdalena",
      "Everlasting Love",
      "Secret Land",
    ],
    rightAnswer: "In the Heat of the Night",
    srcMusic: "/quiz-musics/0045_Sandra_In_The_Heat_Of_The_Night.m4a",
  },
  {
    id: 46,
    question: "Угадай мелодию",
    answers: [
      "Take On Me",
      "The Sun Always Shines on T.V.",
      "Hunting High and Low",
      "Cry Wolf",
    ],
    rightAnswer: "Take On Me",
    srcMusic: "/quiz-musics/0046_A-Ha_Take_On_Me.m4a",
  },
  {
    id: 47,
    question: "Угадай мелодию",
    answers: [
      "Cheri Cheri Lady",
      "You're My Heart, You're My Soul",
      "Brother Louie",
      "Atlantis Is Calling (S.O.S. for Love)",
    ],
    rightAnswer: "Cheri Cheri Lady",
    srcMusic: "/quiz-musics/0047_Modern_Talking_Cheri_Cheri_Lady.m4a",
  },
  {
    id: 48,
    question: "Угадай мелодию",
    answers: [
      "На улице Каштановой",
      "Летящей походкой",
      "Мечта сбывается",
      "Белый теплоход",
    ],
    rightAnswer: "На улице Каштановой",
    srcMusic: "/quiz-musics/0048_Antonov_YUrijj_Na_ulice_Kashtanovojj.m4a",
  },
  {
    id: 49,
    question: "Угадай мелодию",
    answers: ["Desire", "Aliens", "Chance to Desire", "Vampires"],
    rightAnswer: "Desire",
    srcMusic: "/quiz-musics/0049_Radiorama_Desire.m4a",
  },
  {
    id: 50,
    question: "Угадай мелодию",
    answers: [
      "You're My Heart, You're My Soul",
      "Cheri Cheri Lady",
      "Brother Louie",
      "Atlantis Is Calling (S.O.S. for Love)",
    ],
    rightAnswer: "You're My Heart, You're My Soul",
    srcMusic:
      "/quiz-musics/0050_Modern_Talking_Youre_My_Heart_Youre_My_Soul.m4a",
  },
  {
    id: 51,
    question: "Угадай мелодию",
    answers: [
      "In the Army Now",
      "Rockin' All Over the World",
      "Whatever You Want",
      "Down Down",
    ],
    rightAnswer: "In the Army Now",
    srcMusic: "/quiz-musics/0051_Status_Quo_In_The_Army_Now.m4a",
  },
  {
    id: 52,
    question: "Угадай мелодию",
    answers: ["Комарово", "Малиновка", "Песня про зайцев", "Синий платочек"],
    rightAnswer: "Комарово",
    srcMusic: "/quiz-musics/0052_Igor_Sklyar_Komarovo.m4a",
  },
  {
    id: 53,
    question: "Угадай мелодию",
    answers: [
      "Strangers by Night",
      "Heartbreak Hotel",
      "Cause You Are Young",
      "Backseat of Your Cadillac",
    ],
    rightAnswer: "Strangers by Night",
    srcMusic: "/quiz-musics/0053_C_C_Catch_Strangers_by_Night.m4a",
  },
  {
    id: 54,
    question: "Угадай мелодию",
    answers: ["Луна-Луна", "Хуторянка", "Ягода-малина", "Миллион роз"],
    rightAnswer: "Луна-Луна",
    srcMusic: "/quiz-musics/0054_Rotaru_Sofiya_Luna-luna.m4a",
  },
  {
    id: 55,
    question: "Угадай мелодию",
    answers: ["Where Are You", "Stay With Me", "Into the Night", "Heartbeat"],
    rightAnswer: "Where Are You",
    srcMusic: "/quiz-musics/0055_16_Bit_Where_Are_You.m4a",
  },
  {
    id: 56,
    question: "Угадай мелодию",
    answers: [
      "The Final Countdown",
      "Carrie",
      "Rock the Night",
      "Superstitious",
    ],
    rightAnswer: "The Final Countdown",
    srcMusic: "/quiz-musics/0056_Europe_The_Final_Countdown.m4a",
  },
  {
    id: 57,
    question: "Угадай мелодию",
    answers: [
      "Автомобили, автомобили — буквально всё заполонили",
      "Люди встречаются",
      "Трава у дома",
      "Мой адрес — Советский Союз",
    ],
    rightAnswer: "Автомобили, автомобили — буквально всё заполонили",
    srcMusic:
      "/quiz-musics/0057_Vesjolye_rebyata_Avtomobili_avtomobili_bukvalno_vsjo_zapolonili.m4a",
  },
  {
    id: 58,
    question: "Угадай мелодию",
    answers: [
      "Cause You Are Young",
      "Strangers by Night",
      "Heartbreak Hotel",
      "Backseat of Your Cadillac",
    ],
    rightAnswer: "Cause You Are Young",
    srcMusic: "/quiz-musics/0058_C_C_Catch_Cause_You_Are_Young.m4a",
  },
  {
    id: 59,
    question: "Угадай мелодию",
    answers: ["Аэро́порт", "Офицеры", "Москва слезам не верит", "Моя любовь"],
    rightAnswer: "Аэро́порт",
    srcMusic: "/quiz-musics/0059_Aleksandr_Brykin_Ajeroport.m4a",
  },
  {
    id: 60,
    question: "Угадай мелодию",
    answers: [
      "Закрой за мной дверь, я ухожу",
      "Пачка сигарет",
      "Звезда по имени Солнце",
      "Перемен",
    ],
    rightAnswer: "Закрой за мной дверь, я ухожу",
    srcMusic:
      "/quiz-musics/0060_Viktor_Cojj_Zakrojj_za_mnojj_dver_ya_ukhozhu.m4a",
  },
  {
    id: 61,
    question: "Угадай мелодию",
    answers: [
      "Бологое",
      "Розовый вечер",
      "Как прекрасен этот мир",
      "Снег кружится",
    ],
    rightAnswer: "Бологое",
    srcMusic: "/quiz-musics/0061_Veselye_rebyata_Bologoe.m4a",
  },
  {
    id: 62,
    question: "Угадай мелодию",
    answers: [
      "Brother Louie",
      "Cheri Cheri Lady",
      "You're My Heart, You're My Soul",
      "Atlantis Is Calling (S.O.S. for Love)",
    ],
    rightAnswer: "Brother Louie",
    srcMusic: "/quiz-musics/0062_Modern_Talking_Brother_Louie.m4a",
  },
  {
    id: 63,
    question: "Угадай мелодию",
    answers: [
      "Снится мне деревня",
      "Родительский дом",
      "Где-то далеко",
      "Опустела без тебя земля",
    ],
    rightAnswer: "Снится мне деревня",
    srcMusic: "/quiz-musics/0063_Sergejj_Belikov_Snitsya_mne_derevnya.m4a",
  },
  {
    id: 64,
    question: "Угадай мелодию",
    answers: [
      "Never Gonna Give You Up",
      "Together Forever",
      "Whenever You Need Somebody",
      "She Wants to Dance with Me",
    ],
    rightAnswer: "Never Gonna Give You Up",
    srcMusic: "/quiz-musics/0064_Rick_Astley_Never_Gonna_Give_You_Up.m4a",
  },
  {
    id: 65,
    question: "Угадай мелодию",
    answers: ["Boys", "All of Me", "Hot Girl", "Sexy Girl"],
    rightAnswer: "Boys",
    srcMusic: "/quiz-musics/0065_Sabrina_Boys.m4a",
  },
  {
    id: 66,
    question: "Угадай мелодию",
    answers: [
      "Остров детства",
      "Листья жёлтые",
      "Зелёный свет",
      "Город детства",
    ],
    rightAnswer: "Остров детства",
    srcMusic: "/quiz-musics/0066_Mikhail_Boyarskijj_Ostrov_detstva.m4a",
  },
  {
    id: 67,
    question: "Угадай мелодию",
    answers: [
      "В наших глазах",
      "Группа крови",
      "Пачка сигарет",
      "Звезда по имени Солнце",
    ],
    rightAnswer: "В наших глазах",
    srcMusic: "/quiz-musics/0067_Kino_V_nashikh_glazakh.m4a",
  },
  {
    id: 68,
    question: "Угадай мелодию",
    answers: [
      "Яблоки на снегу",
      "Зимний сад",
      "Листья жёлтые",
      "Снег идёт",
    ],
    rightAnswer: "Яблоки на снегу",
    srcMusic: "/quiz-musics/0068_Mikhail_Muromov_YAbloki_na_snegu.m4a",
  },
  {
    id: 69,
    question: "Угадай мелодию",
    answers: [
      "Girl You Know It's True",
      "Blame It on the Rain",
      "Girl I'm Gonna Miss You",
      "Baby Don't Forget My Number",
    ],
    rightAnswer: "Girl You Know It's True",
    srcMusic: "/quiz-musics/0069_Milli_Vanilli_Girl_You_Know_Its_True.m4a",
  },
  {
    id: 70,
    question: "Угадай мелодию",
    answers: [
      "Розовые розы Светке Соколовой",
      "Автомобили, автомобили — буквально всё заполонили",
      "Не волнуйтесь, тётя",
      "Люди встречаются",
    ],
    rightAnswer: "Розовые розы Светке Соколовой",
    srcMusic:
      "/quiz-musics/0070_Vesjolye_rebyata_Rozovye_rozy_Svetke_Sokolovojj.m4a",
  },
  {
    id: 71,
    question: "Угадай мелодию",
    answers: ["Чистые пруды", "Перемен!", "Я хочу быть с тобой", "Город золотой"],
    rightAnswer: "Чистые пруды",
    srcMusic: "/quiz-musics/0071_Igor_Talkov_CHistye_prudy.m4a",
  },
  {
    id: 72,
    question: "Угадай мелодию",
    answers: ["Группа крови", "Пачка сигарет", "Звезда по имени Солнце", "Перемен!"],
    rightAnswer: "Группа крови",
    srcMusic: "/quiz-musics/0072_Viktor_Cojj_Gruppa_krovi.m4a",
  },
  {
    id: 73,
    question: "Угадай мелодию",
    answers: ["Букет", "Листья жёлтые", "Остров детства", "Родительский дом"],
    rightAnswer: "Букет",
    srcMusic: "/quiz-musics/0073_Aleksandr_Barygin_Buket.m4a",
  },
  {
    id: 74,
    question: "Угадай мелодию",
    answers: ["Зеленоглазое такси", "Город детства", "Снег кружится", "Яблони в цвету"],
    rightAnswer: "Зеленоглазое такси",
    srcMusic: "/quiz-musics/0074_Mikhail_Boyarskijj_Zelenoglazoe_taksi.m4a",
  },
  {
    id: 75,
    question: "Угадай мелодию",
    answers: ["Было, но прошло", "Лаванда", "Белая зима", "Музыка нас связала"],
    rightAnswer: "Было, но прошло",
    srcMusic: "/quiz-musics/0075_Sofiya_Rotaru_Bylo_no_proshlo.m4a",
  },
  {
    id: 76,
    question: "Угадай мелодию",
    answers: [
      "Around My Heart",
      "Maria Magdalena",
      "Self Control",
      "Cheri Cheri Lady",
    ],
    rightAnswer: "Around My Heart",
    srcMusic: "/quiz-musics/0076_Sandra_Around_My_Heart.m4a",
  },
  {
    id: 77,
    question: "Угадай мелодию",
    answers: [
      "Listen to Your Heart",
      "It Must Have Been Love",
      "Eternal Flame",
      "Total Eclipse of the Heart",
    ],
    rightAnswer: "Listen to Your Heart",
    srcMusic: "/quiz-musics/0077_Roxette_Listen_to_your_heart.m4a",
  },
  {
    id: 78,
    question: "Угадай мелодию",
    answers: ["The Race", "Chase", "Axel F", "Popcorn"],
    rightAnswer: "The Race",
    srcMusic: "/quiz-musics/0078_Yello_The_Race.m4a",
  },
  {
    id: 79,
    question: "Угадай мелодию",
    answers: ["Moscow Calling", "Wind of Change", "Still Loving You", "Rock You Like a Hurricane"],
    rightAnswer: "Moscow Calling",
    srcMusic: "/quiz-musics/0079_Gorky_Park_Moscow_Calling.m4a",
  },
  {
    id: 80,
    question: "Угадай мелодию",
    answers: ["Voyage, Voyage", "Self Control", "Blue Monday", "Sweet Dreams (Are Made of This)"],
    rightAnswer: "Voyage, Voyage",
    srcMusic: "/quiz-musics/0080_Desireless_Voyage_Voyage.m4a",
  },
  {
    id: 81,
    question: "Угадай мелодию",
    answers: ["Последнее письмо", "Крылья", "Гудбай, Америка", "Скованные одной цепью"],
    rightAnswer: "Последнее письмо",
    srcMusic: "/quiz-musics/0081_Nautilus_Pompilius_Poslednee_pismo.m4a",
  },
  {
    id: 82,
    question: "Угадай мелодию",
    answers: ["Белые розы", "Розовый вечер", "Седая ночь", "Детство"],
    rightAnswer: "Белые розы",
    srcMusic: "/quiz-musics/0082_YUrijj_SHatunov_Belye_rozy.m4a",
  },
  {
    id: 83,
    question: "Угадай мелодию",
    answers: ["Фантазёр", "Маруся", "Поздняя встреча", "Папиросы"],
    rightAnswer: "Фантазёр",
    srcMusic: "/quiz-musics/0083_YAroslav_Evdakimov_phantazjor.m4a",
  },
  {
    id: 84,
    question: "Угадай мелодию",
    answers: ["Ice Ice Baby", "Can't Touch This", "Baby Got Back", "Gin and Juice"],
    rightAnswer: "Ice Ice Baby",
    srcMusic: "/quiz-musics/0084_Vanilla_Ice_Ice_Ice_Baby.m4a",
  },
  {
    id: 85,
    question: "Угадай мелодию",
    answers: [
      "Звезда по имени Солнце",
      "Пачка сигарет",
      "Кукушка",
      "Перемен!",
    ],
    rightAnswer: "Звезда по имени Солнце",
    srcMusic: "/quiz-musics/0085_Viktor_Cojj_Zvezda_po_imeni_Solnce.m4a",
  },
  {
    id: 86,
    question: "Угадай мелодию",
    answers: ["Музыка нас связала", "Лаванда", "Белые розы", "Voyage, Voyage"],
    rightAnswer: "Музыка нас связала",
    srcMusic: "/quiz-musics/0086_Mirazh_Muzika_nas_svyazala.m4a",
  },
  {
    id: 87,
    question: "Угадай мелодию",
    answers: ["Lambada", "La Isla Bonita", "Bamboléo", "Vamos a la Playa"],
    rightAnswer: "Lambada",
    srcMusic: "/quiz-musics/0087_Kaoma_Lambada.m4a",
  },
  {
    id: 88,
    question: "Угадай мелодию",
    answers: ["Fire", "The Logical Song", "How Much Is the Fish?", "Rhythm Is a Dancer"],
    rightAnswer: "Fire",
    srcMusic: "/quiz-musics/0088_Scooter_Fire.m4a",
  },
  {
    id: 89,
    question: "Угадай песню по мелодии",
    answers: [
      "Выпал снег",
      "Музыка нас связала",
      "Белые розы",
      "Лето"
    ],
    rightAnswer: "Выпал снег",
    srcMusic: "0089_Svetlana_Razyna_Vypal_sneg.m4a"
  },
  {
    id: 90,
    question: "Угадай песню по мелодии",
    answers: [
      "Хочу перемен!",
      "Группа крови",
      "Пачка сигарет",
      "Звезда по имени Солнце"
    ],
    rightAnswer: "Хочу перемен!",
    srcMusic: "0090_Viktor_Cojj_KHochu_peremen.m4a"
  },
  {
    id: 91,
    question: "Угадай песню по мелодии",
    answers: [
      "Пачка сигарет",
      "Кукушка",
      "Когда твоя девушка больна",
      "Закрой за мной дверь, я ухожу"
    ],
    rightAnswer: "Пачка сигарет",
    srcMusic: "0091_Viktor_Cojj_Pachka_sigaret.m4a"
  },
  {
    id: 92,
    question: "Угадай песню по мелодии",
    answers: [
      "Wind of Change",
      "Still Loving You",
      "Send Me an Angel",
      "Holiday"
    ],
    rightAnswer: "Wind of Change",
    srcMusic: "0092_Scorpions_Wind_Of_Change.m4a"
  },
  {
    id: 93,
    question: "Угадай песню по мелодии",
    answers: [
      "Thunderstruck",
      "Back in Black",
      "Highway to Hell",
      "T.N.T."
    ],
    rightAnswer: "Thunderstruck",
    srcMusic: "0093_ACDC_Thunderstruck.m4a"
  },
  {
    id: 94,
    question: "Угадай песню по мелодии",
    answers: [
      "Кукушка",
      "Группа крови",
      "Спокойная ночь",
      "Печаль"
    ],
    rightAnswer: "Кукушка",
    srcMusic: "0094_Viktor_Cojj_Kookooshka.m4a"
  },
  {
    id: 95,
    question: "Угадай песню по мелодии",
    answers: [
      "Жёлтые тюльпаны",
      "Маленькая страна",
      "Дельфин и русалка",
      "Синие лебеди"
    ],
    rightAnswer: "Жёлтые тюльпаны",
    srcMusic: "0095_Natasha_Koroleva_ZHjoltye_Tyulpany.m4a"
  },
  {
    id: 96,
    question: "Угадай песню по мелодии",
    answers: [
      "На белом покрывале января",
      "Белые розы",
      "Седая ночь",
      "Розовый вечер"
    ],
    rightAnswer: "На белом покрывале января",
    srcMusic: "0096_Vasyuta_Sergejj_Na_belom_pokryvale_yanvarya.m4a"
  },
  {
    id: 97,
    question: "Угадай песню по мелодии",
    answers: [
      "Девочка моя синеглазая",
      "Золотые купола",
      "Облако волос",
      "Вечерок-вечерочек"
    ],
    rightAnswer: "Девочка моя синеглазая",
    srcMusic: "0097_ZHenya_Belousov_Devochka_moya_sineglazaya.m4a"
  },
  {
    id: 98,
    question: "Угадай песню по мелодии",
    answers: [
      "London Goodbye",
      "Paris, Paris",
      "San Francisco",
      "Ciao, Bambino"
    ],
    rightAnswer: "London Goodbye",
    srcMusic: "0098_Kar_men_Londongoodbye.m4a"
  },
  {
    id: 99,
    question: "Угадай песню по мелодии",
    answers: [
      "U Can't Touch This",
      "Pray",
      "Have You Seen Her",
      "2 Legit 2 Quit"
    ],
    rightAnswer: "U Can't Touch This",
    srcMusic: "0099_MC_Hammer_U_Cant_Touch_This.m4a"
  },
  {
    id: 100,
    question: "Угадай песню по мелодии",
    answers: [
      "Ты не ангел, но для меня",
      "Мир без тебя",
      "Белая черёмуха",
      "Звёздная ночь"
    ],
    rightAnswer: "Ты не ангел, но для меня",
    srcMusic: "0100_Aleksejj_Glyzin_Ti_ne_angel_no_dlya_menya.m4a"
  }
];
