const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((i) => i.split(" ").map(Number));
const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];
const virus = [];

let blank = 0;
let wall = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1) {
      wall++;
    } else if (board[i][j] === 0) {
      blank++;
    } else {
      virus.push([i, j]);
    }
  }
}

const used = new Array(virus.length).fill(0);

let min = Infinity;
const bfs = (start) => {
  const queue = [];
  const visited = Array.from(new Array(N), () => new Array(N).fill(0));
  start.forEach(([x, y]) => {
    visited[x][y] = true;
    queue.push([x, y, 0]);
  });
  let count = blank;
  let time = 0;
  while (queue.length) {
    const [x, y, d] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = dx[i] + x;
      const ay = dy[i] + y;

      if (ax >= 0 && ay >= 0 && ax < N && ay < N) {
        if (!visited[ax][ay] && board[ax][ay] !== 1) {
          visited[ax][ay] = true;
          queue.push([ax, ay, d + 1]);
          if (board[ax][ay] === 0) {
            time = d + 1;
            count--;
          }
        }
      }
    }
  }

  return count === 0 ? time : Infinity;
};

const dfs = (L, index, list) => {
  if (L === M) {
    min = Math.min(min, bfs(list));
    return;
  }
  for (let i = index; i < virus.length; i++) {
    if (!used[i]) {
      used[i] = true;
      list.push(virus[i]);
      dfs(L + 1, i + 1, list);
      used[i] = false;
      list.pop();
    }
  }
};

dfs(0, 0, []);

console.log(min === Infinity ? -1 : min);
