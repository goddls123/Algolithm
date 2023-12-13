const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();

const board = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    board[i][j] =
      board[i - 1][j] +
      board[i][j - 1] -
      board[i - 1][j - 1] +
      input[i - 1][j - 1];
  }
}

const result = [];

for (let i = N; i < N + M; i++) {
  const [x1, y1, x2, y2] = input[i];

  const tmp =
    board[x2][y2] -
    board[x1 - 1][y2] -
    board[x2][y1 - 1] +
    board[x1 - 1][y1 - 1];

  result.push(tmp);
}

console.log(result.join("\n"));
