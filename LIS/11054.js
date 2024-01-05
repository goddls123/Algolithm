const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const nums = input[0].split(" ").map(Number);

const increase = new Array(N).fill(1);
const decrease = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j]) {
      increase[i] = Math.max(increase[i], increase[j] + 1);
    }
  }
}
for (let i = N - 2; i >= 0; i--) {
  for (let j = N - 1; j > i; j--) {
    if (nums[i] > nums[j]) {
      decrease[i] = Math.max(decrease[i], decrease[j] + 1);
    }
  }
}

let max = 0;
for (let i = 0; i < N; i++) {
  max = Math.max(max, increase[i] + decrease[i]);
}

console.log(max - 1);
