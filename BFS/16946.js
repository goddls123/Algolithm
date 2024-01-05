class Node {
  constructor([x, y]) {
    this.x = x;
    this.y = y;
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
    if (this.length === 0) return [];

    const tmp = this.head;

    this.head = this.head.next;
    this.length--;

    return [tmp.x, tmp.y];
  }
}

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const board = input.map((i) => i.split("").map(Number));
const visited = Array.from(new Array(N), () => new Array(M).fill(0));

const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

let wall = [];
let countList = [0, 0];
function BFS(start, index) {
  const queue = new Queue();
  queue.push(start);
  let count = 1;
  visited[start[0]][start[1]] = index;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = x + dx[i];
      const ay = y + dy[i];

      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (visited[ax][ay] === 0 && board[ax][ay] === 0) {
          count++;
          visited[ax][ay] = index;
          queue.push([ax, ay]);
        }
      }
    }
  }

  return count;
}
let idx = 2;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 1) {
      wall.push([i, j]);
    }
    if (board[i][j] === 0 && visited[i][j] === 0) {
      countList.push(BFS([i, j], idx));
      idx++;
    }
  }
}

function fill() {
  for ([x, y] of wall) {
    const set = new Set();
    for (let i = 0; i < 4; i++) {
      const ax = x + dx[i];
      const ay = y + dy[i];

      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (visited[ax][ay] !== -1) {
          set.add(visited[ax][ay]);
        }
      }
    }
    set.forEach((s) => {
      board[x][y] += countList[s];
    });
    board[x][y] = board[x][y] % 10;
  }
}

fill();
console.log(board.map((b) => b.join("")).join("\n"));
