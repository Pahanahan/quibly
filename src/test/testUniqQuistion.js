export function testUniqQuistion(arr) {
  const countMap = {};
  const duplicates = [];

  arr.forEach((q) => {
    if (!countMap[q.question]) {
      countMap[q.question] = { count: 1, ids: [q.id] };
    } else {
      countMap[q.question].count += 1;
      countMap[q.question].ids.push(q.id);
    }
  });

  for (const question in countMap) {
    if (countMap[question].count > 1) {
      duplicates.push({ question: question, ids: countMap[question].ids });
    }
  }

  return duplicates;
}
