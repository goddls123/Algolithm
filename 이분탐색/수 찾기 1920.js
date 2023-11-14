const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input[0]);
const nums1 = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = Number(input[2]);
const nums2 = input[3].split(" ").map(Number);

const binarySearch = (n) => {
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums1[mid] === n) {
      return true;
    } else if (nums1[mid] > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

const result = [];
for (let i = 0; i < M; i++) {
  if (binarySearch(nums2[i])) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join("\n"));
