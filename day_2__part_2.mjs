import { readFileSync } from "fs";

const RULES = {
    A: "Rock",
    B: "Paper",
    C: "Scissors",
    X: "Lose",
    Y: "Draw",
    Z: "Win",
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
 *   Opponent's Play: {
 *     Desired Result: What you should play
 *   }
 * }
 */
const RESULTS = {
    Rock: {
        Draw: "Rock",
        Lose: "Scissors",
        Win: "Paper",
    },
    Paper: {
        Draw: "Paper",
        Lose: "Rock",
        Win: "Scissors",
    },
    Scissors: {
        Draw: "Scissors",
        Lose: "Paper",
        Win: "Rock",
    },
};

const getResult = (playTuple) => {
    const o = RULES[playTuple[0]];
    const y = RULES[playTuple[1]];
    const r = RESULTS[o][y];
    const s = SCORES[y] + SCORES[r];

    console.log(`They chose ${o} and to ${y} you chose ${r}: ${r} (${s})`);
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
