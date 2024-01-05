const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);

const dp = [nums[0]];

const binarySearch = (n) => {
  let left = 0;
  let right = dp.length - 1;

  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (n > dp[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

for (let i = 1; i < N; i++) {
  if (dp[dp.length - 1] < nums[i]) {
    dp.push(nums[i]);
  } else {
    let j = binarySearch(nums[i]);
    dp[j] = nums[i];
  }
}

console.log(dp.length);
