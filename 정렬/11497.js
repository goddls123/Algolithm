const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const T = Number(input.shift());
let i = 0;

const result = [];

for (let k = 0; k < T; k++) {
  const N = Number(input[i++]);
  const nums = input[i++]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let max = nums[1] - nums[0];

  for (let j = 2; j < N; j += 2) {
    max = Math.max(max, nums[j] - nums[j - 2]);
  }
  for (let j = 3; j < N; j += 2) {
    max = Math.max(max, nums[j] - nums[j - 2]);
  }
  result.push(max);
}

console.log(result.join("\n"));
