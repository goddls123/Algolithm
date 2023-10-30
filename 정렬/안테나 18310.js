const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = Number(input[0]);

const list = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(list[Math.floor((N - 1) / 2)]);
