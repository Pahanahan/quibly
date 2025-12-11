"use client";

import { useState, useEffect, useCallback } from "react";

import QuestionNumber from "./components/QuestionNumber/QuestionNumber";
import Question from "./components/Question/Question";
import RightAnswer from "./components/RightAnswer/RightAnswer";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import EndGame from "./components/EndGame/EndGame";
import { useInitRoom } from "@/src/hooks/useInitRoom";
import { usePlayers } from "@/src/hooks/usePlayers";
import { useQuestions } from "@/src/hooks/useQuestions";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { editRoom } from "@/src/lib/editRoom";
import { resetCurrentScore } from "@/src/lib/resetCurrentScore";
import { quizMusic } from "@/src/lib/utils/quizMusic";

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
// import { clearDataBaseNode } from "@/src/lib/utils/clearDataBaseNode";
// clearDataBaseNode("rooms");
////////////////////////////////////////////////

function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [showRight, setShowRight] = useState<boolean>(false);
  const [endGame, setEndGame] = useState<boolean>(false);
  const [musicState, setMusicState] = useState<boolean>(false);

  useEffect(() => {
    const musics = [
      "/quiz-sound/jazz_in_paris.mp3",
      "/quiz-sound/spring_in_my_step.mp3",
      "/quiz-sound/mr_turtle.mp3",
      "/quiz-sound/pink_lemonade.mp3",
    ];

    const randomMusicIndex = Math.floor(Math.random() * 4);

    const music = quizMusic(musics[randomMusicIndex], true, 0.5);

    if (musicState) {
      music.play();

      return () => {
        music.stop();
      };
    } else {
      music.stop();
    }
  }, [musicState]);

  const initialRoom = useInitRoom();
  const roomId: string | null = useRoomFields({
    roomId: initialRoom?.roomId,
    key: "roomId",
  });

  const players = usePlayers({ roomId: initialRoom?.roomId });
  const questions = useQuestions({ roomId: initialRoom?.roomId });

  const question = questions[currentQuestion]?.question || "";
  const answers = questions[currentQuestion]?.answers || [];
  const rightAnswer = questions[currentQuestion]?.rightAnswer || "";

  const disabledButton = players.length < 2 || players.length > 8;

  const newRound = useCallback(() => {
    setShowRight(false);
    setStartTime(0);

    setCurrentQuestion((prev) => {
      const next = prev + 1;
      if (next >= questions.length) {
        setEndGame(true);

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

  useEffect(() => {
    if (!startGame || endGame) return;

    const timer = setTimeout(() => {
      setStartGame(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [startGame, endGame]);

  useEffect(() => {
    if (!startGame || showRight || endGame) return;

    const timer = setTimeout(() => {
      if (startTime >= 11000) {
        setShowRight(true);

        setTimeout(() => {
          newRound();
        }, 7000);
      }

      setStartTime((prevState) => {
        return prevState + 1000;
      });
      return;
    }, 1000);

    return () => clearTimeout(timer);
  }, [startTime, startGame, showRight, endGame, newRound]);

  const roomConnectElement = !startGame && !endGame && roomId && (
    <JoinRoom
      roomId={roomId}
      players={players}
      disabled={disabledButton}
      setStartGame={setStartGame}
      musicState={musicState}
      setMusicState={setMusicState}
    />
  );

  const currentQuestionElement = startGame && !showRight && (
    <QuestionNumber
      currentQuestion={currentQuestion}
      category={questions[currentQuestion].category}
    />
  );

  const questionTitleAndAnswers = startGame && !showRight && (
    <Question question={question} answers={answers} />
  );

  const rightAnswerElement = showRight && (
    <RightAnswer rightAnswer={rightAnswer} roomId={roomId} />
  );

  const endGameElement = endGame && <EndGame roomId={roomId} />;

  return (
    <div className={styles.quiz}>
      <div className="container">
        <div className={styles.quiz__inner}>
          {roomConnectElement}
          {!endGame && (
            <div>
              {currentQuestionElement}
              {questionTitleAndAnswers}
              {rightAnswerElement}
            </div>
          )}
          {endGameElement}
        </div>
      </div>
    </div>
  );
}

export default QuizGame;
