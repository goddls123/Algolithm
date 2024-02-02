class Node {
  constructor([x, y, flag, count]) {
    this.x = x;
    this.y = y;
    this.flag = flag;
    this.count = count;
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
    const tmp = this.head;
    this.head = this.head.next;
    this.length--;

    return [tmp.x, tmp.y, tmp.flag, tmp.count];
  }
}

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((i) => i.split("").map(Number));

const visited = Array.from(new Array(N), () =>
  Array.from(new Array(M), () => new Array(2).fill(0))
);

const bfs = () => {
  const queue = new Queue();
  queue.push([0, 0, 0, 1]);
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  visited[0][0][0] = true;

  while (queue.length) {
    const [x, y, flag, count] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const ax = dx[i] + x;
      const ay = dy[i] + y;
      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (visited[ax][ay][flag]) continue;
        if (!board[ax][ay]) {
          visited[ax][ay][flag] = true;
          queue.push([ax, ay, flag, count + 1]);
        } else if (!flag && board[ax][ay]) {
          visited[ax][ay][!flag] = true;
          queue.push([ax, ay, !flag, count + 1]);
        }
      }
    }
  }
  return -1;
};

console.log(bfs());
