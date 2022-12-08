import { readFileSync } from "fs";

/**
 * Got tired of copypasta-ing this one-liner. Read a file and return its
 * contents sans the newline at the end.
 */
export const readFile = (fileName) =>
  readFileSync(fileName).toString().trim().split("\n");
