const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();
const trees = input[0];

let max = Math.max(...trees);

const binarySearch = () => {
  let left = 0;
  let right = max;
  let t = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let height = trees.reduce((a, c) => (c <= mid ? a : a + c - mid), 0);

    if (height >= M) {
      t = Math.max(t, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return t;
};

console.log(binarySearch());
