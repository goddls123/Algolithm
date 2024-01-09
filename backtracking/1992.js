const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().split("\n");

const N = Number(input.shift());

const board = input.map((i) => i.split("").map(Number));
function recursion(x, y, n) {
  if (n === 1) {
    return board[x][y];
  }
  n /= 2;
  const tmp1 = recursion(x, y, n);
  const tmp2 = recursion(x, y + n, n);
  const tmp3 = recursion(x + n, y, n);
  const tmp4 = recursion(x + n, y + n, n);

  if (
    (tmp1 === 1 || tmp1 === 0) &&
    tmp1 === tmp2 &&
    tmp1 === tmp3 &&
    tmp1 === tmp4
  ) {
    return tmp1;
  } else {
    return `(${tmp1}${tmp2}${tmp3}${tmp4})`;
  }
}

console.log(recursion(0, 0, N));
