class minHeap {
  constructor() {
    this.heap = [];
  }
  getLength() {
    return this.heap.length;
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
    while (i && this.heap[i] < this.heap[parentI]) {
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
      if (this.heap[leftI] < this.heap[nextI]) {
        nextI = leftI;
      }
      if (rightI < this.heap.length && this.heap[rightI] < this.heap[nextI]) {
        nextI = rightI;
      }

      if (i === nextI) break;

      this.swap(i, nextI);
      i = nextI;
    }

    return tmp;
  }
}

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const indegree = new Array(N + 1).fill(0);
const graph = Array.from(new Array(N + 1), () => []);
const queue = new minHeap();
for (let i = 0; i < M; i++) {
  const [before, after] = input[i].split(" ").map(Number);
  graph[before].push(after);
  indegree[after]++;
}

const result = [];
for (let i = 1; i <= N; i++) {
  if (!indegree[i]) {
    queue.push(i);
  }
}

while (queue.getLength() > 0) {
  const node = queue.pop();
  result.push(node);

  if (graph[node].length) {
    for (let i = 0; i < graph[node].length; i++) {
      indegree[graph[node][i]]--;
      if (indegree[graph[node][i]] === 0) {
        queue.push(graph[node][i]);
      }
    }
  }
}

console.log(result.join(" "));
