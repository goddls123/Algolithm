const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();
const list = [0, 0, 1, 7, 4, 2, 0, 8];
const dp = [0, 0, 1, 7, 4, 2, 6, 8, 10];

function getMin(num) {
  for (let i = dp.length; i <= num; i++) {
    dp[i] = dp[i - 2] * 10 + list[2];
    for (let j = 3; j < 8; j++) {
      dp[i] = Math.min(dp[i], dp[i - j] * 10 + list[j]);
    }
  }
  return dp[num];
}

const result = [];
for (let i = 0; i < N; i++) {
  const num = input[i];
  const max =
    num % 2 === 0 ? "1".repeat(num / 2) : `7${"1".repeat((num - 3) / 2)}`;

  const min = dp[num] ? dp[num] : getMin(num);

  result.push([min, max]);
}

console.log(result.map((r) => r.join(" ")).join("\n"));
