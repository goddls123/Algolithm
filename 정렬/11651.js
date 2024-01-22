const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

const nums = input
  .map((i) => i.split(" ").map(Number))
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

console.log(nums.map((n) => n.join(" ")).join("\n"));
