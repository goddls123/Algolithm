const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const result = [];

let i = 0;
const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

function bfs(board, n) {
  const queue = [[0, 0]];
  const visited = Array.from(new Array(n), () => new Array(n).fill(Infinity));
  visited[0][0] = board[0][0];
  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = x + dx[i];
      const ay = y + dy[i];
      if (ax >= 0 && ay >= 0 && ax < n && ay < n) {
        if (visited[ax][ay] > visited[x][y] + board[ax][ay]) {
          visited[ax][ay] = visited[x][y] + board[ax][ay];
          queue.push([ax, ay]);
        }
      }
    }
  }
  return visited[n - 1][n - 1];
}
while (1) {
  const n = Number(input[i++]);
  if (n === 0) break;
  const board = Array.from(new Array(n), () => []);

  for (let j = 0; j < n; j++) {
    board[j] = input[i + j].split(" ").map(Number);
  }
  result.push(bfs(board, n));
  i += n;
}

console.log(result.map((r, i) => `Problem ${i + 1}: ${r}`).join("\n"));
