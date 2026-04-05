import Room from "@/src/components/QuizGame/components/Room/Room";

type Props = {
  params: Promise<{ roomId: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { roomId } = await params;

  return {
    title: "Викторина",
    description: `Комната №${roomId} для игры 'Викторина'`,
  };
}

async function RoomPage({ params }: Props) {
  const { roomId } = await params;

  if (typeof roomId === "string") {
    return <Room roomId={roomId} />;
  }
}

export default RoomPage;
