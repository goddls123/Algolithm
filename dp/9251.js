const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const str1 = input[0];
const str2 = input[1];
const N = str1.length;
const M = str2.length;

const lcs = Array.from(new Array(N + 1), () => new Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs[i][j] = lcs[i - 1][j - 1] + 1;
    } else {
      lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
    }
  }
}

console.log(lcs[N][M]);
