const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const coins = Array.from(new Set([...input.map(Number)]));
const size = coins.length;
const dp = new Array(M + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= M; i++) {
  for (let j = 0; j < size; j++) {
    if (i - coins[j] < 0) continue;

    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
  }
}

console.log(dp[M] === Infinity ? -1 : dp[M]);
