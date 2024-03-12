const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split(" ");

const [A, B, C] = input.map(BigInt);

const recursion = (a, b) => {
  if (b === 1n) {
    return a % C;
  }
  const tmp = recursion(a, b / 2n);

  let result = (tmp * tmp) % C;
  if (b % 2n) {
    result = (result * A) % C;
  }
  return result;
};

console.log(recursion(A, B).toString());
