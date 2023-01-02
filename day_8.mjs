import { readFile } from "./util.mjs";

// Read data into a matrix
const data = readFile("./sample.day_8.txt").map((_) => _.split(""));

/**
 * @param {number[][]} data A matrix of trees
 * @returns {number}
 */
const edgeCount = (data) => data[0].length * 2 + (data.length - 2) * 2;

/**
 * @param {number[][]} data
 * @param {number} at
 * @param {number} neighbors
 * @returns {number[][]}
 */
const fetchTile = (data, at = 0, neighbors = 1) => {
  return [data];
};

console.log(edgeCount(data));
console.log(fetchTile(data, 1));
console.log(data);
