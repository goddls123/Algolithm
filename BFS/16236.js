const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((i) => i.split(" ").map(Number));

let level = 2;
let status = 0;
const fishes = [];
let shark = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 9) {
      board[i][j] = 0;
      shark = [i, j];
    } else if (board[i][j] === 0) {
      continue;
    } else {
      fishes.push([0, i, j, board[i][j]]);
    }
  }
}

const next = (start) => {
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  const queue = [start];
  const visited = Array.from(new Array(N), () => new Array(N).fill(-1));
  visited[start[0]][start[1]] = 0;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const ax = dx[i] + x;
      const ay = dy[i] + y;
      if (ax >= 0 && ay >= 0 && ax < N && ay < N) {
        if (visited[ax][ay] === -1 && board[ax][ay] <= level) {
          visited[ax][ay] = visited[x][y] + 1;
          queue.push([ax, ay]);
        }
      }
    }
  }

  for (let i = 0; i < fishes.length; i++) {
    const [d, x, y, s] = fishes[i];
    fishes[i][0] = visited[x][y];
  }

  fishes.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2];
      }
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let index = fishes.findIndex((f) => f[0] !== -1 && f[3] < level);

  return index >= 0 ? fishes.splice(index, 1).pop() : [-1, 0, 0, 0];
};
let t = 0;
while (fishes.length) {
  const [d, x, y, s] = next(shark);

  if (d === -1) break;

  status++;
  if (status === level) {
    level++;
    status = 0;
  }
  shark = [x, y];
  t += d;
}

console.log(t);
