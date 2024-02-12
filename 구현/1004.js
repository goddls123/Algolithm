const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const T = Number(input.shift());

const isInCircle = (a, b, x, y, r) => {
  return (x - a) ** 2 + (y - b) ** 2 <= r ** 2;
};

let i = 0;
const result = [];
for (let k = 0; k < T; k++) {
  const [x1, y1, x2, y2] = input[i++].split(" ").map(Number);
  const N = Number(input[i++]);
  let count = 0;
  for (let j = 0; j < N; j++) {
    const [x, y, r] = input[i++].split(" ").map(Number);
    if (isInCircle(x1, y1, x, y, r) && isInCircle(x2, y2, x, y, r)) continue;
    if (isInCircle(x1, y1, x, y, r)) {
      count++;
    } else if (isInCircle(x2, y2, x, y, r)) {
      count++;
    }
  }
  result.push(count);
}

console.log(result.join("\n"));
