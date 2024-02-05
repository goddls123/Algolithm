const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim();

const stack = [];

let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    if (input[i + 1] === ")") {
      count += stack.length;
      i++;
    } else {
      stack.push(input[i]);
    }
  } else {
    count++;
    stack.pop();
  }
}

console.log(count);
