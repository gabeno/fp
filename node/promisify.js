const util = require("util");

// a function that takes long
const wait = (delay, cb) => {
  const id = setInterval(() => {
    const num = Math.random();

    if (num > 0.95) {
      cb(null, "Success! Waiting is done.");
      clearInterval(id);
    } else if (num < 0.1) {
      cb("Could not wait any longer!", null);
      clearInterval(id);
    } else {
      console.log("Waiting ...");
    }
  }, Number(delay));
};

/*
// usage
console.log("Sync version");
wait(1000, (err, data) => {
  if (err) throw new Error(err);

  console.log(data);
});
*/

console.log();

// promisify our function
const waitAsync = util.promisify(wait);

/*
// usage
console.log("Async version");
waitAsync(1000)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
*/

console.log();

// async / await
console.log("Asyn/Await");
(async () => {
  let result;

  try {
    result = await waitAsync(1000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
