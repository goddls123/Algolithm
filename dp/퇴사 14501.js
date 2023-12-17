const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

const dp = new Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [day, cost] = input[i].split(" ").map(Number);

  for (let j = i + day; j <= N; j++) {
    dp[j] = Math.max(dp[j], dp[i] + cost);
  }
}

console.log(Math.max(...dp));
