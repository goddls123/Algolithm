const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().split("\n");

const N = Number(input.shift());
const board = input.map((i) => i.split(" ").map(Number));

let min = Infinity;

function calc(x, y, d1, d2) {
  const tmp = Array.from(new Array(N), () => new Array(N).fill(0));
  const people = new Array(5).fill(0);

  for (let i = 0; i <= d1; i++) {
    tmp[x + i][y - i] = 5;
    tmp[x + d2 + i][y + d2 - i] = 5;
  }
  for (let i = 0; i <= d2; i++) {
    tmp[x + i][y + i] = 5;
    tmp[x + d1 + i][y - d1 + i] = 5;
  }
  for (let i = x + 1; i < x + d1 + d2; i++) {
    let flag = false;
    for (let j = 0; j < N; j++) {
      if (tmp[i][j] === 5) {
        flag = !flag;
        continue;
      }
      if (flag) {
        tmp[i][j] = 5;
      }
    }
  }

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (r < x + d1 && c <= y && tmp[r][c] === 0) {
        people[0] += board[r][c];
      } else if (r <= x + d2 && c > y && tmp[r][c] === 0) {
        people[1] += board[r][c];
      } else if (r >= x + d1 && c < y - d1 + d2 && tmp[r][c] === 0) {
        people[2] += board[r][c];
      } else if (r > x + d2 && c >= y - d1 + d2 && tmp[r][c] === 0) {
        people[3] += board[r][c];
      } else if (tmp[r][c] === 5) {
        people[4] += board[r][c];
      }
    }
  }

  return Math.max(...people) - Math.min(...people);
}

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    for (let d1 = 1; d1 < N; d1++) {
      for (let d2 = 1; d2 < N; d2++) {
        if (x + d1 + d2 < N && y - d1 >= 0 && y + d2 < N) {
          min = Math.min(calc(x, y, d1, d2), min);
        }
      }
    }
  }
}

console.log(min);
