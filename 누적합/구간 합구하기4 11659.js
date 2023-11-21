const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
const [N, M] = input.shift();
const nums = input.shift();
const preSum = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  preSum[i] = preSum[i - 1] + nums[i - 1];
}
const result = [];
for (let i = 0; i < M; i++) {
  const [from, to] = input[i];

  result.push(preSum[to] - preSum[from - 1]);
}

console.log(result.join("\n"));
