const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, K] = input.shift();
const [S, X, Y] = input.pop();
const map = input;
let virus = [];

const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] !== 0) {
      virus.push([i, j, map[i][j]]);
    }
  }
}
virus.sort((a, b) => a[2] - b[2]);

const BFS = () => {
  const tmp = [];

  for (let i = 0; i < virus.length; i++) {
    for (let j = 0; j < 4; j++) {
      const ax = virus[i][0] + dx[j];
      const ay = virus[i][1] + dy[j];
      if (ax >= 0 && ay >= 0 && ax < N && ay < N) {
        if (map[ax][ay] === 0) {
          map[ax][ay] = virus[i][2];
          tmp.push([ax, ay, virus[i][2]]);
        }
      }
    }
  }
  return tmp;
};

for (let i = 0; i < S; i++) {
  virus = BFS();
}

console.log(map[X - 1][Y - 1]);
