const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const N = input[0][0];
const nums = input[1];
const operator = input[2];

const calculator = {
  0: (a, b) => a + b,
  1: (a, b) => a - b,
  2: (a, b) => a * b,
  3: (a, b) => ~~(a / b),
};

let min = Infinity;
let max = -Infinity;

const backtracking = (L, num) => {
  if (L === N) {
    max = Math.max(max, num);
    min = Math.min(min, num);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (operator[i] > 0) {
      operator[i]--;
      backtracking(L + 1, calculator[i](num, nums[L]));
      operator[i]++;
    }
  }
};

backtracking(1, nums[0]);

console.log(max);
console.log(min);
