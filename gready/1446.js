const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, D] = input.shift().split(" ").map(Number);

const dp = new Array(D + 1).fill(Infinity);
const map = new Map();

for (let i = 0; i < N; i++) {
  const [start, end, cost] = input[i].split(" ").map(Number);
  if (end > D) continue;
  if (map.has(end)) {
    map.get(end).push([start, cost]);
  } else {
    map.set(end, [[start, cost]]);
  }
}
dp[0] = 0;
for (let i = 1; i <= D; i++) {
  dp[i] = dp[i - 1] + 1;
  if (map.has(i)) {
    const route = map.get(i);
    for (let j = 0; j < route.length; j++) {
      const [start, cost] = route[j];

      dp[i] = Math.min(dp[start] + cost, dp[i]);
    }
  }
}

console.log(dp[D]);
