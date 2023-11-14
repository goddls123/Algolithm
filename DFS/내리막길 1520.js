const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();
const board = input;

const visited = Array.from(new Array(N), () => new Array(M).fill(-1));

const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

visited[N - 1][M - 1] = 1;

const DFS = (x, y) => {
  if (visited[x][y] !== -1) {
    return visited[x][y];
  }

  let count = 0;
  for (let i = 0; i < 4; i++) {
    const ax = x + dx[i];
    const ay = y + dy[i];

    if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
      if (board[x][y] > board[ax][ay]) {
        count += DFS(ax, ay);
      }
    }
  }
  visited[x][y] = count;
  return count;
};

DFS(0, 0);

console.log(visited[0][0]);
