const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = Number(input.shift());
const M = Number(input.shift());
const [start, end] = input.pop().split(" ").map(Number);

const dp = new Array(N + 1).fill(Infinity);
const graph = Array.from(new Array(N + 1), () => []);
const visited = new Array(N + 1).fill(false);

for (let i = 0; i < M; i++) {
  const [from, to, distance] = input[i].split(" ").map(Number);
  graph[from].push([to, distance]);
}

const findNext = () => {
  let min = Infinity;
  let nextNode = 0;
  for (let i = 1; i <= N; i++) {
    if (!visited[i] && dp[i] < min) {
      min = dp[i];
      nextNode = i;
    }
  }
  return nextNode;
};

const dijkstra = (next) => {
  while (next) {
    visited[next] = true;
    for (let i = 0; i < graph[next].length; i++) {
      const [nextNode, cost] = graph[next][i];
      if (!visited[nextNode] && dp[nextNode] > dp[next] + cost) {
        dp[nextNode] = dp[next] + cost;
      }
    }
    next = findNext(next);
  }
};
dp[start] = 0;
dijkstra(start);
console.log(dp[end]);
