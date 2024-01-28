const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const T = Number(input.shift());

const binarySearch = (n, nums, num) => {
  let left = 0;
  let right = n - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
};
const result = [];
for (let i = 0; i < T; i++) {
  const [N, M] = input[i * 3].split(" ").map(Number);
  const nums1 = input[i * 3 + 1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const nums2 = input[i * 3 + 2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let count = 0;
  for (let j = 0; j < N; j++) {
    if (nums1[j] <= nums2[0]) continue;
    if (nums1[j] > nums2[M - 1]) {
      count += M;
      continue;
    }
    const index = binarySearch(M, nums2, nums1[j]);
    count += index;
  }
  result.push(count);
}

console.log(result.join("\n"));
