"use client";

import { useState, useEffect, useCallback } from "react";
import { ref, onValue } from "firebase/database";

import QuestionNumber from "./components/QuestionNumber/QuestionNumber";
import Question from "./components/Question/Question";
import RightAnswer from "./components/RightAnswer/RightAnswer";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import EndGame from "./components/EndGame/EndGame";
import questions from "@/src/data/quizQuestions";
import { generateId, shuffleQuestions } from "@/src/lib/utils";
import { database } from "@/src/lib/firebase";

import styles from "./QuizGame.module.scss";

interface Player {
  userName: string;
  ready: boolean;
  id: string;
  score: number;
  avatar: string;
}

interface RoomInterface {
  currentQuestionIndex: number;
  isActive: boolean;
  isGameStarted: boolean;
  maxPlayers: number;
  minPlayers: number;
  players?: Record<string, Player>;
  questions: object[];
  roomId: string;
}

function QuizGame() {
  const [room, setRoom] = useState<RoomInterface | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [time, setTime] = useState<number>(100);
  const [showRight, setShowRight] = useState<boolean>(false);
  const [endGame, setEndGame] = useState<boolean>(false);

  const { question, answers, rightAnswer } = questions[currentQuestion];

  console.log(room);

  useEffect(() => {
    if (players.length >= 2 && players.length <= 8) {
      setDisabledButton(false);
    }
  }, [players, disabledButton]);

  const newRound = useCallback(() => {
    // setStartGame(false);
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
    if (!room?.roomId) return;

    const playersRef = ref(database, `rooms/${room.roomId}/players`);

    const unsubscribe = onValue(playersRef, (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        setPlayers([]);
        return;
      }

      const playersArray: Player[] = Object.values(data);
      setPlayers(playersArray);
    });

    return () => unsubscribe();
  }, [room?.roomId]);

  useEffect(() => {
    const roomId = generateId();
    const initRoom = async () => {
      try {
        const roomData = {
          roomId: roomId,
          isActive: true,
          currentQuestionIndex: 0,
          isGameStarted: false,
          minPlayers: 2,
          maxPlayers: 8,
          questions: shuffleQuestions(questions).slice(0, 10),
          players: {
            player1: {
              userName: "Vitaly",
              ready: true,
              id: "id1",
              score: 2000,
              avatar: "cow",
            },
            player2: {
              userName: "Tosha",
              ready: true,
              id: "id2",
              score: 100,
              avatar: "bull",
            },
            player3: {
              userName: "Pavel",
              ready: true,
              id: "id3",
              score: 300,
              avatar: "camel",
            },
            player4: {
              userName: "Vasily",
              ready: true,
              id: "id4",
              score: 500,
              avatar: "fish",
            },
          },
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
