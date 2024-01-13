const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const T = Number(input.shift());

function recursion(root, start, end, result) {
  for (let i = start; i < end; i++) {
    if (inOrder[i] === preOrder[root]) {
      recursion(root + 1, start, i, result);
      recursion(root + i - start + 1, i + 1, end, result);
      result.push(preOrder[root]);
    }
  }
}

let i = 0;
let result = "";
let preOrder = [];
let inOrder = [];

for (let k = 0; k < T; k++) {
  const N = Number(input[i++]);
  preOrder = input[i++].split(" ").map(Number);
  inOrder = input[i++].split(" ").map(Number);
  const tmp = [];
  recursion(0, 0, N, tmp);
  result += tmp.join(" ") + "\n";
}

console.log(result);
