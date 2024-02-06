const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

const board = input.map((i) => i.split("").map(Number));

const recursion = (x, y, n) => {
  if (n === 1) {
    return board[x][y];
  }
  n /= 2;
  const tmp1 = recursion(x, y, n);
  const tmp2 = recursion(x, y + n, n);
  const tmp3 = recursion(x + n, y, n);
  const tmp4 = recursion(x + n, y + n, n);

  if (tmp1 + tmp2 + tmp3 + tmp4 === 0) {
    return 0;
  } else if (tmp1 + tmp2 + tmp3 + tmp4 === 4) {
    return 1;
  } else {
    return `(${tmp1}${tmp2}${tmp3}${tmp4})`;
  }
};
const result = recursion(0, 0, N);
console.log(result);
