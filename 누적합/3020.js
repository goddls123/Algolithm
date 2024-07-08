const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const [N, H] = input.shift().split(" ").map(Number);

const numbers = input.map(Number);

const top = new Array(H + 1).fill(0);
const bottom = new Array(H + 1).fill(0);

for (let i = 0; i < N; i++) {
  if (i % 2 === 0) {
    bottom[numbers[i]]++;
  } else {
    top[H - numbers[i] + 1]++;
  }
}

for (let i = H - 1; i >= 1; i--) {
  bottom[i] += bottom[i + 1];
}

for (let i = 2; i <= H; i++) {
  top[i] += top[i - 1];
}

let min = Infinity;
let count = 0;

for (let i = 1; i <= H; i++) {
  if (min > top[i] + bottom[i]) {
    min = top[i] + bottom[i];
    count = 1;
  } else if (min === top[i] + bottom[i]) {
    count++;
  }
}

console.log(min, count);
