const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const bags = input.map((i) => i.split(" ").map(Number));
const dp = new Array(K + 1).fill(0);

bags.forEach(([w, v]) => {
  for (let i = K; i >= w; i--) {
    dp[i] = Math.max(dp[i], dp[i - w] + v);
  }
});
console.log(Math.max(...dp));
