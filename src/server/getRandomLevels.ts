export const getRandomLevels = <T>(allLevels: T[], count: number) => {
  const result = new Set<T>();

  while (result.size < count) {
    const randomIndex = Math.floor(Math.random() * allLevels.length);

    result.add(allLevels[randomIndex]);
  }

  return [...result];
};
