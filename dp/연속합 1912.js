const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = Number(input.shift());

const numbers = input[0].split(" ").map(Number);

let sum = numbers[0];
let max = -Infinity;
let flag = false;

for (let i = 1; i < N; i++) {
  if (numbers[i] < 0) {
    max = Math.max(max, sum);
    if (numbers[i] + sum > 0) {
      sum += numbers[i];
    } else {
      sum = 0;
    }
  } else {
    flag = true;
    sum += numbers[i];
  }
}
max = Math.max(max, sum);

console.log(flag ? max : Math.max(...numbers));
