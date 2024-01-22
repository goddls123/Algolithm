const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const nums = input[2].split(" ").map(Number);

let end = 0;
let max = nums[0];

for (let i = 1; i < M; i++) {
  max = Math.max(max, Math.ceil((nums[i] - end) / 2));
  end = nums[i];
}
max = Math.max(max, N - end);

console.log(max);
