const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((i) => i.split(" ").map(Number));
const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];
let ices = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j]) {
      ices.push([i, j, board[i][j]]);
    }
  }
}

const melt = (queue) => {
  const tmp = [];

  for (let i = 0; i < queue.length; i++) {
    let [x, y, h] = queue[i];
    for (let j = 0; j < 4; j++) {
      const ax = x + dx[j];
      const ay = y + dy[j];

      if (board[ax][ay] === 0) {
        queue[i][2]--;
      }
    }
  }
  for (let i = 0; i < queue.length; i++) {
    const [x, y, h] = queue[i];
    board[x][y] = h >= 0 ? h : 0;
  }
  return queue.filter((q) => q[2] > 0);
};

const bfs = (start, visited) => {
  const queue = [start];
  visited[start[0]][start[1]] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const ax = x + dx[i];
      const ay = y + dy[i];

      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (!visited[ax][ay] && board[ax][ay]) {
          visited[ax][ay] = 1;
          queue.push([ax, ay]);
        }
      }
    }
  }
};
let t = 0;
let time = 0;
while (ices.length) {
  const visited = Array.from(new Array(N), () => new Array(M).fill(0));
  let count = 0;
  for (let i = 0; i < ices.length; i++) {
    const [x, y, h] = ices[i];
    if (!visited[x][y]) {
      bfs([x, y], visited);
      count++;
    }
  }

  if (count > 1) {
    time = t;
    break;
  }
  ices = melt(ices);
  t++;
}
console.log(time);
