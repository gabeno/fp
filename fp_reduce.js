/**
 * Functional Programming
 * Ref: https://maryrosecook.com/blog/post/a-practical-introduction-to-functional-programming
 *
 */

// reduce

// mimic python's count method
const count = (str, needle) => {
  return str
    .replace(/\./g, "")
    .split(" ")
    .filter(x => x === needle).length;
};

// sum of all items in a collection
derived_hits = [2, 34, 5, 2, 3, 8, 9, 32];
counts = {
  monday: {
    heads: 21,
    tails: 5
  },
  tuesday: {
    heads: 14,
    tails: 6
  },
  wednesday: {
    heads: 34,
    tails: 13
  }
};

const getSumSimple = collection => {
  return collection.reduce((x, y) => x + y);
};

console.log(getSumSimple(derived_hits));

getSumNested = (collection, identifier) => {
  return Object.keys(collection)
    .map(day => collection[day][identifier])
    .reduce((x, y) => x + y, 0);
  // accumulator initialized to 0 if provided or the first item.
  // iteration starts at the second item or first respectively
};
console.log(getSumNested(counts, "heads"));
console.log(getSumNested(counts, "tails"));

sentences = [
  "Mary read a story to Sam and Isla.",
  "Isla cuddled Sam.",
  "Sam chortled."
];

const wordFrequency = (collection, word) => {
  return collection.map(s => count(s, word)).reduce((a, c) => a + c, 0);
};
console.log(wordFrequency(sentences, "Sam"));
console.log(wordFrequency(sentences, "Isla"));

people = [
  { name: "Mary", height: 160 },
  { name: "Isla", height: 80 },
  { name: "Sam" }
];

const avgHeight = collection => {
  const studentsWithHeight = collection.filter(o => o.height);
  const totalHeight = studentsWithHeight
    .map(o => o.height)
    .reduce((a, h) => a + h, 0);
  if (studentsWithHeight.length) return totalHeight / studentsWithHeight.length;
  else console.log("No height to measure!");
};
console.log(avgHeight([{ name: "Sam" }]));
console.log(avgHeight(people));
