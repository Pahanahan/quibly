import { useState, useEffect, useRef } from "react";

import MusicsGameQuestion from "./components/MusicsGameQuestion/MusicsGameQuestion";
import MusicsGameAnswer from "./components/MusicsGameAnswer/MusicsGameAnswer";
import { editPlayer } from "@/src/lib/editPlayer";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { usePlayer } from "@/src/hooks/usePlayer";
import { getDateNow } from "@/src/lib/getDateNow";

import { GamePhase } from "@/src/types/types";
import styles from "./MusicsGame.module.scss";

interface MusicsGameProps {
  roomId: string;
  userId: string;
  questionMusic: string;
  answersMusic: string[];
  rightAnswerMusic: string;
  gamePhase: GamePhase;
}

function MusicsGame({
  roomId,
  userId,
  questionMusic,
  answersMusic,
  rightAnswerMusic,
  gamePhase,
}: MusicsGameProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [rightAnswerState, setRightAnswerState] = useState<
    boolean | "нет ответа"
  >("нет ответа");
  const [score, setScore] = useState<number>(0);

  const player = usePlayer({ roomId: roomId, userId: userId });
  const scoreRef = useRef(score);
  const playerScore = useRef(0);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    playerScore.current = player?.score || 0;
  }, [player]);

  const dateNow = getDateNow();

  const startTime: number =
    useRoomFields({
      roomId: roomId,
      key: "startTimeRound",
    }) || dateNow;

  useEffect(() => {
    if (gamePhase !== GamePhase.MUSICS_ANSWER || selectedAnswer === null)
      return;

    const totalScore = scoreRef.current + playerScore.current;

    editPlayer({
      roomId: roomId,
      player: userId,
      key: "score",
      value: totalScore,
    });
  }, [roomId, userId, gamePhase, selectedAnswer]);

  const handleChooseAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    const isRight = answer === rightAnswerMusic;
    setRightAnswerState(isRight);

    const endTime = Date.now();

    const differentTime = endTime - startTime;

    const score = isRight ? Math.floor(500000 / differentTime + 100) : 0;

    setScore(score);

    editPlayer({
      roomId: roomId,
      player: userId,
      key: "currentScore",
      value: score,
    });
  };

  if (!answersMusic) {
    return (
      <div className={styles.movies}>
        <h2 className={styles.movies__question}>{questionMusic}</h2>
      </div>
    );
  }

  return (
    <div className={styles.musics}>
      {gamePhase === GamePhase.MUSICS && (
        <MusicsGameQuestion
          roomId={roomId}
          questionMusic={questionMusic}
          handleChooseAnswer={handleChooseAnswer}
          selectedAnswer={selectedAnswer}
          answersMusic={answersMusic}
        />
      )}
      {gamePhase === GamePhase.MUSICS_ANSWER && (
        <MusicsGameAnswer
          rightAnswerMusic={rightAnswerMusic}
          rightAnswerState={rightAnswerState}
        />
      )}
    </div>
  );
}

export default MusicsGame;
