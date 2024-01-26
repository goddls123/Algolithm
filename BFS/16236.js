const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((i) => i.split(" ").map(Number));

let shark = [];
let level = 2;
let status = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 9) {
      shark.push(i, j);
    }
  }
}

const bfs = (start) => {
  let queue = [start];
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const visited = Array.from(new Array(N), () => new Array(N).fill(-1));
  visited[start[0]][start[1]] = 0;

  while (queue.length) {
    let nq = [];
    let tmp = [];

    for (let i = 0; i < queue.length; i++) {
      const [x, y] = queue[i];
      for (let j = 0; j < 4; j++) {
        const ax = dx[j] + x;
        const ay = dy[j] + y;

        if (ax >= 0 && ay >= 0 && ax < N && ay < N) {
          if (visited[ax][ay] === -1 && board[ax][ay] <= level) {
            visited[ax][ay] = visited[x][y] + 1;
            if (board[ax][ay] && board[ax][ay] < level) {
              tmp.push([ax, ay]);
            } else {
              nq.push([ax, ay]);
            }
          }
        }
      }
    }
    if (tmp.length) {
      tmp.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]));

      const [x, y] = tmp[0];
      status++;
      if (level === status) {
        level++;
        status = 0;
      }
      board[x][y] = 0;
      shark = [x, y];
      return visited[x][y];
    }
    queue = nq;
  }

  return 0;
};

let time = 0;

while (1) {
  const d = bfs(shark);

  if (d === 0) break;

  time += d;
}
console.log(time);
