const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const T = Number(input.shift());

const result = [];
let i = 0;
for (let k = 0; k < T; k++) {
  const N = Number(input[i++]);
  const coins = input[i++].split(" ").map(Number);
  const money = Number(input[i++]);
  const dp = new Array(money + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j < N; j++) {
    for (let l = coins[j]; l <= money; l++) {
      dp[l] = dp[l] + dp[l - coins[j]];
    }
  }

  result.push(dp[money]);
}

console.log(result.join("\n"));
