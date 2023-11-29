const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

const nums = input.map((i) => i.split(" ").map(Number));

const graph = Array.from(new Array(N + 1), () => []);

let parent = new Array(N + 1).fill(0);

nums.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start) => {
  const queue = [start];
  parent[start] = 1;

  while (queue.length) {
    const v = queue.shift();

    for (let i = 0; i < graph[v].length; i++) {
      const node = graph[v][i];
      if (parent[node] === 0) {
        parent[node] = v;
        queue.push(node);
      }
    }
  }
};

bfs(1);

parent.shift();
parent.shift();

console.log(parent.join("\n"));
