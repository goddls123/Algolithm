const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = Number(input.shift());
const board = input.map((i) => i.split(" ").map(Number));
const max = Math.max(...[].concat(...board));

const BFS = (start, height, visited) => {
  const queue = [start];
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = x + dx[i];
      const ay = y + dy[i];

      if (ax >= 0 && ay >= 0 && ax < N && ay < N) {
        if (!visited[ax][ay] && board[ax][ay] >= height) {
          visited[ax][ay] = true;
          queue.push([ax, ay]);
        }
      }
    }
  }
};

let maxArea = 0;
for (let i = 1; i <= max; i++) {
  const visited = Array.from(new Array(N), () => new Array(N).fill(false));
  let count = 0;
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (!visited[j][k] && board[j][k] >= i) {
        BFS([j, k], i, visited);
        count++;
      }
    }
  }

  if (maxArea < count) {
    maxArea = count;
  }
}

console.log(maxArea);
