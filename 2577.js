// 숫자의 개수


const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let number = String(input.reduce((accu, curv) => accu * curv, 1));
const numList = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

for (let i = 0; i < number.length; i++) {
  numList[number[i]]++;
}

console.log(
  Object.entries(numList)
    .map(([key, value]) => value)
    .join("\n")
);
