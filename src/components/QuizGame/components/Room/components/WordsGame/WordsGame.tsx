import { useEffect, useState, useRef, useCallback } from "react";

import WordsGameQuestion from "./components/WordsGameQuestion/WordsGameQuestion";
import WordsGameAnswer from "./components/WordsGameAnswer/WordsGameAnswer";
import { useWords } from "@/src/hooks/useWords";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { usePlayer } from "@/src/hooks/usePlayer";
import { editPlayer } from "@/src/lib/editPlayer";
import { quizRounds } from "@/src/data/quizRounds";

import { GamePhase } from "@/src/types/types";
import styles from "./WordsGame.module.scss";

interface WordsGameProps {
  roomId: string;
  userId: string;
  currentRound: number | null;
}

function WordsGame({ roomId, userId, currentRound }: WordsGameProps) {
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [error, setError] = useState<string>("");

  const gamePhase: GamePhase | null =
    useRoomFields({
      roomId: roomId,
      key: "gamePhase",
    }) || null;

  const player = usePlayer({ roomId: roomId, userId: userId });
  const playerScore = player?.score || 0;
  const score = 0;

  const scoreRef = useRef(score);
  const playerScoreRef = useRef(playerScore);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    playerScoreRef.current = playerScore;
  }, [playerScore]);

  const calculateScore = useCallback(() => {
    scoreRef.current = answers.reduce((acc, answer) => {
      if (answer.length === 3) return acc + 100;
      if (answer.length === 4) return acc + 150;
      if (answer.length === 5) return acc + 200;
      if (answer.length === 6) return acc + 250;
      return acc;
    }, 0);

    const totalScore = playerScoreRef.current + scoreRef.current;

    editPlayer({
      roomId: roomId,
      player: userId,
      key: "currentScore",
      value: scoreRef.current,
    });
    editPlayer({
      roomId: roomId,
      player: userId,
      key: "score",
      value: totalScore,
    });
  }, [answers, roomId, userId]);

  useEffect(() => {
    if (gamePhase !== GamePhase.WORDS_ANSWER) {
      calculateScore();
    }
  }, [gamePhase, calculateScore]);

  const words = useWords({ roomId: roomId });

  const title =
    words[quizRounds[currentRound || 0]?.dataIndex || 0]?.title || "";
  const letters =
    words[quizRounds[currentRound || 0]?.dataIndex || 0]?.letters || [];
  const isValidWords =
    words[quizRounds[currentRound || 0]?.dataIndex || 0]?.isValidWords || [];

  const handleAddWord = (word: string[]) => {
    const str = word.join("");
    if (str.length === 0 || str.length < 3) {
      setSelectedIndexes([]);
      setError("Слово должно состоять хотя бы из 3 букв!");
    } else if (isValidWords.includes(str) && !answers.includes(str)) {
      setAnswers((prevState) => [...prevState, str]);
      setSelectedIndexes([]);
      setError("");
    } else if (isValidWords.includes(str) && answers.includes(str)) {
      setSelectedIndexes([]);
      setError("Такое слово уже есть!");
    } else if (!isValidWords.includes(str)) {
      setSelectedIndexes([]);
      setError("Такого слова не существует!");
    }
  };

  const handleAddLetter = (index: number) => {
    if (selectedIndexes.includes(index)) return;

    setSelectedIndexes((prev) => [...prev, index]);
  };

  const handleRemoveLetter = (index: number) => {
    setSelectedIndexes((prev) => prev.filter((i) => i !== index));
  };

  return (
    <div className={styles.words}>
      {gamePhase === GamePhase.WORDS && (
        <WordsGameQuestion
          roomId={roomId}
          title={title}
          letters={letters}
          answers={answers}
          handleAddWord={handleAddWord}
          selectedIndexes={selectedIndexes}
          handleAddLetter={handleAddLetter}
          handleRemoveLetter={handleRemoveLetter}
          error={error}
        />
      )}
      {gamePhase === GamePhase.WORDS_ANSWER && (
        <WordsGameAnswer length={answers.length} />
      )}
    </div>
  );
}

export default WordsGame;
