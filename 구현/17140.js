const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [r, c, k] = input.shift();
const board = Array.from(new Array(101), () => new Array(101).fill(0));

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    board[i][j] = input[i - 1][j - 1];
  }
}

const R = () => {
  let tmpM = m;
  for (let i = 1; i <= n; i++) {
    const map = new Map();
    for (let j = 1; j <= m; j++) {
      if (board[i][j] === 0) continue;
      if (map.has(board[i][j])) {
        map.set(board[i][j], map.get(board[i][j]) + 1);
      } else {
        map.set(board[i][j], 1);
      }
      board[i][j] = 0;
    }

    const tmp = [].concat(
      ...Array.from(map).sort((a, b) =>
        a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]
      )
    );

    let tmpL = Math.min(tmp.length, 100);

    for (let j = 1; j <= tmpL; j++) {
      board[i][j] = tmp[j - 1];
    }
    tmpM = Math.max(tmpL, tmpM);
  }
  m = tmpM;
};
const C = () => {
  let tmpN = n;
  for (let j = 1; j <= m; j++) {
    const map = new Map();
    for (let i = 1; i <= n; i++) {
      if (board[i][j] === 0) continue;
      if (map.has(board[i][j])) {
        map.set(board[i][j], map.get(board[i][j]) + 1);
      } else {
        map.set(board[i][j], 1);
      }
      board[i][j] = 0;
    }

    const tmp = [].concat(
      ...Array.from(map).sort((a, b) =>
        a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]
      )
    );
    let tmpL = Math.min(tmp.length, 100);

    for (let i = 1; i <= tmpL; i++) {
      board[i][j] = tmp[i - 1];
    }
    tmpN = Math.max(tmpL, tmpN);
  }
  n = tmpN;
};

let count = -1;
let n = 3;
let m = 3;

for (let i = 0; i <= 100; i++) {
  if (board[r][c] === k) {
    count = i;
    break;
  }
  if (n >= m) {
    R();
  } else {
    C();
  }
}

console.log(count);
