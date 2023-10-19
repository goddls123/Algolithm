//다이얼

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim();

///알파벳 마다 걸리는 시간
const dial = {
  A: 3,
  B: 3,
  C: 3,
  D: 4,
  E: 4,
  F: 4,
  G: 5,
  H: 5,
  I: 5,
  J: 6,
  K: 6,
  L: 6,
  M: 7,
  N: 7,
  O: 7,
  P: 8,
  Q: 8,
  R: 8,
  S: 8,
  T: 9,
  U: 9,
  V: 9,
  W: 10,
  X: 10,
  Y: 10,
  Z: 10,
};
let time = 0;

for (let i = 0; i < input.length; i++) {
  time += dial[input[i]];
}

console.log(time);
