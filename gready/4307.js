const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const T = Number(input.shift());

const result = [];
let j = 0;
for (let i = 0; i < T; i++) {
  const [l, n] = input[j++].split(" ").map(Number);
  let min = 0;
  let max = 0;
  for (let k = 0; k < n; k++) {
    const num = Number(input[j++]);
    min = Math.max(min, Math.min(num, l - num));
    max = Math.max(max, num, l - num);
  }
  result.push([min, max]);
}

console.log(result.map((r) => r.join(" ")).join("\n"));
