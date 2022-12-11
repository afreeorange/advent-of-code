import { sign } from "crypto";
import { readFile } from "./util.mjs";

const SAMPLE_SIGNALS_AND_CORRECT_START_OF_PACKET_MARKERS = [
  ["mjqjpqmgbljsphdztnvjfqwrcgsmlb", 7],
  ["bvwbjplbgvbhsrlpgdmjqwftvncz", 5],
  ["nppdvjthqldpwncqszvftbrmjlhg", 6],
  ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 10],
  ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 11],
];
const sample = SAMPLE_SIGNALS_AND_CORRECT_START_OF_PACKET_MARKERS;

const data = readFile("./day_6.txt")[0];

const detectStartOfMarker = (signal, tilingWindow = 4) => {
  let startIndex = 0;

  while (startIndex + tilingWindow <= signal.length) {
    let tile = signal.slice(startIndex, startIndex + tilingWindow);

    if (new Set(tile).size === tilingWindow) {
      return startIndex + tilingWindow;
    }

    startIndex += 1;
  }
};

// console.log(detectStartOfMarker(sample[4][0], 14));
console.log("Part 1: ", detectStartOfMarker(data));
console.log("Part 2: ", detectStartOfMarker(data, 14));
