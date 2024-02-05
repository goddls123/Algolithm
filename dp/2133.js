const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim();

let N = Number(input);

if (N % 2 === 1) {
  console.log(0);
  return;
}
N /= 2;

const dp = new Array(N + 1).fill(0);

dp[0] = 1;
dp[1] = 3;

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] * 3;

  for (let j = i - 2; j >= 0; j--) {
    dp[i] += dp[j] * 2;
  }
}

console.log(dp[N]);
