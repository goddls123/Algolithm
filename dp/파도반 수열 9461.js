const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();
const dp = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
const result = [];

function getSides(n) {
  if (dp[n] !== undefined) {
    return dp[n];
  }
  dp[n] = getSides(n - 1) + getSides(n - 5);
  return dp[n];
}

for (let i = 0; i < N; i++) {
  result.push(getSides(input[i]));
}

console.log(result.join("\n"));
