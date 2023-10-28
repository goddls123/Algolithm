const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split(" ");

console.log(input[0] === "" ? 0 : input.length);
