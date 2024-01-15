const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();

const graph = Array.from(new Array(N + 1), () => []);
let min = 0;
let minCount = Infinity;

input.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

function bfs(start) {
  const queue = [start];
  const visited = new Array(N + 1).fill(-1);
  visited[0] = 0;
  visited[start] = 0;

  while (queue.length) {
    const node = queue.shift();

    for (let i = 0; i < graph[node].length; i++) {
      if (visited[graph[node][i]] === -1) {
        visited[graph[node][i]] = visited[node] + 1;
        queue.push(graph[node][i]);
      }
    }
  }

  const tmp = visited.reduce((a, c) => (c > 0 ? a + c : a), 0);

  if (tmp < minCount) {
    minCount = tmp;
    min = start;
  }
}

for (let i = 1; i <= N; i++) {
  bfs(i);
}

console.log(min);
