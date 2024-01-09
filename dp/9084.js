const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const T = Number(input.shift());

const result = [];
for (let i = 0; i < T; i++) {
  const n = Number(input[i * 3]);
  const coins = input[i * 3 + 1].split(" ").map(Number);
  const money = Number(input[i * 3 + 2]);
  const dp = new Array(money + 1).fill(0);

  dp[0] = 1;
  for (let j = 0; j < n; j++) {
    for (let k = coins[j]; k <= money; k++) {
      dp[k] += dp[k - coins[j]];
    }
  }

  result.push(dp[money]);
}

console.log(result.join("\n"));
