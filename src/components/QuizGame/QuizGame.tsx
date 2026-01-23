"use client";

import { useState, useRef } from "react";

import QuestionNumber from "./components/QuestionNumber/QuestionNumber";
import Question from "./components/Question/Question";
import RightAnswer from "./components/RightAnswer/RightAnswer";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import Obstruction from "./components/Obstruction/Obstruction";
import VisualMemoryLevel from "./components/VisualMemoryLevel/VisualMemoryLevel";
import MemoryChoose from "./components/MemoryChoose/MemoryChoose";
import Sorting from "./components/Sorting/Sorting";
import EndGame from "./components/EndGame/EndGame";
import { useInitRoom } from "./hooks/useInitRoom";
import { useInitQuestions } from "./hooks/useInitQuestions";
import { useInitMemories } from "./hooks/useInitMemories";
import { useInitSortingLevel } from "./hooks/useInitSortingLevel";
import { useRoundTimer } from "./hooks/useRoundTimer";
import { usePlayers } from "@/src/hooks/usePlayers";
import { useQuestions } from "@/src/hooks/useQuestions";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { useTopics } from "./hooks/useTopics";
import { useMusic } from "./hooks/useMusic";
import { useSoundMem } from "./hooks/useSoundMem";
import { getDateNow } from "@/src/lib/getDateNow";

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
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [musicState, setMusicState] = useState<boolean>(false);
  const [memState, setMemState] = useState<boolean>(false);
  const [memScoreText, setMemScoreText] = useState<MemScoreText>("normal");
  const quizGameRef = useRef(null);

  useMusic(musicState);
  useSoundMem(memState, memScoreText);

  const initialRoom = useInitRoom();
  const roomId: string | null = useRoomFields({
    roomId: initialRoom?.roomId,
    key: "roomId",
  });

  const topics = useTopics({ roomId: initialRoom?.roomId });
  const players = usePlayers({ roomId: initialRoom?.roomId });
  const questions = useQuestions({ roomId: initialRoom?.roomId });

  useInitQuestions({
    roomId: initialRoom?.roomId,
    topics,
  });

  useInitMemories({ roomId: initialRoom?.roomId });

  useInitSortingLevel({ roomId: initialRoom?.roomId });

  const question = questions[currentQuestion]?.question || "";
  const answers = questions[currentQuestion]?.answers || [];
  const rightAnswer = questions[currentQuestion]?.rightAnswer || "";

  const gamePhase: GamePhase | null = useRoomFields({
    roomId: roomId,
    key: "gamePhase",
  });

  const dateNow = getDateNow();

  const startTimeRound =
    useRoomFields({
      roomId: roomId,
      key: "startTimeRound",
    }) || dateNow;

  console.log(gamePhase);

  const isButtonDisabled =
    // players.length < 2 ||
    players.length < 1 ||
    players.some((player) => player.ready === "addedTopics");

  useRoundTimer(
    roomId,
    gamePhase,
    currentQuestion,
    startTimeRound,
    players,
    setCurrentQuestion,
    questions,
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

  const questionTitleAndAnswers = gamePhase === GamePhase.QUESTION && (
    <>
      <QuestionNumber
        currentQuestion={currentQuestion}
        category={questions[currentQuestion].category}
      />
      <Question question={question} answers={answers} />
    </>
  );

  const rightAnswerElement = gamePhase === GamePhase.ANSWER && (
    <RightAnswer
      rightAnswer={rightAnswer}
      roomId={roomId}
      title="Правильный ответ: "
      setMemScoreText={setMemScoreText}
    />
  );

  const obstructionElement = gamePhase === GamePhase.OBSTRUCTION && (
    <Obstruction roomId={roomId} />
  );

  const memoriesElement = gamePhase === GamePhase.MEMORY && (
    <VisualMemoryLevel roomId={roomId} />
  );

  const memoryChooseElement = gamePhase === GamePhase.MEMORY_CHOOSE && (
    <MemoryChoose />
  );

  const rightMemoryElement = gamePhase === GamePhase.MEMORY_ANSWER && (
    <RightAnswer
      roomId={roomId}
      title="Набранные очки в этом раунде"
      setMemScoreText={setMemScoreText}
    />
  );

  const sortingLevelElement = gamePhase === GamePhase.SORTING && (
    <Sorting roomId={roomId} />
  );

  const rightSortingElement = gamePhase === GamePhase.SORTING_ANSWER && (
    <RightAnswer
      roomId={roomId}
      title="Набранные очки в этом раунде"
      setMemScoreText={setMemScoreText}
    />
  );

  const endGameElement = gamePhase === GamePhase.GAME_END && (
    <EndGame roomId={roomId} />
  );

  return (
    <div className={styles.quiz} ref={quizGameRef}>
      <div className="container">
        <div className={styles.quiz__inner}>
          {roomConnectElement}
          {questionTitleAndAnswers}
          {rightAnswerElement}
          {obstructionElement}
          {memoriesElement}
          {memoryChooseElement}
          {rightMemoryElement}
          {sortingLevelElement}
          {rightSortingElement}
          {endGameElement}
        </div>
      </div>
    </div>
  );
}

export default QuizGame;
