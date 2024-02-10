const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((i) => i.split(" ").map(Number));
const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];
let cheeses = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j]) {
      cheeses.push([i, j, 1]);
    }
  }
}

const melt = (queue) => {
  for (let i = 0; i < queue.length; i++) {
    let [x, y, h] = queue[i];
    for (let j = 0; j < 4; j++) {
      const ax = dx[j] + x;
      const ay = dy[j] + y;
      if (board[ax][ay] === -2) {
        h--;
      }
    }
    if (h < 0) {
      queue[i][2] = 0;
    }
  }
  for (let i = 0; i < queue.length; i++) {
    const [x, y, h] = queue[i];
    board[x][y] = h;
  }
  return queue.filter((q) => q[2] > 0);
};

const bfs = () => {
  const visited = Array.from(new Array(N), () => new Array(M).fill(0));
  visited[0][0] = 1;
  board[0][0] = -2;
  const queue = [[0, 0]];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = dx[i] + x;
      const ay = dy[i] + y;
      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (!visited[ax][ay] && board[ax][ay] <= 0) {
          visited[ax][ay] = true;
          board[ax][ay] = -2;
          queue.push([ax, ay]);
        }
      }
    }
  }
};

let time = 0;

while (cheeses.length) {
  bfs();
  cheeses = melt(cheeses);

  time++;
}

console.log(time);
