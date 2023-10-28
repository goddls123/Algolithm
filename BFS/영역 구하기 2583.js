const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
const [N, M, K] = input.shift();
const board = Array.from(new Array(N), () => new Array(M).fill(0));

for (let i = 0; i < K; i++) {
  const [y1, x1, y2, x2] = input[i];

  for (let j = x1; j < x2; j++) {
    for (let k = y1; k < y2; k++) {
      board[j][k] = 1;
    }
  }
}

const BFS = (start) => {
  const queue = [start];
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  let count = 1;
  board[start[0]][start[1]] = 2;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = x + dx[i];
      const ay = y + dy[i];

      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (board[ax][ay] === 0) {
          board[ax][ay] = 2;
          count++;
          queue.push([ax, ay]);
        }
      }
    }
  }

  return count;
};

const countList = [];
let total = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 0) {
      countList.push(BFS([i, j]));
      total++;
    }
  }
}

console.log(total);
console.log(countList.sort((a, b) => a - b).join(" "));
