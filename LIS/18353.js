const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number).reverse();

const dp = new Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    if (nums[j] < nums[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(N - Math.max(...dp));
