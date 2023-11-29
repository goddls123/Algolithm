const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("")
  .map(Number);

const count = [0, 0];
let start = input[0];
count[input[0]]++;
for (let i = 1; i < input.length; i++) {
  if (start !== input[i]) {
    start = input[i];
    count[input[i]]++;
  }
}

console.log(Math.min(...count));
