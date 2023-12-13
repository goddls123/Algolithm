const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();
const board = input;
let minVirus = Infinity;
let wall = 3;
const virus = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 1) {
      wall++;
    }
    if (board[i][j] === 2) {
      virus.push([i, j]);
    }
  }
}

const BFS = (map) => {
  const queue = [...virus];
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  let count = 0;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = x + dx[i];
      const ay = y + dy[i];
      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (map[ax][ay] === 0) {
          map[ax][ay] = 2;
          count++;
          queue.push([ax, ay]);
        }
      }
    }
  }
  return count;
};

function DFS(L) {
  if (L === 3) {
    minVirus = Math.min(minVirus, BFS([...board.map((b) => [...b])]));

    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) {
        board[i][j] = 1;
        DFS(L + 1);
        board[i][j] = 0;
      }
    }
  }
}

DFS(0);
console.log(M * N - wall - minVirus - virus.length);
