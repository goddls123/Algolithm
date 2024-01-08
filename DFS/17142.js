const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();
const board = input;

const virus = [];
let blank = 0;
let wall = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 0) {
      blank++;
    } else if (board[i][j] === 1) {
      wall++;
    } else {
      virus.push([i, j]);
    }
  }
}
const used = new Array(virus.length);

const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

function bfs(start) {
  const queue = [...start];
  const visited = Array.from(new Array(N), () => new Array(N).fill(-1));
  let count = blank;
  let time = 0;
  queue.forEach(([x, y]) => {
    visited[x][y] = 0;
  });

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = dx[i] + x;
      const ay = dy[i] + y;

      if (ax >= 0 && ay >= 0 && ax < N && ay < N) {
        if (visited[ax][ay] === -1 && board[ax][ay] !== 1) {
          visited[ax][ay] = visited[x][y] + 1;
          if (board[ax][ay] === 0) {
            count--;
            time = visited[ax][ay];
          }
          queue.push([ax, ay]);
        }
      }
    }
  }
  return count === 0 ? time : Infinity;
}
let min = Infinity;
function dfs(L, index, list) {
  if (L === M) {
    min = Math.min(min, bfs(list));
    return;
  }

  for (let i = index; i < virus.length; i++) {
    if (!used[i]) {
      used[i] = true;
      list.push(virus[i]);
      dfs(L + 1, i + 1, list);
      list.pop();
      used[i] = false;
    }
  }
}

dfs(0, 0, []);

console.log(min === Infinity ? -1 : min);
