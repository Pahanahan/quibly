import { useEffect } from "react";

import { GamePhase } from "@/src/types/types";

export const useRoundTimer = (
  startTime: number,
  setStartTime: React.Dispatch<React.SetStateAction<number>>,
  gamePhase: GamePhase,
  setGamePhase: React.Dispatch<React.SetStateAction<GamePhase>>,
  newRound: () => void
) => {
  useEffect(() => {
    if (gamePhase !== "question") return;

    const timer = setTimeout(() => {
      if (startTime >= 11) {
        setGamePhase("answer");

        /////////////////////////////////
        // const obstructionRounds = [1, 2, 3];

        // if (obstructionRounds.includes(currentQuestion)) {
        //   setObstructions(true);
        //   setTimeout(() => {
        //     newRound();
        //   }, 7000);
        // } else {
        //   setTimeout(() => {
        //     newRound();
        //     setObstructions(false);
        //   }, 7000);
        // }
        /////////////////////////////////

        setTimeout(() => {
          newRound();
          setGamePhase("question");
        }, 7000);
      }

      setStartTime((prevState) => {
        return prevState + 1;
      });
      return;
    }, 1000);

    return () => clearTimeout(timer);
  }, [startTime, setStartTime, gamePhase, setGamePhase, newRound]);
};
