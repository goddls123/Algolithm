const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[2]);
const nums1 = input[1].split(" ").map(Number);
const nums2 = input[3].split(" ").map(Number);

const map = new Map();
const result = [];
for (let i = 0; i < N; i++) {
  if (map.has(nums1[i])) {
    map.set(nums1[i], map.get(nums1[i]) + 1);
  } else {
    map.set(nums1[i], 1);
  }
}

for (let i = 0; i < M; i++) {
  if (map.has(nums2[i])) {
    result.push(map.get(nums2[i]));
  } else {
    result.push(0);
  }
}

console.log(result.join(" "));
