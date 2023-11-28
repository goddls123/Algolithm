const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();

const board = input;

const houses = [];
const chickens = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1) {
      houses.push([i, j]);
    } else if (board[i][j] === 2) {
      chickens.push([i, j]);
    }
  }
}

let min = Infinity;
const getLength = (list) => {
  let sum = 0;
  houses.forEach(([x, y]) => {
    let m = Infinity;
    list.forEach(([a, b]) => {
      m = Math.min(m, Math.abs(x - a) + Math.abs(y - b));
    });
    sum += m;
  });

  return sum;
};

const backtracking = (L, index, list) => {
  if (L === M) {
    min = Math.min(min, getLength(list));
    return;
  }
  for (let i = index; i < chickens.length; i++) {
    list.push(chickens[i]);
    backtracking(L + 1, i + 1, list);
    list.pop();
  }
};

backtracking(0, 0, []);

console.log(min);
