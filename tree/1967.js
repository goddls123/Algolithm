const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));

const tree = Array.from(new Array(n + 1), () => []);
const visited = new Array(n + 1).fill(0);

input.forEach(([from, to, cost]) => {
  tree[from].push([cost, to]);
  tree[to].push([cost, from]);
});

let max = 0;
let maxNode = 0;
const dfs = (dist, node) => {
  visited[node] = true;
  if (dist > max) {
    max = dist;
    maxNode = node;
  }
  for (let i = 0; i < tree[node].length; i++) {
    const [nextCost, next] = tree[node][i];
    if (!visited[next]) {
      dfs(nextCost + dist, next);
    }
  }
};
dfs(0, 1);
visited.fill(false);
max = 0;
dfs(0, maxNode);
console.log(max);
