const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const wires = input.map(Number).sort((a, b) => a - b);

let left = 0;
let right = Math.max(...wires);

function getCount(mid) {
  let count = 1;
  let end = wires[0] + mid;
  for (let i = 1; i < N; i++) {
    if (wires[i] >= end) {
      count++;
      end = wires[i] + mid;
    }
  }
  return count;
}
let max = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  if (getCount(mid) >= M) {
    left = mid + 1;
    max = Math.max(max, mid);
  } else {
    right = mid - 1;
  }
}

console.log(max);
