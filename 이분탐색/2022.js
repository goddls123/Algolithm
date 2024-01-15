const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [x, y, c] = input;

let low = 0;
let high = Math.max(x, y);

let result = 0;
const getC = (h1, h2) => (h1 * h2) / (h1 + h2);

while (high - low > 1e-6) {
  let w = (low + high) / 2;
  let h1 = (x ** 2 - w ** 2) ** 0.5;
  let h2 = (y ** 2 - w ** 2) ** 0.5;
  if (getC(h1, h2) >= c) {
    result = w;
    low = w;
  } else {
    high = w;
  }
}
console.log(result);
