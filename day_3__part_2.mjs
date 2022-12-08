import { readFile } from "./util.mjs";
import { getPriority } from "./day_3__part_1.mjs";

const input = readFile("./day_3.txt");

console.log(
  input
    .map((_, index) =>
      /**
       * We assume that the number of lines in the file is divisible by three
       * and won't get defensive here...
       */
      index % 3 === 0
        ? [
            new Set(_.split("")),
            new Set(input[index + 1].split("")),
            new Set(input[index + 2].split("")),
          ]
        : null
    )
    .filter((_) => _ != null)
    .map((_) => {
      const [a, b, c] = _;

      // Intersection and priority
      const i = [...a].filter((_) => b.has(_)).filter((_) => c.has(_));
      const p = i.map((_) => getPriority(_));

      return p[0];
    })
    .reduce((c, v) => parseInt(c) + parseInt(v))
);
