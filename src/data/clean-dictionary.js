import fs from "fs";

const raw = fs.readFileSync("dictionary.txt", "utf-8");
const words = raw
  .split("\n")
  .map((w) => w.trim().toLowerCase())
  .filter((w) => w.length >= 3 && w.length <= 10)
  .filter((w) => /^[а-яё]+$/.test(w))
  .filter(
    (w) =>
      !w.endsWith("ский") &&
      !w.endsWith("ская") &&
      !w.endsWith("ское") &&
      !w.endsWith("овать") &&
      !w.endsWith("ывать") &&
      !w.endsWith("ировать"),
  );

const uniqueWords = [...new Set(words)];

fs.writeFileSync("clieaned-dictionary.json", JSON.stringify(uniqueWords));

console.log("Готово:", uniqueWords.length, "слов");
