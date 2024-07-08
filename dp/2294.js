const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const [N, K] = input.shift().split(" ").map(Number);

const coins = input.map(Number);
const money = new Array(K + 1).fill(Infinity);

money[0] = 0;

for (let i = 1; i <= K; i++) {
  for (let j = 0; j < N; j++) {
    if (coins[j] > i) continue;
    money[i] = Math.min(money[i], money[i - coins[j]] + 1);
  }
}

console.log(money[K] === Infinity ? -1 : money[K]);
