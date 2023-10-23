const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [M, N] = input.shift();
const maps = input;

let list = [];

const BFS = (queue) => {
  const tmp = [];
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  for (let i = 0; i < queue.length; i++) {
    const [x, y] = queue[i];
    for (let j = 0; j < 4; j++) {
      const ax = x + dx[j];
      const ay = y + dy[j];

      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (maps[ax][ay] === 0) {
          maps[ax][ay] = 1;
          tmp.push([ax, ay]);
        }
      }
    }
  }
  return tmp;
};
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (maps[i][j] === 1) {
      list.push([i, j]);
    }
  }
}

let count = 0;

while (list.length) {
  list = BFS(list);
  if (list.length > 0) {
    count++;
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (maps[i][j] === 0) {
      console.log(-1);
      return;
    }
  }
}

console.log(count);
