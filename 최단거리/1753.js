class minHeap {
  constructor() {
    this.heap = [];
  }
  length() {
    return this.heap.length;
  }
  push(value) {
    this.heap.push(value);
    if (this.heap.length === 1) return;

    let i = this.heap.length - 1;
    let parentI = Math.floor((i - 1) / 2);

    while (i && this.heap[i][0] < this.heap[parentI][0]) {
      this.swap(i, parentI);
      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const tmp = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;
    let nextI = 0;

    while (1) {
      let leftI = i * 2 + 1;
      let rightI = i * 2 + 2;
      if (leftI >= this.heap.length) break;

      if (this.heap[nextI][0] > this.heap[leftI][0]) {
        nextI = leftI;
      }

      if (
        rightI < this.heap.length &&
        this.heap[nextI][0] > this.heap[rightI][0]
      ) {
        nextI = rightI;
      }

      if (i === nextI) break;

      this.swap(i, nextI);
      i = nextI;
    }

    return tmp;
  }
  swap(a, b) {
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }
}

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const start = Number(input.shift());

const dp = new Array(N + 1).fill(Infinity);
const graph = Array.from(new Array(N + 1), () => []);

for (let i = 0; i < M; i++) {
  const [from, to, cost] = input[i].split(" ").map(Number);
  graph[from].push([cost, to]);
}
const dijkstra = (start) => {
  const queue = new minHeap();
  dp[start] = 0;
  queue.push([0, start]);

  while (queue.length()) {
    const [cost, node] = queue.pop();
    if (cost > dp[node]) continue;

    for (let i = 0; i < graph[node].length; i++) {
      const [nextCost, next] = graph[node][i];

      if (nextCost + cost < dp[next]) {
        dp[next] = nextCost + cost;
        queue.push([dp[next], next]);
      }
    }
  }
};

dijkstra(start);
console.log(
  dp
    .slice(1)
    .map((n) => (n === Infinity ? "INF" : n))
    .join("\n")
);
