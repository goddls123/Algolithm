const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = +require("fs").readFileSync(file).toString().trim();

const dp = new Array(N + 1).fill(0);

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[N]);
