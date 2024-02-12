const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [N, C] = input.shift().split(" ").map(Number);
const wires = input.map(Number).sort((a, b) => a - b);

let left = 0;
let right = wires[wires.length - 1];
let max = 0;
const isPossible = (mid) => {
  let count = 1;
  let distance = wires[0] + mid;
  for (let i = 1; i < N; i++) {
    if (distance <= wires[i]) {
      count++;
      distance = wires[i] + mid;
    }
  }
  return count >= C;
};

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  if (isPossible(mid)) {
    left = mid + 1;
    max = mid;
  } else {
    right = mid - 1;
  }
}

console.log(max);
