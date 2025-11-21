"use client";

import { useState, useEffect, useCallback } from "react";

import QuestionNumber from "./components/QuestionNumber/QuestionNumber";
import Question from "./components/Question/Question";
import RightAnswer from "./components/RightAnswer/RightAnswer";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import EndGame from "./components/EndGame/EndGame";
import questions from "@/src/data/quizQuestions";
import { useInitRoom } from "@/src/hooks/useInitRoom";
import { usePlayers } from "@/src/hooks/usePlayers";

import styles from "./QuizGame.module.scss";

function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [time, setTime] = useState<number>(100);
  const [showRight, setShowRight] = useState<boolean>(false);
  const [endGame, setEndGame] = useState<boolean>(false);

  const room = useInitRoom();
  const players = usePlayers({ roomId: room?.roomId });
  console.log(room);
  console.log(players);

  const { question, answers, rightAnswer } = questions[currentQuestion];

  const disabledButton = players.length < 2 || players.length > 8;

  const newRound = useCallback(() => {
    setShowRight(false);
    setTime(100);

    setCurrentQuestion((prev) => {
      const next = prev + 1;
      if (next >= questions.length) {
        setEndGame(true);
        return prev;
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (!startGame || endGame) return;

    const timer = setTimeout(() => {
      setStartGame(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [startGame, endGame]);

  useEffect(() => {
    if (!startGame || showRight || endGame) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          setShowRight(true);

          setTimeout(() => {
            newRound();
          }, 7000);

          return 0;
        }
        return prev - 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [startGame, showRight, endGame, newRound]);

  const roomConnectElement = !startGame && !endGame && room && (
    <JoinRoom
      roomId={room.roomId}
      players={players}
      disabled={disabledButton}
      setStartGame={setStartGame}
    />
  );

  const currentQuestionElement = startGame && !showRight && (
    <QuestionNumber currentQuestion={currentQuestion} />
  );

  const questionTitleAndAnswers = startGame && !showRight && (
    <Question question={question} answers={answers} time={time} />
  );

  const rightAnswerElement = showRight && (
    <RightAnswer rightAnswer={rightAnswer} roomId={room?.roomId} />
  );

  const endGameElement = endGame && <EndGame />;

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
