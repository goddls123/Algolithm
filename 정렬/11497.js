const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const T = Number(input.shift());
const result = [];
for (let i = 0; i < T; i++) {
  const N = Number(input[i * 2]);
  const nums = input[i * 2 + 1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  let max = nums[N - 2] - nums[N - 1];

  for (let i = 0; i < N - 2; i++) {
    max = Math.max(max, nums[i] - nums[i + 2]);
  }
  result.push(max);
}

console.log(result.join("\n"));
