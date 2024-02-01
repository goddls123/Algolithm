const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

const board = Array.from(new Array(N), () => new Array(N).fill(0));

let k = Number(input[0]);

for (let i = 1; i <= k; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  board[x - 1][y - 1] = 1;
}

const map = new Map();
const l = Number(input[k + 1]);
for (let i = k + 2; i < k + l + 2; i++) {
  const [x, c] = input[i].split(" ");
  map.set(Number(x), c);
}
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let dir = 0;
let snake = [];

let x = 0;
let y = 0;
let t = 0;
let tail = [0, 0];
while (1) {
  t++;

  let ax = x + dx[dir];
  let ay = y + dy[dir];
  if (ax >= N || ay >= N || ax < 0 || ay < 0) break;
  if (board[ax][ay] === 2) break;

  if (board[ax][ay] === 1) {
    snake.push([ax, ay]);
    board[ax][ay] = 2;
  } else {
    board[ax][ay] = 2;
    snake.push([ax, ay]);
    board[tail[0]][tail[1]] = 0;

    tail = snake.shift();
  }
  x = ax;
  y = ay;

  if (map.has(t)) {
    if (map.get(t) === "D") {
      dir++;
    } else {
      dir--;
    }
    dir = (dir + 4) % 4;
  }
}
console.log(t);
