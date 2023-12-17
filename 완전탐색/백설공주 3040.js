const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((a, c) => a + c, 0) - 100;

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (input[i] + input[j] === sum) {
      console.log(
        input.filter((a, index) => index !== i && index !== j).join("\n")
      );
      return;
    }
  }
}
