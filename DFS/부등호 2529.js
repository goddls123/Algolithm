const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const n = Number(input.shift());
const operator = input[0].split(" ");
const calculate = {
  ">": (a, b) => Number(a) > Number(b),
  "<": (a, b) => Number(a) < Number(b),
};

const numbers = new Array(10).fill(0).map((n, i) => String(i));
const used = new Array(10).fill(0);

let max = "-1";
let min = "Infinity";
function DFS(L, s) {
  if (L === n) {
    if (Number(max) < Number(s)) {
      max = s;
    }
    if (Number(min) > Number(s)) {
      min = s;
    }
    return;
  }
  const num = s[s.length - 1];
  for (let i = 0; i < numbers.length; i++) {
    if (!used[i] && calculate[operator[L]](num, numbers[i])) {
      used[i] = true;
      DFS(L + 1, s + numbers[i] + "");
      used[i] = false;
    }
  }
}

for (let i = 0; i < 10; i++) {
  used[i] = true;
  DFS(0, numbers[i]);
  used[i] = false;
}

console.log(max);
console.log(min);
