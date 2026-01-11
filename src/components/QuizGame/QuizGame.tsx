"use client";

import { useState, useRef, useCallback } from "react";

import QuestionNumber from "./components/QuestionNumber/QuestionNumber";
import Question from "./components/Question/Question";
import RightAnswer from "./components/RightAnswer/RightAnswer";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import Obstruction from "./components/Obstruction/Obstruction";
import VisualMemoryLevel from "./components/VisualMemoryLevel/VisualMemoryLevel";
import MemoryChoose from "./components/MemoryChoose/MemoryChoose";
import EndGame from "./components/EndGame/EndGame";
import { useInitRoom } from "./hooks/useInitRoom";
import { usePlayers } from "@/src/hooks/usePlayers";
import { useQuestions } from "@/src/hooks/useQuestions";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { editRoom } from "@/src/lib/editRoom";
import { resetCurrentScore } from "./utils/resetCurrentScore";
import { useMusic } from "./hooks/useMusic";
import { useTopics } from "./hooks/useTopics";
import { useInitQuestions } from "./hooks/useInitQuestions";
import { useRoundTimer } from "./hooks/useRoundTimer";
import { useInitMemories } from "./hooks/useInitMemories";
import { getDateNow } from "@/src/lib/getDateNow";

import { GamePhase } from "@/src/types/types";
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
  const quizGameRef = useRef(null);

  useMusic(musicState);

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
    players.length < 2 ||
    // players.length < 1 ||
    players.some((player) => player.ready === "addedTopics");

  const newRound = useCallback(() => {
    setCurrentQuestion((prev) => {
      const next = prev + 1;
      if (next >= questions.length) {
        editRoom({
          roomId: roomId || null,
          key: "gamePhase",
          value: GamePhase.GAME_END,
        });

        return prev;
      }

      editRoom({
        roomId: roomId || null,
        key: "currentQuestionIndex",
        value: next,
      });

      editRoom({
        roomId: roomId || null,
        key: "startTimeRound",
        value: Date.now(),
      });

      players.forEach((player) => {
        resetCurrentScore({
          roomId: roomId || null,
          player: player.id,
        });
      });

      return next;
    });
  }, [roomId, questions, players]);

  useRoundTimer(
    roomId,
    gamePhase,
    currentQuestion,
    startTimeRound,
    newRound,
    players
  );

  const roomConnectElement = gamePhase === GamePhase.LOBBY && roomId && (
    <JoinRoom
      roomId={roomId}
      players={players}
      disabled={isButtonDisabled}
      musicState={musicState}
      setMusicState={setMusicState}
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
    <RightAnswer roomId={roomId} title="Набранные очки в этом раунде" />
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
          {endGameElement}
        </div>
      </div>
    </div>
  );
}

export default QuizGame;
