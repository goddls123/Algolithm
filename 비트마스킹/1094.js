const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim();

const N = Number(input);

console.log(
  N.toString(2)
    .split("")
    .filter((n) => n == 1).length
);
