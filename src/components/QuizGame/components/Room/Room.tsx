"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Form from "./components/Form/Form";
import RoomUnavailable from "./components/RoomUnavavailable/RoomUnavailable";
import EnterTopic from "./components/EnterTopic/EnterTopic";
import ReadyGame from "./components/ReadyGame/ReadyGame";
import Game from "./components/Game/Game";
import ChooseObstruction from "./components/ChooseObstruction/ChooseObstruction";
import VisualMemoryGameRoom from "./components/VisualMemoryGameRoom/VisualMemoryGameRoom";
import SortingGame from "./components/SortingGame/SortingGame";
import EndGame from "./components/EndGame/EndGame";
import { generateId } from "@/src/lib/generateId";
import {
  getToLocalStorage,
  saveToLocalStorage,
} from "@/src/lib/getSetlocalStorage";
import { isValidRoomId } from "./isValidRoomId";
import { useJoinPlayer } from "./useJoinPlayer";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { useQuestions } from "@/src/hooks/useQuestions";
import { usePlayer } from "@/src/hooks/usePlayer";
import { quizAvatars } from "@/src/data/quizAvatars";

import { GamePhase } from "@/src/types/types";
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
  const [formHidden, setFormHidden] = useState<boolean>(false);
  const router = useRouter();

  const isRoomId: string | null = useRoomFields({
    roomId: roomId,
    key: "roomId",
  });

  const gamePhase: GamePhase | null =
    useRoomFields({
      roomId: roomId,
      key: "gamePhase",
    }) || null;

  const currentQuestionIndex: number | null = useRoomFields({
    roomId: roomId,
    key: "currentQuestionIndex",
  });
  const questions = useQuestions({ roomId: roomId });

  const player = usePlayer({ roomId: roomId, userId: userId });

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

  useEffect(() => {
    setFormHidden(gamePhase === GamePhase.GAME_END);
  }, [gamePhase]);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    saveToLocalStorage("QuizGameUserName", e.target.value);
  };

  const changeIdRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRoomId = e.target.value.toUpperCase();

    if (!isValidRoomId(newRoomId) || newRoomId.length > 5) return;

    setRoomIdState(newRoomId);
    if (newRoomId.length > 0) {
      router.push(`/quiz/${newRoomId}`);
    } else {
      return;
    }
  };

  const { joinNewPlayer } = useJoinPlayer();

  const joinGame = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormHidden(true);
    const id = `${userName}${generateId()}`;
    setUserId(id);
    await joinNewPlayer({
      roomId: roomId,
      userId: id,
      userName: userName,
      avatar: randomAvatar,
    });

    saveToLocalStorage("QuizGameRoom", roomId);
    saveToLocalStorage("QuizGameUserName", userName);
    saveToLocalStorage("QuizGameUserId", id);
    saveToLocalStorage("QuizGameAvatar", randomAvatar);
  };

  const disabled =
    userName.trim().length === 0 ||
    !existsRoomId ||
    gamePhase !== GamePhase.LOBBY;

  const formElement = !player?.ready && !formHidden && (
    <Form
      joinGame={joinGame}
      userName={userName}
      changeName={changeName}
      roomIdState={roomIdState}
      changeIdRoom={changeIdRoom}
      disabled={disabled}
      formHidden={formHidden}
    />
  );

  const undefinedRoom = !existsRoomId && (
    <RoomUnavailable
      title="Комната не найдена!"
      text="Введите правильный ID комнаты"
    />
  );

  const undefinedPlayer = existsRoomId &&
    !player &&
    gamePhase !== GamePhase.LOBBY && (
      <RoomUnavailable
        title="Игра уже началась"
        text="Войдите позже или начните игру в другой комнате"
      />
    );

  const enterTopicElement = player?.ready === "addedTopics" && (
    <EnterTopic roomId={roomId} userId={userId} />
  );

  const readyElement = player?.ready === "ready" &&
    gamePhase === GamePhase.LOBBY && <ReadyGame />;

  const questionElement = (gamePhase === GamePhase.QUESTION ||
    gamePhase === GamePhase.ANSWER) &&
    player && (
      <Game
        key={currentQuestionIndex}
        userId={userId}
        roomId={roomId}
        question={question}
        answers={answers}
        rightAnswer={rightAnswer}
        gamePhase={gamePhase}
      />
    );

  const obstructionElement = gamePhase === GamePhase.OBSTRUCTION && player && (
    <ChooseObstruction roomId={roomId} />
  );

  const memoriesElement = (gamePhase === GamePhase.MEMORY ||
    gamePhase === GamePhase.MEMORY_CHOOSE ||
    gamePhase === GamePhase.MEMORY_ANSWER) &&
    player && <VisualMemoryGameRoom roomId={roomId} userId={userId} />;

  const sortingElement = (gamePhase === GamePhase.SORTING ||
    gamePhase === GamePhase.SORTING_ANSWER) &&
    player && (
      <SortingGame
        roomId={roomId}
        userId={userId}
        currentQuestionIndex={currentQuestionIndex}
      />
    );

  const endGameElement = gamePhase === GamePhase.GAME_END && player && (
    <EndGame />
  );

  return (
    <div className={styles.room}>
      <div className="container">
        <div className={styles.room__inner}>
          {formElement}
          {undefinedRoom}
          {undefinedPlayer}
          {enterTopicElement}
          {readyElement}
          {questionElement}
          {obstructionElement}
          {memoriesElement}
          {sortingElement}
          {endGameElement}
        </div>
      </div>
    </div>
  );
}

export default Room;
