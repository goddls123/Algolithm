const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const board = input.map((i) => i.split(" ").map(Number));
const visited = Array.from(new Array(N), () => new Array(M).fill(false));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let tomatos = [];

let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 1) {
      tomatos.push([i, j]);
    } else if (board[i][j] === 0) {
      count++;
    }
  }
}

const dfs = (queue) => {
  const tmp = [];

  for (let i = 0; i < queue.length; i++) {
    const [x, y] = queue[i];

    visited[x][y] = true;
    for (let j = 0; j < 4; j++) {
      const ax = x + dx[j];
      const ay = y + dy[j];
      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (!visited[ax][ay] && !board[ax][ay]) {
          visited[ax][ay] = true;
          count--;
          tmp.push([ax, ay]);
        }
      }
    }
  }
  return tmp;
};
let time = 0;
while (1) {
  tomatos = dfs(tomatos);
  if (!tomatos.length) break;
  time++;
}

console.log(count === 0 ? time : -1);
