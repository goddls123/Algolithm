const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

const graph = input.map((i) => i.split(" ").map(Number));
const visited = new Array(N).fill(false);

let min = Infinity;

function DFS(L, v, sum) {
  if (L === N - 1 && graph[v][0] !== 0) {
    min = Math.min(sum + graph[v][0], min);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i] && graph[v][i] !== 0) {
      visited[i] = true;
      DFS(L + 1, i, sum + graph[v][i]);
      visited[i] = false;
    }
  }
}

visited[0] = true;
DFS(0, 0, 0);
console.log(min);
