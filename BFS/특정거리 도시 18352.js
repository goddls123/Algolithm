class Node {
  constructor([v, count]) {
    this.v = v;
    this.count = count;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(v) {
    const node = new Node(v);
    if (this.length === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }
  shift() {
    const tmp = this.head;

    this.head = this.head.next;

    this.length--;

    return [tmp.v, tmp.count];
  }
}

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M, K, X] = input.shift();

const graph = Array.from(new Array(N + 1), () => []);
const visited = new Array(N + 1).fill(false);

for (let i = 0; i < M; i++) {
  const [from, to] = input[i];
  graph[from].push(to);
}

const BFS = (start) => {
  const queue = new Queue();
  visited[start] = true;
  const result = [];
  queue.push([start, 0]);

  while (queue.length) {
    const [v, count] = queue.shift();

    if (count === K) {
      result.push(v);
      continue;
    }

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        visited[graph[v][i]] = true;
        queue.push([graph[v][i], count + 1]);
      }
    }
  }
  return result;
};

const total = BFS(X);

console.log(total.length === 0 ? -1 : total.sort((a, b) => a - b).join("\n"));
