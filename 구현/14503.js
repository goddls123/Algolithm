const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const [r, c, di] = input.shift().split(" ").map(Number);
const board = input.map((i) => i.split(" ").map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const dfs = (start) => {
  const stack = [start];
  let count = 0;
  while (stack.length) {
    const [x, y, d] = stack.pop();
    let flag = false;

    if (board[x][y] === 0) {
      board[x][y] = 2;
      count++;
    }
    for (let i = 0; i < 4; i++) {
      const dir = (d + 3 - i) % 4;
      const ax = dx[dir] + x;
      const ay = dy[dir] + y;

      if (board[ax][ay] === 0) {
        flag = true;
        stack.push([ax, ay, dir]);
        break;
      }
    }

    if (flag) continue;

    const bx = x - dx[d];
    const by = y - dy[d];
    if (board[bx][by] === 1) break;
    stack.push([bx, by, d]);
  }
  return count;
};

console.log(dfs([r, c, di]));
