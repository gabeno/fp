/**
 * Functional Programming
 * Ref: https://maryrosecook.com/blog/post/a-practical-introduction-to-functional-programming
 *
 */

// map
const crypto = require("crypto");

const NUM = 1;
const NUMS = [0, 1, 2, 3, 4];
const NAMES = ["Mary", "Isla", "Sam"];

// simple function
const add1 = num => {
  return num + 1;
};
console.log(add1(NUM)); // => 2

// iterating over a list - use map and reduce
const getLengths = list => {
  // use a predefined function
  return list.map(x => x.length);
};
console.log(getLengths(NAMES));

const squares = list => {
  // use an anonymous function
  return list.map(x => x * x);
};
console.log(squares(NUMS));

const assignCodeNames = names => {
  const choice = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  return names.map(x => choice(["Mr. Pink", "Mr. Orange", "Mr. Blonde"]));
};
console.log(assignCodeNames(NAMES));

const hashedCodeNames = names => {
  const hash = str => {
    return crypto
      .createHash("sha256")
      .update(str)
      .digest("hex");
  };
  return names.map(hash, names);
};
console.log(hashedCodeNames(NAMES));
