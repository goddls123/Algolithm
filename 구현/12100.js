const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const array = input.map((i) => i.split(" ").map(Number));

const pushLeft = (board) => {
  for (let i = 0; i < N; i++) {
    const tmp = [];
    for (let j = 0; j < N; j++) {
      if (!board[i][j]) continue;
      if (board[i][j] === tmp[tmp.length - 1]) {
        tmp.push(tmp.pop() * -2);
      } else {
        tmp.push(board[i][j]);
      }
      board[i][j] = 0;
    }
    for (let j = 0; j < tmp.length; j++) {
      board[i][j] = Math.abs(tmp[j]);
    }
  }
  return board;
};

const pushRight = (board) => {
  for (let i = 0; i < N; i++) {
    const tmp = [];
    for (let j = N - 1; j >= 0; j--) {
      if (!board[i][j]) continue;
      if (board[i][j] === tmp[tmp.length - 1]) {
        tmp.push(tmp.pop() * -2);
      } else {
        tmp.push(board[i][j]);
      }
      board[i][j] = 0;
    }
    for (let j = 0; j < tmp.length; j++) {
      board[i][N - j - 1] = Math.abs(tmp[j]);
    }
  }
  return board;
};

const pushUp = (board) => {
  for (let j = 0; j < N; j++) {
    const tmp = [];
    for (let i = 0; i < N; i++) {
      if (!board[i][j]) continue;
      if (board[i][j] === tmp[tmp.length - 1]) {
        tmp.push(tmp.pop() * -2);
      } else {
        tmp.push(board[i][j]);
      }
      board[i][j] = 0;
    }
    for (let i = 0; i < tmp.length; i++) {
      board[i][j] = Math.abs(tmp[i]);
    }
  }
  return board;
};

const pushDown = (board) => {
  for (let j = 0; j < N; j++) {
    const tmp = [];
    for (let i = N - 1; i >= 0; i--) {
      if (!board[i][j]) continue;
      if (board[i][j] === tmp[tmp.length - 1]) {
        tmp.push(tmp.pop() * -2);
      } else {
        tmp.push(board[i][j]);
      }
      board[i][j] = 0;
    }
    for (let i = 0; i < tmp.length; i++) {
      board[N - i - 1][j] = Math.abs(tmp[i]);
    }
  }
  return board;
};

let max = 0;
const move = (L, newBoard) => {
  if (L === 5) {
    max = Math.max(max, ...[].concat(...newBoard));
    return;
  }
  move(L + 1, pushLeft(newBoard.map((b) => [...b])));
  move(L + 1, pushRight(newBoard.map((b) => [...b])));
  move(L + 1, pushUp(newBoard.map((b) => [...b])));
  move(L + 1, pushDown(newBoard.map((b) => [...b])));
};

move(0, array);
console.log(max);
