import { readFile } from "./util.mjs";

const input = readFile("./day_4.txt");

/**
 * Where `a` and `b` are a two-element tuple.
 */
const contained = (a, b) => (a[0] >= b[0] && a[1] <= b[1] ? true : false);

console.log(
  input
    .map((_) => {
      /**
       * Create tuples for each record. This can be more readable...
       */
      const [a, b] = _.split(",").map((_) =>
        _.split("-").map((_) => parseInt(_))
      );

      return contained(a, b) || contained(b, a) ? true : false;
    })
    .filter((_) => _ === true).length
);
