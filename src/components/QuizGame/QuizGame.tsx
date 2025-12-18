"use client";

import { useState, useCallback } from "react";

import QuestionNumber from "./components/QuestionNumber/QuestionNumber";
import Question from "./components/Question/Question";
import RightAnswer from "./components/RightAnswer/RightAnswer";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import EndGame from "./components/EndGame/EndGame";
import { useInitRoom } from "./hooks/useInitRoom";
import { usePlayers } from "./hooks/usePlayers";
import { useQuestions } from "@/src/hooks/useQuestions";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { editRoom } from "@/src/lib/editRoom";
import { resetCurrentScore } from "./utils/resetCurrentScore";
import { useMusic } from "./hooks/useMusic";
import { useTopics } from "./hooks/useTopics";
import { useInitQuestions } from "./hooks/useInitQuestions";
import { useRoundTimer } from "./hooks/useRoundTimer";

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
  const [startTime, setStartTime] = useState<number>(0);
  const [gamePhase, setGamePhase] = useState<GamePhase>("lobby");
  const [musicState, setMusicState] = useState<boolean>(false);

  console.log(gamePhase);

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

  const question = questions[currentQuestion]?.question || "";
  const answers = questions[currentQuestion]?.answers || [];
  const rightAnswer = questions[currentQuestion]?.rightAnswer || "";

  const isButtonDisabled =
    players.length < 2 ||
    players.some((player) => player.ready === "addedTopics");

  const newRound = useCallback(() => {
    setGamePhase("answer");
    setStartTime(0);

    setCurrentQuestion((prev) => {
      const next = prev + 1;
      if (next >= questions.length) {
        setGamePhase("end");

        editRoom({
          roomId: roomId || null,
          key: "isGameEnd",
          value: true,
        });
        editRoom({
          roomId: roomId || null,
          key: "isGameStarted",
          value: false,
        });

        return prev;
      }

      editRoom({
        roomId: roomId || null,
        key: "currentQuestionIndex",
        value: next,
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

  useRoundTimer(startTime, setStartTime, gamePhase, setGamePhase, newRound);

  const roomConnectElement = gamePhase === "lobby" && (
    <JoinRoom
      roomId={roomId}
      players={players}
      disabled={isButtonDisabled}
      setGamePhase={setGamePhase}
      musicState={musicState}
      setMusicState={setMusicState}
    />
  );

  const questionTitleAndAnswers = gamePhase === "question" && (
    <>
      <QuestionNumber
        currentQuestion={currentQuestion}
        category={questions[currentQuestion].category}
      />
      <Question question={question} answers={answers} />
    </>
  );

  const rightAnswerElement = gamePhase === "answer" && (
    <RightAnswer rightAnswer={rightAnswer} roomId={roomId} />
  );

  const endGameElement = gamePhase === "end" && <EndGame roomId={roomId} />;

  return (
    <div className={styles.quiz}>
      <div className="container">
        <div className={styles.quiz__inner}>
          {roomConnectElement}
          {gamePhase !== "end" && (
            <>
              {questionTitleAndAnswers}
              {rightAnswerElement}
            </>
          )}
          {endGameElement}
        </div>
      </div>
    </div>
  );
}

export default QuizGame;
