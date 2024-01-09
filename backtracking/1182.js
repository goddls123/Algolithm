const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();
const numbers = input[0];

let count = 0;
function backtracking(n, index, sum) {
  if (n === 0) {
    if (M === sum) {
      count++;
    }
    return;
  }
  for (let i = index; i < N; i++) {
    backtracking(n - 1, i + 1, sum + numbers[i]);
  }
}

for (let i = 1; i <= N; i++) {
  backtracking(i, 0, 0);
}

console.log(count);
