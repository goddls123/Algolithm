const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((i) => i.split("").map(Number));
const newBoard = board.map((b) => [...b]);
const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

const dp = [0, 0];

let index = 2;

const bfs = (start, flag) => {
  const queue = [start];
  board[start[0]][start[1]] = flag;
  let count = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const ax = dx[i] + x;
      const ay = dy[i] + y;
      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (!board[ax][ay]) {
          board[ax][ay] = flag;
          count++;
          queue.push([ax, ay]);
        }
      }
    }
  }
  return count;
};
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 0) {
      const count = bfs([i, j], index);
      dp[index] = count;
      index++;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] !== 1) continue;
    const set = new Set();

    for (let k = 0; k < 4; k++) {
      const ax = dx[k] + i;
      const ay = dy[k] + j;
      if (ax < 0 || ay < 0 || ax >= N || ay >= M) continue;
      set.add(board[ax][ay]);
    }
    set.forEach((index) => {
      newBoard[i][j] = (newBoard[i][j] + dp[index]) % 10;
    });
  }
}

console.log(newBoard.map((b) => b.join("")).join("\n"));
