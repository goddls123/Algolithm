class minHeap {
  constructor() {
    this.heap = [];
  }
  swap(a, b) {
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }
  push(v) {
    this.heap.push(v);
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
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const tmp = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    let nextI = 0;
    while (1) {
      let leftI = i * 2 + 1;
      let rightI = i * 2 + 2;
      if (leftI >= this.heap.length) break;
      if (this.heap[leftI][0] < this.heap[nextI][0]) {
        nextI = leftI;
      }
      if (
        rightI < this.heap.length &&
        this.heap[rightI][0] < this.heap[nextI][0]
      ) {
        nextI = rightI;
      }
      if (nextI === i) break;
      this.swap(nextI, i);
      i = nextI;
    }
    return tmp;
  }
  getLength() {
    return this.heap.length;
  }
}
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const S = Number(input.shift());

const graph = Array.from(new Array(N + 1), () => []);
const dp = new Array(N + 1).fill(Infinity);
for (let i = 0; i < M; i++) {
  const [from, to, cost] = input[i].split(" ").map(Number);

  graph[from].push([cost, to]);
}

const dijkstra = (start) => {
  const queue = new minHeap();
  queue.push([0, start]);
  while (queue.getLength() > 0) {
    const [cost, node] = queue.pop();

    if (dp[node] < cost) continue;

    dp[node] = cost;

    for (let i = 0; i < graph[node].length; i++) {
      const [nCost, next] = graph[node][i];

      if (cost + nCost < dp[next]) {
        dp[next] = cost + nCost;
        queue.push([dp[next], next]);
      }
    }
  }
};

dijkstra(S);

console.log(
  dp
    .slice(1)
    .map((d) => (d === Infinity ? "INF" : d))
    .join("\n")
);
