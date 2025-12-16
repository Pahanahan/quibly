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
import { usePlayer } from "./components/Game/usePlayer";
import { quizAvatars } from "@/src/data/quizAvatars";

import styles from "./Room.module.scss";

interface RoomProps {
  roomId: string;
}

function Room({ roomId }: RoomProps) {
  const [existsRoomId, setExistsRoomId] = useState<boolean>(false);
  const [roomIdState, setRoomIdState] = useState<string>(roomId);
  const [userName, setUserName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
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

  const player = usePlayer({ roomId: roomId, userId: userId });

  console.log(player);

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
      ready: "addedTopics",
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
    joinToRoom(id);

    saveToLocalStorage("QuizGameRoom", roomId);
    saveToLocalStorage("QuizGameUserName", userName);
    saveToLocalStorage("QuizGameUserId", id);
    saveToLocalStorage("QuizGameAvatar", randomAvatar);
  };

  const disabled = userName.trim().length === 0 || !existsRoomId;

  const formElement = !player?.ready && !isGameStarted && !isGameEnd && (
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

  const enterTopicElement = player?.ready === "addedTopics" && (
    <EnterTopic roomId={roomId} userId={userId} />
  );

  const readyElement = player?.ready === "ready" &&
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
