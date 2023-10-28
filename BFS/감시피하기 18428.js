const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

const board = input.map((i) => i.split(" "));
const teachers = [];
let answer = "NO";

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === "T") {
      teachers.push([i, j]);
    }
  }
}

const BFS = () => {
  for (let i = 0; i < teachers.length; i++) {
    const queue = [];
    queue.push([teachers[i][0], teachers[i][1], [0, 1]]);
    queue.push([teachers[i][0], teachers[i][1], [1, 0]]);
    queue.push([teachers[i][0], teachers[i][1], [0, -1]]);
    queue.push([teachers[i][0], teachers[i][1], [-1, 0]]);

    while (queue.length) {
      const [x, y, dir] = queue.shift();
      const ax = x + dir[0];
      const ay = y + dir[1];

      if (ax >= 0 && ay >= 0 && ax < N && ay < N) {
        if (board[ax][ay] === "X") {
          queue.push([ax, ay, dir]);
        } else if (board[ax][ay] === "S") {
          return false;
        }
      }
    }
  }
  return true;
};

const DFS = (l) => {
  if (l === 3) {
    if (BFS()) {
      answer = "YES";
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === "X") {
        board[i][j] = "O";
        DFS(l + 1);
        board[i][j] = "X";
      }
    }
  }
};

DFS(0);
console.log(answer);
