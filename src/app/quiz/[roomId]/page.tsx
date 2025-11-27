"use client";

import { useParams } from "next/navigation";

import Room from "@/src/components/QuizGame/components/Room/Room";

function RoomPage() {
  const { roomId } = useParams();

  if (typeof roomId === "string") {
    return <Room roomId={roomId} />;
  }
}

export default RoomPage;
