const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((i) => i.split(" ").map(Number));
const result = [0, 0];

function recursion(x, y, n) {
  if (n === 1) {
    result[board[x][y]]++;
    return board[x][y];
  }
  n /= 2;
  let sum = 0;
  sum += recursion(x, y, n);
  sum += recursion(x, y + n, n);
  sum += recursion(x + n, y, n);
  sum += recursion(x + n, y + n, n);

  if (sum === 0) {
    result[0] -= 3;
    return 0;
  } else if (sum === 4) {
    result[1] -= 3;
    return 1;
  } else {
    return 10;
  }
}

recursion(0, 0, N);

console.log(result.join("\n"));
