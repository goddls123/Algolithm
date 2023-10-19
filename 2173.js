const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((i) => i.split("").map(Number));

const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

const BFS = (end) => {
  const queue = [];
  queue.push([0, 0]);

  while (queue.length) {
    const [x, y] = queue.shift();

    if (x === end[0] && y === end[1]) break;

    for (let i = 0; i < 4; i++) {
      const ax = x + dx[i];
      const ay = y + dy[i];

      if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
        if (map[ax][ay] === 1) {
          map[ax][ay] = map[x][y] + 1;
          queue.push([ax, ay]);
        }
      }
    }
  }
};

BFS([N, M]);

console.log(map[N - 1][M - 1]);
