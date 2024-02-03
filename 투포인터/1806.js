const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, S] = input.shift().split(" ").map(Number);
const nums = input[0].split(" ").map(Number);

let right = 0;
let sum = 0;
let min = Infinity;

for (let left = 0; left < N; left++) {
  while (right < N && sum < S) {
    sum += nums[right];
    right++;
  }

  if (sum >= S) {
    min = Math.min(min, right - left);
  }
  sum -= nums[left];
}

console.log(min === Infinity ? 0 : min);
