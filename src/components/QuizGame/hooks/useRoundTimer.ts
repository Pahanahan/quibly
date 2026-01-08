import { useEffect } from "react";

import { getDateNow } from "@/src/lib/getDateNow";
import { editRoom } from "@/src/lib/editRoom";
import { resetObstructions } from "../utils/resetObstructions";

import { GamePhase, QuizPlayer } from "@/src/types/types";

const QUESTION_DURATION = 10000;
const ANSWER_DURATION = 7000;
const OBSTRUCTION_DURATION = 10000;
const MEMORY_DURATION = 10000;
const MEMORY_CHOOSE_DURATION = 10000;
const MEMORY_ANSWER_DURATION = 7000;

const obstructionRounds = [0, 2, 4, 6, 8, 12, 14, 16];
const memoryRound = 10;
// const obstructionRounds = [1, 3, 5];
// const memoryRound = 0;

export const useRoundTimer = (
  roomId: string | null,
  gamePhase: GamePhase | null,
  currentQuestion: number,
  startTimeRound: number,
  newRound: () => void,
  players: QuizPlayer[]
) => {
  useEffect(() => {
    if (!roomId) return;

    let interval: ReturnType<typeof setInterval> | null = null;

    switch (gamePhase) {
      case GamePhase.QUESTION: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + QUESTION_DURATION - dateNow;
          console.log(endTime);

          if (endTime <= 0) {
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.ANSWER,
            });
            editRoom({
              roomId: roomId || null,
              key: "startTimeRound",
              value: Date.now(),
            });
          }
        }, 500);
        break;
      }

      case GamePhase.ANSWER: {
        const isObstructionRound = obstructionRounds.includes(currentQuestion);

        const isMemoryRound = memoryRound === currentQuestion;

        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + ANSWER_DURATION - dateNow;

          if (endTime <= 0) {
            if (isObstructionRound) {
              editRoom({
                roomId: roomId || null,
                key: "gamePhase",
                value: GamePhase.OBSTRUCTION,
              });
              editRoom({
                roomId: roomId || null,
                key: "startTimeRound",
                value: Date.now(),
              });

              return;
            } else if (isMemoryRound) {
              editRoom({
                roomId: roomId || null,
                key: "gamePhase",
                value: GamePhase.MEMORY,
              });
              editRoom({
                roomId: roomId || null,
                key: "startTimeRound",
                value: Date.now(),
              });

              return;
            } else {
              players.forEach((player) => {
                resetObstructions({
                  roomId: roomId || null,
                  player: player.id,
                });
              });
              editRoom({
                roomId: roomId || null,
                key: "gamePhase",
                value: GamePhase.QUESTION,
              });
              newRound();
            }
          }
        }, 500);
        break;
      }

      case GamePhase.OBSTRUCTION: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + OBSTRUCTION_DURATION - dateNow;

          if (endTime <= 0) {
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.QUESTION,
            });
            newRound();
          }
        }, 500);
        break;
      }

      case GamePhase.MEMORY: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + MEMORY_DURATION - dateNow;

          if (endTime <= 0) {
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.MEMORY_CHOOSE,
            });
            editRoom({
              roomId: roomId || null,
              key: "startTimeRound",
              value: Date.now(),
            });
          }
        }, 500);
        break;
      }

      case GamePhase.MEMORY_CHOOSE: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + MEMORY_CHOOSE_DURATION - dateNow;

          if (endTime <= 0) {
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.MEMORY_ANSWER,
            });
            editRoom({
              roomId: roomId || null,
              key: "startTimeRound",
              value: Date.now(),
            });
          }
        }, 500);
        break;
      }

      case GamePhase.MEMORY_ANSWER: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + MEMORY_ANSWER_DURATION - dateNow;

          if (endTime <= 0) {
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.QUESTION,
            });
            editRoom({
              roomId: roomId || null,
              key: "startTimeRound",
              value: Date.now(),
            });
            players.forEach((player) => {
              resetObstructions({
                roomId: roomId || null,
                player: player.id,
              });
            });
            newRound();
          }
        }, 500);
        break;
      }
    }

    return () => {
      if (interval) clearTimeout(interval);
    };
  }, [roomId, gamePhase, currentQuestion, startTimeRound, players, newRound]);
};
