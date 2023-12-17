const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((i) => i.split(" ").map(Number));

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!board[i][j]) {
        board[i][j] = board[i][k] + board[k][j] === 2 ? 1 : 0;
      }
    }
  }
}

console.log(board.map((b) => b.join(" ")).join("\n"));
