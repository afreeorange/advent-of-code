/**
 * Two parts to this:
 *
 * 1) Create a searchable tree object.
 * 2) Search the tree recursively.
 */

import { readFile } from "./util.mjs";

const data = readFile("./sample.day_7.txt");

/**
 * @param {string[]} data
 */
const makeTree = (data) => {
  let tree = {};

  data.map((line) => {
    /**
     * We have five patterns to match
     *
     *  - $ cd <folder>
     *  - $ cd ..
     *  - $ ls
     *  - dir <folder>
     *  - <number> <file>
     */

    if (line.match(/^\$\scd\s\.\./)) {
      console.log("MOVE UP");
    } else if (line.match(/^\$\scd\s.*/)) {
      console.log("ENTER FOLDER");
    } else if (line.match(/^\$\ls/)) {
      console.log("FOLDER LISTING");
    } else if (line.match(/^dir (.*)/)) {
      console.log("LIST - DIR");
    } else {
      console.log("LIST - File");
    }

    // let currentNode = "";

    // We have a command
    // if (line.startsWith("$ ")) {
    //   let fragments = line.split(" ");

    //   // We are entering a folder. Initialize it.
    //   if (fragments.includes("cd") && !fragments.includes("..")) {
    //     tree[fragments[2]] = {
    //       name: fragments[2],
    //       type: "folder",
    //       size: 0,
    //       children: [],
    //     };
    //   }
    // }
  });

  console.log(tree);
};

console.log("data :>> ", makeTree(data));
