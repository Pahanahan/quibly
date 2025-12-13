export const generateId = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTVUYWXZ0123456789";

  const id = [];

  for (let i = 0; i < 5; i++) {
    const uniqId = Math.floor(Math.random() * alphabet.length);
    id.push(alphabet[uniqId]);
  }

  return id.join("");
};
