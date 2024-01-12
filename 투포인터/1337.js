const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const nums = input.map(Number).sort((a, b) => a - b);

let count = 0;

for (let i = 0; i < N; i++) {
  const tmp = [nums[i] + 1, nums[i] + 2, nums[i] + 3, nums[i] + 4];
  let cnt = 1;

  for (let j = i + 1; j < i + 5; j++) {
    if (tmp.includes(nums[j])) {
      cnt++;
    }
  }

  count = Math.max(count, cnt);
  if (count >= 5) break;
}

console.log(count >= 5 ? 0 : 5 - count);
