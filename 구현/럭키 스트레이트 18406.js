const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let number = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("")
  .map(Number);

const n = number.length;
let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < n / 2; i++) {
  sum1 += number[i];
}
for (let i = n / 2; i < n; i++) {
  sum2 += number[i];
}

console.log(sum1 === sum2 ? "LUCKY" : "READY");
