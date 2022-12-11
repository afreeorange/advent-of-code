import { readFileSync } from "fs";

/**
 * The small file-reading utility we have in `util.mjs` won't work here since
 * trimming things corrupts the stack information.
 */
let [rawStackState, instructions] = readFileSync("./day_5.txt")
  .toString()
  // This is the known/given delimiter between the stack configuration and the
  // instructions.
  .split("\n\n");

const numberOfStacks = parseInt(
  rawStackState.split("\n").slice(-1)[0].trim().split(" ").slice(-1)[0]
);
console.log("We observe", numberOfStacks, "stacks.");

/**
 * Let's make a list of instructions. We `trim` here and not when we got our
 * input since doing it then would've corrupted stack state 🤷‍♂️
 */
instructions = instructions
  .trim()
  .split("\n")
  .map((_) => _.split(" "))
  .map((_) => ({
    quantity: parseInt(_[1]),
    from: parseInt(_[3]),
    to: parseInt(_[5]),
  }));
console.log("We have", instructions.length, "instructions.");

/**
 * Let's build a nice map of the stacks and the crates. Initialize the map
 * with the stack numbers (starting at one and not zero!). This is a bit gnarly
 * but that's JavaScript for you ❤️
 *
 * Also: As in Python, arrays are really maps. Hence the `keys()` part.
 */
const stackState = [...Array(numberOfStacks + 1).keys()]
  .slice(1)
  .reduce((a, v) => ({ ...a, [v]: [] }), {});

/**
 * Now update the stack state from the raw input.
 */
rawStackState
  // Turn the text into a list of lines
  .split("\n")
  // Remove the last line that has stack numbers
  .slice(0, -1)
  // Turn each 'raw' line into a list of crates
  .map((_) => {
    let row = [];

    for (let j = 0; j < numberOfStacks; j++) {
      row.push(_.slice(4 * j, 4 * j + 3)); // lol
    }

    return row;
  })
  // Add crates to the stack state based on their indices in the list we
  // created above. Make sure we're not adding 'blank' crate names!
  .map((_) => {
    for (let k = 0; k < _.length; k++) {
      if (_[k].trim() !== "") {
        // The last element of each child-array is the 'topmost' crate.
        stackState[k + 1].unshift(_[k]);
      }
    }
  });

/**
 * Aaah! A nice data structure we can work with! 🤗 This is the state of all
 * stacks as keys to their crates as an array of values. We'll just be pushing
 * and popping things (crates!) onto and off the arrays based on the
 * instructions. Let's admire our work so far.
 */
console.log("\nInitial Stack State");
console.log(stackState);

/**
 * Now start moving things! It's easy with our nice data structure! 🥂 This is
 * Part 1 where we're moving things one at a time.
 */
instructions.map((i) => {
  for (let q = 0; q < i.quantity; q++) {
    let _ = stackState[i.from].pop();
    stackState[i.to].push(_);
  }
});

console.log("\nFinal Stack State");
console.log(stackState);

console.log("\nHere's what we tell our Elvish (ya I know) friends:");
console.log(
  [...Array(numberOfStacks + 1).keys()]
    .slice(1)
    .map((_) =>
      // Not always guaranteed that you'll have a crate on this stack (we're
      // filtering for empty strings which mean no crates)
      stackState[_].slice(-1)[0].length > 1 ? stackState[_].slice(-1)[0][1] : ""
    )
    .join("")
);
