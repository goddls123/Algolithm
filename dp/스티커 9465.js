const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

const result = [];
let k = 0;
for (let i = 0; i < N; i++) {
  const M = Number(input[k]);
  const sticker = [];
  sticker.push(input[k + 1].split(" ").map(Number));
  sticker.push(input[k + 2].split(" ").map(Number));
  const dp = new Array(M);

  dp[0] = [0, sticker[0][0], sticker[1][0]];

  for (let j = 1; j < M; j++) {
    dp[j] = [
      Math.max(...dp[j - 1]),
      Math.max(dp[j - 1][0] + sticker[0][j], dp[j - 1][2] + sticker[0][j]),
      Math.max(dp[j - 1][0] + sticker[1][j], dp[j - 1][1] + sticker[1][j]),
    ];
  }
  result.push(Math.max(...dp[M - 1]));

  k += 3;
}

console.log(result.join("\n"));
