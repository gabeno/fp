/**
 * Functional Programming
 * Ref: https://maryrosecook.com/blog/post/a-practical-introduction-to-functional-programming
 *
 */

// imperative vs declarative code

// imperative -> describes how to do

(() => {
  console.log("----- imperative style ---- ");

  let timeSteps = 5;
  let carPositions = [1, 1, 1];

  while (timeSteps) {
    // decrease time
    timeSteps -= 1;

    console.log(" ");
    for (let i = 0; i < carPositions.length; i++) {
      // move car
      if (Math.random() < 0.3) {
        carPositions[i] += 1;
      }

      // draw car
      console.log("-".repeat(carPositions[i]));
    }
  }

  console.log(" ");
})();

// declarative -> describes what to do

(() => {
  console.log("----- decalarative style ---- ");

  let timeSteps = 5;
  let carPositions = [1, 1, 1];

  const drawCar = carPosition => {
    console.log("-".repeat(carPosition));
  };

  const draw = () => {
    console.log(" ");
    for (let carPosition of carPositions) {
      drawCar(carPosition);
    }
  };

  const moveCar = () => {
    for (let i = 0; i < carPositions.length; i++) {
      if (Math.random() < 0.3) {
        carPositions[i] += 1;
      }
    }
  };

  const runStepsOfRace = () => {
    timeSteps -= 1;
    moveCar();
  };

  while (timeSteps) {
    runStepsOfRace();
    draw();
  }

  console.log(" ");
})();

// a functional declarative version

(() => {
  console.log("----- functinal decalarative style ---- ");

  const drawCar = carPosition => {
    return "-".repeat(carPosition);
  };

  const draw = carPositions => {
    console.log(" ");
    console.log(carPositions.map(drawCar).join("\n"));
  };

  const moveCar = carPositions => {
    return carPositions.map(carPosition => {
      if (Math.random() < 0.3) return (carPosition += 1);
      return carPosition;
    });
  };

  const runStepsOfRace = (timeSteps, carPositions) => {
    return { timeSteps: (timeSteps -= 1), carPositions: moveCar(carPositions) };
  };

  const race = ({ timeSteps, carPositions }) => {
    draw(carPositions);
    if (timeSteps) {
      race(runStepsOfRace(timeSteps, carPositions));
    }
  };

  race({ timeSteps: 5, carPositions: [1, 1, 1] });
})();
