const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const chess = input.map((i) => i.split(""));
let min = 64;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    min = Math.min(check(i, j), min);
  }
}

function check(x, y) {
  let wCount = 0;
  let bCount = 0;

  //검은색 시작
  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if ((i + j) % 2 === 0) {
        if (chess[i][j] === "W") bCount++;
      } else {
        if (chess[i][j] === "B") bCount++;
      }
    }
  }

  //흰색 시작
  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if ((i + j) % 2 === 0) {
        if (chess[i][j] === "B") wCount++;
      } else {
        if (chess[i][j] === "W") wCount++;
      }
    }
  }

  return Math.min(wCount, bCount);
}

console.log(min);
