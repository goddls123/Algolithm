const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, L, R] = input.shift();
const board = input;

let visited = Array.from(new Array(N), () => new Array(N).fill(false));

const isFine = (a, b) => Math.abs(a - b) >= L && Math.abs(a - b) <= R;

const BFS = (start) => {
  const queue = [start];
  const list = [start];
  let count = board[start[0]][start[1]];
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = x + dx[i];
      const ay = y + dy[i];

      if (ax >= 0 && ay >= 0 && ax < N && ay < N) {
        if (!visited[ax][ay] && isFine(board[x][y], board[ax][ay])) {
          visited[ax][ay] = true;
          count = count + board[ax][ay];
          queue.push([ax, ay]);
          list.push([ax, ay]);
        }
      }
    }
  }

  if (list.length === 1) return 0;

  count = Math.floor(count / list.length);

  for (let i = 0; i < list.length; i++) {
    board[list[i][0]][list[i][1]] = count;
  }

  return 1;
};

let day = 0;

while (1) {
  visited = Array.from(new Array(N), () => new Array(N).fill(false));
  let change = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        change += BFS([i, j]);
      }
    }
  }
  if (change === 0) break;
  day++;
}

console.log(day);
