import { useState } from "react";

import { QuizPlayer } from "@/src/types/types";

interface JoinNewPlayerProps {
  roomId: string;
  userId: string;
  userName: string;
  avatar: string;
}

export function useJoinPlayer() {
  const [newPlayer, setNewPlayer] = useState<QuizPlayer | null>(null);

  const joinNewPlayer = async ({
    roomId,
    userId,
    userName,
    avatar,
  }: JoinNewPlayerProps) => {
    try {
      const playerData: QuizPlayer = {
        id: userId,
        userName: userName,
        ready: "addedTopics",
        currentScore: 0,
        score: 0,
        avatar: avatar,
        obstructions: {
          x2: false,
          x5: false,
          x10: false,
          fadeIn: false,
          scale: false,
          blurIn: false,
          rotate: false,
          helicopter: false,
          pulse: false,
          shake: false,
          defender: false,
        },
      };

      const response = await fetch("/api/room/join-player", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomId, playerData }),
      });

      if (!response.ok) throw new Error("Failed to join player");

      const data: QuizPlayer = await response.json();
      setNewPlayer(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return { newPlayer, joinNewPlayer };
}
