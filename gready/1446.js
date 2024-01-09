const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, D] = input.shift();
const dp = new Array(D + 1).fill(Infinity);
const short = new Map();

for (let i = 0; i < N; i++) {
  const [from, to, cost] = input[i];

  if (to > D || cost >= to - from) continue;
  if (short.has(to)) {
    short.get(to).push([cost, from]);
  } else {
    short.set(to, [[cost, from]]);
  }
}

dp[0] = 0;
for (let i = 1; i <= D; i++) {
  dp[i] = dp[i - 1] + 1;
  if (short.has(i)) {
    short.get(i).forEach(([cost, from]) => {
      dp[i] = Math.min(dp[i], dp[from] + cost);
    });
  }
}
console.log(dp[D]);
