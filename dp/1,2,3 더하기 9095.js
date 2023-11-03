const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = Number(input.shift());

const dp = [0, 1, 2, 4, 7];

function getCount(n) {
  if (dp[n]) {
    return dp[n];
  }
  dp[n] = getCount(n - 1) + getCount(n - 2) + getCount(n - 3);
  return dp[n];
}

const result = [];
for (let i = 0; i < N; i++) {
  result.push(getCount(input[i]));
}

console.log(result.join("\n"));
