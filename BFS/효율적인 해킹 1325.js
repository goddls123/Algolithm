class Node {
  constructor(v) {
    this.v = v;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    if (this.length === 0) return;
    const tmp = this.head;
    this.head = this.head.next;
    this.length--;

    return tmp.v;
  }
}

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();

const graph = Array.from(new Array(N + 1), () => []);

for (let i = 0; i < M; i++) {
  const [to, from] = input[i];
  graph[from].push(to);
}

const visited = new Array(N + 1).fill(0);

const BFS = (start) => {
  const queue = new Queue();
  queue.push(start);
  let count = 1;
  visited[start] = true;

  while (queue.length > 0) {
    const v = queue.shift();

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        visited[graph[v][i]] = true;
        queue.push(graph[v][i]);
        count++;
      }
    }
  }
  return count;
};

let list = [];
let max = 0;
for (let i = 1; i <= N; i++) {
  visited.fill(0);
  let count = BFS(i);

  if (count === max) {
    list.push(i);
  } else if (count > max) {
    max = count;
    list = [i];
  }
}

console.log(list.join(" "));
