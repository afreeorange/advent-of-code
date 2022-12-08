import { readFile } from "./util.mjs";

/**
 * Lowercase item types a through z have priorities 1 through 26.
 * Uppercase item types A through Z have priorities 27 through 52.
 */
export const getPriority = (char) =>
  char.charCodeAt() - (/[a-z]/.test(char) ? 96 : 38);

console.log(
  readFile("./day_3.txt")
    .map((_) => {
      const l = _.length; // This is always an even number of characters...
      const a = new Set(_.slice(0, l / 2));
      const b = new Set(_.slice(l / 2));

      // Intersection and priority
      const i = [...a].filter((_) => b.has(_));
      const p = i.map((_) => getPriority(_));

      return p;
    })
    // Oh JavaScript... ❤️
    .reduce((c, v) => parseInt(c) + parseInt(v))
);
