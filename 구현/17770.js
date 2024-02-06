const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

const board = input.map((i) => i.split(" ").map(Number));

let min = Infinity;

const calculate = (x, y, d1, d2) => {
  const array = new Array(5).fill(0);
  const people = Array.from(new Array(N), () => new Array(N).fill(0));

  people[x][y] = 1;

  for (let i = 1; i <= d1; i++) {
    people[x + i][y - i] = 1;
    people[x + d2 + i][y + d2 - i] = 1;
  }
  for (let i = 1; i <= d2; i++) {
    people[x + i][y + i] = 1;
    people[x + d1 + i][y - d1 + i] = 1;
  }

  for (let i = x + 1; i < x + d1 + d2; i++) {
    let flag = false;
    for (let j = 0; j < N; j++) {
      if (people[i][j]) {
        flag = !flag;
      }
      if (flag) {
        people[i][j] = 1;
      }
    }
  }

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (people[r][c]) {
        array[4] += board[r][c];
      } else {
        if (r < x + d1 && c <= y) {
          array[0] += board[r][c];
        } else if (r <= x + d2 && c > y && c < N) {
          array[1] += board[r][c];
        } else if (r >= x + d1 && x < N && c < y - d1 + d2) {
          array[2] += board[r][c];
        } else {
          array[3] += board[r][c];
        }
      }
    }
  }

  return Math.max(...array) - Math.min(...array);
};

for (let x = 0; x < N - 2; x++) {
  for (let y = 1; y < N - 1; y++) {
    for (let d1 = 1; d1 < N - 1; d1++) {
      for (let d2 = 1; d2 < N - 1; d2++) {
        if (x + d1 + d2 >= N || y < d1 || y + d2 >= N) continue;

        min = Math.min(min, calculate(x, y, d1, d2));
      }
    }
  }
}

console.log(min);
