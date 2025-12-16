"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Form from "./components/Form/Form";
import UndefinedRoom from "./components/UndefinedRoom/UndefinedRoom";
import EnterTopic from "./components/EnterTopic/EnterTopic";
import ReadyGame from "./components/ReadyGame/ReadyGame";
import Game from "./components/Game/Game";
import EndGame from "./components/EndGame/EndGame";
import { generateId } from "@/src/lib/generateId";
import {
  getToLocalStorage,
  saveToLocalStorage,
} from "@/src/lib/getSetlocalStorage";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { useQuestions } from "@/src/hooks/useQuestions";
import { quizAvatars } from "@/src/data/quizAvatars";

import { StepGame } from "@/src/types/types";
import styles from "./Room.module.scss";

interface RoomProps {
  roomId: string;
}

function Room({ roomId }: RoomProps) {
  const [existsRoomId, setExistsRoomId] = useState<boolean>(false);
  const [roomIdState, setRoomIdState] = useState<string>(roomId);
  const [userName, setUserName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [stepGame, setStepGame] = useState<StepGame>(StepGame.ADDED_PLAYER);
  const [randomAvatar, setRandomAvatar] = useState(() => {
    const index = Math.floor(Math.random() * quizAvatars.length);
    return quizAvatars[index].name;
  });
  const router = useRouter();

  const isRoomId: string | null = useRoomFields({
    roomId: roomId,
    key: "roomId",
  });

  const isGameStarted: boolean | null =
    useRoomFields({
      roomId: roomId,
      key: "isGameStarted",
    }) || false;

  const isGameEnd: boolean | null =
    useRoomFields({
      roomId: roomId,
      key: "isGameEnd",
    }) || false;

  const currentQuestionIndex: number | null = useRoomFields({
    roomId: roomId,
    key: "currentQuestionIndex",
  });
  const questions = useQuestions({ roomId: roomId });

  const question =
    currentQuestionIndex !== null
      ? questions[currentQuestionIndex]?.question
      : "";

  const answers =
    currentQuestionIndex !== null
      ? questions[currentQuestionIndex]?.answers
      : [];

  const rightAnswer =
    currentQuestionIndex !== null
      ? questions[currentQuestionIndex]?.rightAnswer
      : "";

  useEffect(() => {
    if (isRoomId === roomId) {
      setTimeout(() => {
        setExistsRoomId(true);
      }, 0);
    } else {
      setTimeout(() => {
        setExistsRoomId(false);
      }, 0);
    }
  }, [isRoomId, roomId]);

  useEffect(() => {
    setTimeout(() => {
      setUserName(getToLocalStorage("QuizGameUserName") || "");
    }, 0);
  }, []);

  useEffect(() => {
    const storedRoomId = getToLocalStorage("QuizGameRoom");
    const userName = getToLocalStorage("QuizGameUserName");
    const userId = getToLocalStorage("QuizGameUserId");
    const avatar = getToLocalStorage("QuizGameAvatar");
    if (storedRoomId === roomId) {
      setTimeout(() => {
        if (userName && userId && avatar) {
          setUserId(userId);
          setRandomAvatar(avatar);
        }
      }, 0);
    }
  }, [roomId]);

  const joinToRoom = async (id: string) => {
    const playerId = {
      userName: userName,
      ready: true,
      id: id,
      currentScore: 0,
      score: 0,
      avatar: randomAvatar,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/rooms/${roomId}/players/${playerId.id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(playerId),
      }
    );

    if (!response.ok) throw new Error("Ошибка подключения игрока");

    return await response.json();
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    saveToLocalStorage("QuizGameUserName", e.target.value);
  };

  const changeIdRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRoomId = e.target.value.toUpperCase();
    setRoomIdState(newRoomId);
    if (newRoomId.length > 0) {
      router.push(`/quiz/${newRoomId}`);
    } else {
      return;
    }
  };

  const joinGame = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `${userName}${generateId()}`;
    setUserId(id);
    setStepGame(StepGame.TOPICS);

    joinToRoom(id);
    saveToLocalStorage("QuizGameRoom", roomId);
    saveToLocalStorage("QuizGameUserName", userName);
    saveToLocalStorage("QuizGameUserId", id);
    saveToLocalStorage("QuizGameAvatar", randomAvatar);
  };

  const disabled = userName.trim().length === 0 || !existsRoomId;

  const formElement = stepGame === StepGame.ADDED_PLAYER &&
    !isGameStarted &&
    !isGameEnd && (
      <Form
        joinGame={joinGame}
        userName={userName}
        changeName={changeName}
        roomIdState={roomIdState}
        changeIdRoom={changeIdRoom}
        disabled={disabled}
      />
    );

  const undefinedRoom = !existsRoomId && <UndefinedRoom />;

  const questionElement = isGameStarted && (
    <Game
      key={currentQuestionIndex}
      userId={userId}
      roomId={roomId}
      question={question}
      answers={answers}
      rightAnswer={rightAnswer}
    />
  );

  const enterTopicElement = stepGame === StepGame.TOPICS && (
    <EnterTopic roomId={roomId} setStepGame={setStepGame} />
  );

  const readyElement = stepGame === StepGame.READY &&
    !isGameStarted &&
    !isGameEnd && <ReadyGame />;

  return (
    <div className={styles.room}>
      <div className="container">
        <div className={styles.room__inner}>
          {formElement}
          {undefinedRoom}
          {enterTopicElement}
          {readyElement}
          {questionElement}
          {isGameEnd && <EndGame />}
        </div>
      </div>
    </div>
  );
}

export default Room;
