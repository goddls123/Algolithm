const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();
const board = input;

const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

let time = 0;
let cheeses = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 1) {
      cheeses.push([i, j, board[i][j]]);
    }
  }
}

function melt() {
  for (let i = 0; i < cheeses.length; i++) {
    const [x, y, cheese] = cheeses[i];
    let count = 0;
    for (let j = 0; j < 4; j++) {
      const ax = x + dx[j];
      const ay = y + dy[j];
      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (board[ax][ay] === 2) {
          count++;
        }
      }
    }
    if (count > 1) {
      cheeses[i][2] = 0;
    }
  }

  for (const [x, y, cheese] of cheeses) {
    board[x][y] = cheese;
  }
  return cheeses.filter((c) => c[2]);
}

function check() {
  const queue = [[0, 0]];
  const visited = Array.from(new Array(N), () => new Array(M).fill(false));
  visited[0][0] = true;
  board[0][0] = 2;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = x + dx[i];
      const ay = y + dy[i];
      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (!visited[ax][ay] && board[ax][ay] !== 1) {
          visited[ax][ay] = true;
          board[ax][ay] = 2;
          queue.push([ax, ay]);
        }
      }
    }
  }
}

while (1) {
  check();
  cheeses = melt();
  time++;
  if (cheeses.length === 0) {
    break;
  }
}

console.log(time);
