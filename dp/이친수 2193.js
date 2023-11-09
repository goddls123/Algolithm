const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = +require("fs").readFileSync(file).toString().trim();

const dp = new Array(N + 1).fill(0);

dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= N; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(String(dp[N]));
