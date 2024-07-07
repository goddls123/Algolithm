const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

const dp = [numbers[0]];

const findIndex = (num) => {
  let left = 0;
  let right = dp.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (dp[mid] < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

for (let i = 1; i < N; i++) {
  if (numbers[i] > dp[dp.length - 1]) {
    dp.push(numbers[i]);
  } else {
    const index = findIndex(numbers[i]);
    dp[index] = numbers[i];
  }
}

console.log(dp.length);
