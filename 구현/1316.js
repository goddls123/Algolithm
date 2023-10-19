// 그룹 던어 체커

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

let count = 0;

for (let i = 0; i < N; i++) {
  let before = input[i][0];
  let flag = true;
  const alpabet = {};
  alpabet[before] = true;

  for (let j = 1; j < input[i].length; j++) {
    if (before !== input[i][j]) {
      before = input[i][j];
      if (alpabet[before]) {
        flag = false;
        break;
      } else {
        alpabet[before] = true;
      }
    }
  }
  if (flag) {
    count++;
  }
}

console.log(count);
