const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const S = Number(input);

let i = 1;
let sum = 1;
while (sum <= S) {
  i++;
  sum += i;
}

console.log(S === sum ? i : i - 1);
