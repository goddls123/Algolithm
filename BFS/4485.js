const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

let i = 0;
const result = [];
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const bfs = (n, board) => {
  const queue = [[0, 0]];
  let visited = Array.from(new Array(n), () => new Array(n).fill(Infinity));
  visited[0][0] = board[0][0];
  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = dx[i] + x;
      const ay = dy[i] + y;
      if (ax >= 0 && ay >= 0 && ax < n && ay < n) {
        if (visited[ax][ay] > visited[x][y] + board[ax][ay]) {
          visited[ax][ay] = visited[x][y] + board[ax][ay];
          queue.push([ax, ay]);
        }
      }
    }
  }
  return visited[n - 1][n - 1];
};

let k = 1;
while (1) {
  const N = Number(input[i++]);
  if (N === 0) break;
  const board = [];
  for (let j = 0; j < N; j++) {
    board.push(input[i++].split(" ").map(Number));
  }
  result.push(`Problem ${k}: ${bfs(N, board)}`);
  k++;
}

console.log(result.join("\n"));
