const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const [start, end] = input.pop().split(" ").map(Number);
const N = Number(input.shift());
const M = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));

const graph = Array.from(new Array(N + 1), () => []);
const dp = new Array(N + 1).fill(Infinity);
const visited = new Array(N + 1).fill(false);
for (let i = 0; i < M; i++) {
  const [from, to, cost] = input[i];
  graph[from].push([to, cost]);
}

const getMinNode = () => {
  let min = Infinity;
  let index = 0;

  for (let i = 1; i <= N; i++) {
    if (!visited[i] && min > dp[i]) {
      min = dp[i];
      index = i;
    }
  }
  return index;
};

const dijkstra = (next) => {
  while (next) {
    visited[next] = true;

    for (let i = 0; i < graph[next].length; i++) {
      const [node, cost] = graph[next][i];
      if (!visited[node]) {
        dp[node] = Math.min(dp[node], dp[next] + cost);
      }
    }

    next = getMinNode();
  }
};

dp[start] = 0;
dijkstra(start);

console.log(dp[end]);
