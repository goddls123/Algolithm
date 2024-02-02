const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const array = [nums[0]];

const binarySearch = (array, num) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};
for (let i = 1; i < N; i++) {
  if (nums[i] > array[array.length - 1]) {
    array.push([nums[i]]);
  } else {
    const index = binarySearch(array, nums[i]);
    array[index] = nums[i];
  }
}

console.log(array.length);
