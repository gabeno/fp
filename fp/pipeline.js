/**
 * Functional Programming
 * Ref: https://maryrosecook.com/blog/post/a-practical-introduction-to-functional-programming
 *
 */

// set country as Canada, strip punctiation from name, capitalize name
bands = [
  { name: "sunset rubdown", country: "UK", active: false },
  { name: "women", country: "Germany", active: false },
  { name: "a silver mt. zion", country: "Spain", active: true }
];

const assoc = (_d, key, value) => {
  const d = Object.assign({}, _d); // deep copy?
  d.key = value;
  return d;
};

const call = (fn, key) => record => {
  return assoc(record, key, fn(record.key));
};
