const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = Number(input.shift());
const graph = Array.from(new Array(N + 1), () => []);
const visited = new Array(N + 1).fill(0);

visited[1] = 1;

input.forEach((i) => {
  const [from, to] = i.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (node) => {
  for (let i = 0; i < graph[node].length; i++) {
    const next = graph[node][i];
    if (!visited[next]) {
      visited[next] = node;
      dfs(next);
    }
  }
};

dfs(1);
console.log(visited.slice(2).join("\n"));
