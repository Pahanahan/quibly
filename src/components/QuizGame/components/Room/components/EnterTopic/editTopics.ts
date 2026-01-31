interface EditTopicsProps {
  roomId: string | null;
  key: string;
  value: string;
}

export const editTopics = async ({ roomId, key, value }: EditTopicsProps) => {
  try {
    if (!roomId) return;

    const addedNewTopic = async () => {
      const res = await fetch("/api/room/edit-topics", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomId, key, value }),
      });

      if (!res.ok) throw new Error("Failed edit topics");
    };

    await addedNewTopic();
  } catch (error) {
    console.error(error);
  }
};
