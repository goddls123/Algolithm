const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();
const board = input;

const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

const dp = Array.from(new Array(N), () => new Array(M).fill(0));

dp[N - 1][M - 1] = 1;

let total = 0;
function DFS(x, y) {
  total++;

  if (dp[x][y]) {
    return dp[x][y];
  }
  let count = 0;
  for (let i = 0; i < 4; i++) {
    const ax = x + dx[i];
    const ay = y + dy[i];
    if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
      if (board[ax][ay] < board[x][y]) {
        count += DFS(ax, ay);
      }
    }
  }
  dp[x][y] = count;

  return count;
}

DFS(0, 0);

console.log(dp[0][0]);
