const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = Number(input.shift());

let count = 0;
for (let i = 0; i < N; i++) {
  const stack = [input[i][0]];
  for (let j = 1; j < input[i].length; j++) {
    if (stack[stack.length - 1] === input[i][j]) {
      stack.pop();
    } else {
      stack.push(input[i][j]);
    }
  }
  if (stack.length === 0) {
    count++;
  }
}

console.log(count);
