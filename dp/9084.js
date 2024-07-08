const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const T = Number(input.shift());

const result = [];
for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const coins = input.shift().split(" ").map(Number);
  const K = Number(input.shift());
  const money = new Array(K + 1).fill(0);
  money[0] = 1;
  for (let j = 0; j < N; j++) {
    for (let k = 1; k <= K; k++) {
      if (k < coins[j]) continue;
      money[k] = money[k] + money[k - coins[j]];
    }
  }
  result.push(money[K]);
}

console.log(result.join("\n"));
