"use client";

import { useState, useMemo, useRef } from "react";

import Intro from "./components/Intro/Intro";
import QuestionNumber from "./components/QuestionNumber/QuestionNumber";
import Question from "./components/Question/Question";
import RightAnswer from "./components/RightAnswer/RightAnswer";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import Obstruction from "./components/Obstruction/Obstruction";
import VisualMemoryLevel from "./components/VisualMemoryLevel/VisualMemoryLevel";
import MemoryChoose from "./components/MemoryChoose/MemoryChoose";
import Sorting from "./components/Sorting/Sorting";
import Movies from "./components/Movies/Movies";
import Musics from "./components/Musics/Musics";
import Words from "./components/Words/Words";
import EndGame from "./components/EndGame/EndGame";
import { useInitRoom } from "./hooks/useInitRoom";
import { useInitQuestions } from "./hooks/useInitQuestions";
import { useInitMemories } from "./hooks/useInitMemories";
import { useInitSortingLevel } from "./hooks/useInitSortingLevel";
import { useInitMovies } from "./hooks/useInitMovies";
import { useInitMusics } from "./hooks/useInitMusics";
import { useInitWords } from "./hooks/useInitWords";
import { useRoundTimer } from "./hooks/useRoundTimer";
import { usePlayers } from "@/src/hooks/usePlayers";
import { useQuestions } from "@/src/hooks/useQuestions";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { useTopics } from "./hooks/useTopics";
import { useMovies } from "@/src/hooks/useMovies";
import { useMusics } from "@/src/hooks/useMusics";
import { useMusic } from "./hooks/useMusic";
import { useSoundMem } from "./hooks/useSoundMem";
import { getDateNow } from "@/src/lib/getDateNow";
import { quizRounds } from "@/src/data/quizRounds";
// import { cleanedDictionary } from "@/src/data/cleanedDictionary";

// console.log(cleanedDictionary.filter((w) => w.length === 6));

// function filterByLetter(word: string, dictionary: string[]) {
//   const results: string[] = [];
//   const letters = [...word.split("")];

//   dictionary.forEach((w) => {
//     const temp = [...letters];
//     let canMake = true;

//     for (const char of w) {
//       const index = temp.indexOf(char);
//       if (index === -1) {
//         canMake = false;
//         break;
//       }
//       temp.splice(index, 1);
//     }

//     if (canMake && w.length <= word.length) {
//       results.push(w);
//     }
//   });

//   return results;
// }

// const rabota = filterByLetter("ампула", cleanedDictionary);
// console.log(rabota);

import { GamePhase, MemScoreText } from "@/src/types/types";
import styles from "./QuizGame.module.scss";

////////////////////////////////////////////////
// import questions from "@/src/data/quizQuestions";
// import { testUniqQuestion } from "../../test/testUniqQuestion";
// import { testCountQuestion } from "../../test/testCountQuestion";
// import { testIncludesRightAnswerWithAnswers } from "../../test/testIncludesRightAnswerWithAnswers";
// console.log("Количество повторяемых вопросов", testUniqQuestion(questions));
// testCountQuestion(questions);
// testIncludesRightAnswerWithAnswers(questions);
// console.log(questions);
////////////////////////////////////////////////

function QuizGame() {
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [musicState, setMusicState] = useState<boolean>(false);
  const [memState, setMemState] = useState<boolean>(false);
  const quizGameRef = useRef(null);

  const initialRoom = useInitRoom();
  const roomId: string | null = useRoomFields({
    roomId: initialRoom?.roomId,
    key: "roomId",
  });

  const topics = useTopics({ roomId: initialRoom?.roomId });
  const players = usePlayers({ roomId: initialRoom?.roomId });
  const questions = useQuestions({ roomId: initialRoom?.roomId });
  const questionMovies = useMovies({ roomId: initialRoom?.roomId });
  const questionMusics = useMusics({ roomId: initialRoom?.roomId });

  const gamePhase: GamePhase | null = useRoomFields({
    roomId: roomId,
    key: "gamePhase",
  });

  const memScoreText: MemScoreText = useMemo(() => {
    if (
      gamePhase === GamePhase.ANSWER &&
      players.some((p) => p.currentScore >= 1000)
    ) {
      return "highScore";
    } else if (
      gamePhase === GamePhase.ANSWER &&
      players.length > 0 &&
      players.reduce((acc, p) => acc + p.currentScore, 0) === 0
    ) {
      return "zeroScore";
    } else {
      return "normal";
    }
  }, [players, gamePhase]);

  useMusic(musicState);
  useSoundMem(memState, memScoreText);

  useInitQuestions({
    roomId: initialRoom?.roomId,
    topics,
  });
  useInitMemories({ roomId: initialRoom?.roomId });
  useInitSortingLevel({ roomId: initialRoom?.roomId });
  useInitMovies({ roomId: initialRoom?.roomId });
  useInitMusics({ roomId: initialRoom?.roomId });
  useInitWords({ roomId: initialRoom?.roomId });

  const question =
    questions[quizRounds[currentRound]?.dataIndex || 0]?.question || "";
  const answers =
    questions[quizRounds[currentRound]?.dataIndex || 0]?.answers || [];
  const rightAnswer =
    questions[quizRounds[currentRound]?.dataIndex || 0]?.rightAnswer || "";
  const category =
    questions[quizRounds[currentRound]?.dataIndex || 0]?.category || "";

  const questionMovie =
    questionMovies[quizRounds[currentRound]?.dataIndex || 0]?.question || "";
  const answersMovie =
    questionMovies[quizRounds[currentRound]?.dataIndex || 0]?.answers || [];
  const rightAnswerMovie =
    questionMovies[quizRounds[currentRound]?.dataIndex || 0]?.rightAnswer || "";
  const srcImageMovie =
    questionMovies[quizRounds[currentRound]?.dataIndex || 0]?.srcImage ||
    "/quiz-movies/000.jpg";

  const questionMusic =
    questionMusics[quizRounds[currentRound]?.dataIndex || 0]?.question || "";
  const answersMusic =
    questionMusics[quizRounds[currentRound]?.dataIndex || 0]?.answers || [];
  const rightAnswerMusic =
    questionMusics[quizRounds[currentRound]?.dataIndex || 0]?.rightAnswer || "";
  const srcMusic =
    questionMusics[quizRounds[currentRound]?.dataIndex || 0]?.srcMusic || "";

  const dateNow = getDateNow();

  const startTimeRound =
    useRoomFields({
      roomId: roomId,
      key: "startTimeRound",
    }) || dateNow;

  console.log(gamePhase);

  const isButtonDisabled =
    players.length < 2 ||
    players.some((player) => player.ready === "addedTopics");

  useRoundTimer(
    roomId,
    gamePhase,
    currentRound,
    startTimeRound,
    players,
    setCurrentRound,
  );

  const roomConnectElement = gamePhase === GamePhase.LOBBY && roomId && (
    <JoinRoom
      roomId={roomId}
      players={players}
      disabled={isButtonDisabled}
      musicState={musicState}
      setMusicState={setMusicState}
      memState={memState}
      setMemState={setMemState}
      quizGameRef={quizGameRef}
    />
  );

  const introElement = gamePhase === GamePhase.INTRO && (
    <Intro currentRound={currentRound} />
  );

  const questionTitleAndAnswers = gamePhase === GamePhase.QUESTION && (
    <>
      <QuestionNumber category={category} />
      <Question question={question} answers={answers} />
    </>
  );

  const rightAnswerElement = gamePhase === GamePhase.ANSWER && (
    <RightAnswer
      rightAnswer={rightAnswer}
      title="Правильный ответ: "
      players={players}
    />
  );

  const obstructionElement = gamePhase === GamePhase.OBSTRUCTION && (
    <Obstruction players={players} />
  );

  const memoriesElement = gamePhase === GamePhase.MEMORY && (
    <VisualMemoryLevel roomId={roomId} />
  );

  const memoryChooseElement = gamePhase === GamePhase.MEMORY_CHOOSE && (
    <MemoryChoose />
  );

  const rightMemoryElement = gamePhase === GamePhase.MEMORY_ANSWER && (
    <RightAnswer title="Набранные очки в этом раунде" players={players} />
  );

  const sortingLevelElement = gamePhase === GamePhase.SORTING && (
    <Sorting roomId={roomId} currentRound={currentRound} />
  );

  const rightSortingElement = gamePhase === GamePhase.SORTING_ANSWER && (
    <RightAnswer title="Набранные очки в этом раунде" players={players} />
  );

  const moviesLevelElement = gamePhase === GamePhase.MOVIES && (
    <Movies
      questionMovie={questionMovie}
      answersMovie={answersMovie}
      srcImageMovie={srcImageMovie}
    />
  );

  const rightMoviesElement = gamePhase === GamePhase.MOVIES_ANSWER && (
    <RightAnswer
      rightAnswer={rightAnswerMovie}
      title="Правильный ответ: "
      players={players}
    />
  );

  const musicLevelElement = gamePhase === GamePhase.MUSICS && (
    <Musics
      questionMusic={questionMusic}
      answersMusic={answersMusic}
      srcMusic={srcMusic}
    />
  );

  const rightMusicElement = gamePhase === GamePhase.MUSICS_ANSWER && (
    <RightAnswer
      rightAnswer={rightAnswerMusic}
      title="Правильный ответ: "
      players={players}
    />
  );

  const wordLevelElement = gamePhase === GamePhase.WORDS && (
    <Words roomId={roomId} currentRound={currentRound} />
  );

  const rightWordsElement = gamePhase === GamePhase.WORDS_ANSWER && (
    <RightAnswer title="Набранные очки в этом раунде" players={players} />
  );

  const endGameElement = gamePhase === GamePhase.GAME_END && (
    <EndGame roomId={roomId} />
  );

  return (
    <div className={styles.quiz} ref={quizGameRef}>
      <div className="container">
        <div className={styles.quiz__inner}>
          {roomConnectElement}
          {introElement}
          {questionTitleAndAnswers}
          {rightAnswerElement}
          {obstructionElement}
          {memoriesElement}
          {memoryChooseElement}
          {rightMemoryElement}
          {sortingLevelElement}
          {rightSortingElement}
          {moviesLevelElement}
          {rightMoviesElement}
          {musicLevelElement}
          {rightMusicElement}
          {wordLevelElement}
          {rightWordsElement}
          {endGameElement}
        </div>
      </div>
    </div>
  );
}

export default QuizGame;
