const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const n = Number(input.shift());
const start = Number(input.pop());
input = input[0].split(" ").map(Number);
const graph = Array.from(new Array(n), () => []);
const map = new Map();
for (let i = 0; i < input.length; i++) {
  if (input[i] == -1) continue;
  if (i === start) continue;
  graph[input[i]].push(i);
}

const remove = (node) => {
  if (!graph[node].length) {
    map.set(node, true);
    return;
  }

  for (let i = 0; i < graph[node].length; i++) {
    const next = graph[node][i];
    remove(next);
  }
  graph[node] = [];
  map.set(node, true);

  return;
};

let count = 0;
remove(start);

for (let i = 0; i < n; i++) {
  if (!map.has(i) && !graph[i].length) {
    count++;
  }
}
console.log(count);
