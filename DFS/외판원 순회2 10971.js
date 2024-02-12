const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

const board = input.map((i) => i.split(" ").map(Number));

const visited = new Array(N).fill(0);
const minV = Math.min(...[].concat(...board));

let min = Infinity;
const dfs = (L, next, sum) => {
  if (L === N - 1) {
    if (board[next][0]) {
      min = Math.min(min, sum + board[next][0]);
    }
    return;
  }
  if (sum + (L - 1) * minV > min) return;

  for (let i = 0; i < N; i++) {
    if (!visited[i] && board[next][i]) {
      visited[i] = true;
      dfs(L + 1, i, sum + board[next][i]);
      visited[i] = false;
    }
  }
};

visited[0] = true;
dfs(0, 0, 0);

console.log(min);
