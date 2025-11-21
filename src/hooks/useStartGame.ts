import { useEffect } from "react";

interface useStateGameProps {
  roomId: string;
  start: boolean;
}

export function useStartGame({ roomId, start }: useStateGameProps) {
  useEffect(() => {
    const startGameFetch = async () => {
      if (!roomId || !start) return;

      try {
        const response = await fetch(
          `https://quizgame-30deb-default-rtdb.firebaseio.com/rooms/${roomId}.json`,
          {
            method: "PATCH",
            body: JSON.stringify({ isGameStarted: true }),
          }
        );

        if (!response.ok) throw new Error("Ошибка");

        const patch = await response.json();
        console.log(patch);
      } catch (error) {
        console.error(error);
      }
    };

    startGameFetch();
  }, [roomId, start]);
}
