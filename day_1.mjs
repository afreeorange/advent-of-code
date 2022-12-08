import { readFileSync } from "fs";

const calories = readFileSync("./day_1.txt")
    .toString()
    .split("\n\n")
    .map((_) =>
        _.split("\n")
            .map((__) => parseInt(__))
            .reduce((a, c) => a + c)
    )
    .filter((_) => !isNaN(_))
    .sort((a, b) => (a >= b ? 1 : -1));

calories.map((_) => console.log(_, "calories"));

console.log(
    "Calories carried by top three elves:",
    calories.slice(-3).reduce((a, c) => a + c)
);
