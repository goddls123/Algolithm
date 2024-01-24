const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const result = [];
for (let i = 0; i < N; i++) {
  const str = input[i];
  let count = 0;
  let score = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[j] === "O") {
      count++;
      score += count;
    } else {
      count = 0;
    }
  }
  result.push(score);
}

console.log(result.join("\n"));
