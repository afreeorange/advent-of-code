import { readFileSync } from "fs";

const SHAPES = {
    A: "Rock",
    B: "Paper",
    C: "Scissors",
    X: "Rock",
    Y: "Paper",
    Z: "Scissors",
};

const SCORES = {
    Rock: 1,
    Paper: 2,
    Scissors: 3,

    Lose: 0,
    Draw: 3,
    Win: 6,
};

/**
 * {
 *   What the opponent chose: {
 *     What you chose: The result
 *   }
 * }
 */
const RESULTS = {
    Rock: {
        Rock: "Draw",
        Paper: "Lose",
        Scissors: "Win",
    },
    Paper: {
        Rock: "Win",
        Paper: "Draw",
        Scissors: "Lose",
    },
    Scissors: {
        Rock: "Lose",
        Paper: "Win",
        Scissors: "Draw",
    },
};

const getResult = (playTuple) => {
    const o = SHAPES[playTuple[0]];
    const y = SHAPES[playTuple[1]];
    const r = RESULTS[y][o];
    const s = SCORES[y] + SCORES[r];

    console.log(
        `They chose ${o} and a ${r} is required, so you played ${y} (${s})`
    );
    return s;
};

console.log(
    "Strategy Total:",
    readFileSync("./day_2.txt")
        .toString()
        .trim()
        .split("\n")
        .map((_) => getResult(_.split(" ")))
        .reduce((c, v) => c + v)
);
