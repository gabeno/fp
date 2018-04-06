/**
 * Functional Programming
 * Ref: https://maryrosecook.com/blog/post/a-practical-introduction-to-functional-programming
 *
 */

const numbers = num => str => {
  const regex = new RegExp(`^${num}`);
  return regex.test(str) ? str.substring(1) : null;
};

const zero = numbers(0);
const one = numbers(1);

/*
console.log(zero("0011"));
console.log(zero("10011"));
console.log(one("0011"));
console.log(one("10011"));
*/

const ruleSequence = (s, rules) => {
  if (!s || !rules.length) {
    return s;
  } else {
    const [first, ...rest] = rules;
    return ruleSequence(first(s), rest);
  }
};

console.log(ruleSequence("0101", [zero, one, zero]));
console.log(ruleSequence("0101", [zero, zero]));
