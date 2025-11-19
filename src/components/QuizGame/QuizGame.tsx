"use client";

import { useState, useEffect, useCallback } from "react";

import QuestionNumber from "./components/QuestionNumber/QuestionNumber";
import Question from "./components/Question/Question";
import RightAnswer from "./components/RightAnswer/RightAnswer";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import questions from "@/src/data/quizQuestions";
import { generateId, shuffleQuestions } from "@/src/lib/utils";

import styles from "./QuizGame.module.scss";

interface RoomInterface {
  currentQuestionIndex: number;
  isActive: boolean;
  isGameStarted: boolean;
  maxPlayers: number;
  minPlayers: number;
  players: object;
  questions: object[];
  roomId: string;
}

function QuizGame() {
  // const [createdRoom, setCreatedRoom] = useState<boolean>(false);
  const [room, setRoom] = useState<RoomInterface | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [time, setTime] = useState<number>(100);
  const [showRight, setShowRight] = useState<boolean>(false);
  const [endGame, setEndGame] = useState<boolean>(false);

  const { question, answers, rightAnswer } = questions[currentQuestion];

  console.log(room);

  const newRound = useCallback(() => {
    setStartGame(false);
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
    const roomId = generateId();
    const initRoom = async () => {
      try {
        const roomData = {
          roomId: roomId,
          players: {
            count: 0,
          },
          isActive: true,
          currentQuestionIndex: 0,
          isGameStarted: false,
          minPlayers: 2,
          maxPlayers: 8,
          questions: shuffleQuestions(questions).slice(0, 10),
        };

        const response = await fetch(
          `https://quizgame-30deb-default-rtdb.firebaseio.com/rooms/${roomId}.json`,
          {
            method: "PUT",
            body: JSON.stringify(roomData),
          }
        );

        if (!response.ok) throw new Error("Ошбика при создании комнаты!");

        const result = await response.json();
        setRoom(roomData);

        return result;
      } catch (error) {
        console.error(error);
      }
    };

    initRoom();
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
          }, 3000);

          return 0;
        }
        return prev - 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [startGame, showRight, endGame, newRound]);

  const roomConnectElement = !startGame && !endGame && room && (
    <JoinRoom roomId={room.roomId} players={room.players} />
  );

  const currentQuestionElement = startGame && (
    <QuestionNumber currentQuestion={currentQuestion} />
  );

  const questionTitleAndAnswers = startGame && !showRight && (
    <Question question={question} answers={answers} time={time} />
  );

  const rightAnswerElement = showRight && (
    <RightAnswer rightAnswer={rightAnswer} />
  );

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
          {endGame && <div className={styles.quiz__end}>End Game!</div>}
        </div>
      </div>
    </div>
  );
}

export default QuizGame;
