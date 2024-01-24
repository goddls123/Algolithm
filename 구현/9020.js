const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();
const result = [];

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
for (let i = 0; i < N; i++) {
  let n = input[i] / 2;
  for (let j = n; j >= 2; j--) {
    if (isPrime(j) && isPrime(input[i] - j)) {
      result.push([j, input[i] - j]);
      break;
    }
  }
}

console.log(result.map((r) => r.join(" ")).join("\n"));
