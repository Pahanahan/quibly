export const clearDataBaseNode = async (node: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/${node}.json`,
      { method: "DELETE" }
    );

    if (!response.ok) throw new Error("Ошибка очистки базы данных");

    console.log("База данных очищена успешно");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
