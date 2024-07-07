const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = Number(input[0]);
const array = input[1].split(" ").map(Number);

const increase = new Array(N).fill(1);
const decrease = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] > array[j]) {
      increase[i] = Math.max(increase[i], increase[j] + 1);
    }
  }
}
for (let i = N - 2; i >= 0; i--) {
  for (let j = N - 1; j > i; j--) {
    if (array[j] < array[i]) {
      decrease[i] = Math.max(decrease[i], decrease[j] + 1);
    }
  }
}
let count = 0;

for (let i = 0; i < N; i++) {
  if (decrease[i] + increase[i] > count) {
    count = decrease[i] + increase[i];
  }
}
console.log(count - 1);
