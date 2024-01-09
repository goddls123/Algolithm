const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const M = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));

const board = Array.from(new Array(N), () => new Array(N).fill(Infinity));

for (let i = 0; i < N; i++) {
  board[i][i] = 0;
}

for (let i = 0; i < M; i++) {
  const [from, to, cost] = input[i];

  board[from - 1][to - 1] = Math.min(board[from - 1][to - 1], cost);
}

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      board[i][j] = Math.min(board[i][j], board[i][k] + board[k][j]);
    }
  }
}

console.log(board.map((b) => b.join(" ")).join("\n"));
