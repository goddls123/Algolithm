const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim();

const [n, k] = input.split(" ").map(Number);

const array = new Array(n).fill(1).map((a, i) => a + i);
let index = 0;
const result = [];
while (array.length) {
  index = (index + k - 1) % array.length;
  result.push(array[index]);
  array.splice(index, 1);
}
console.log(`<${result.join(", ")}>`);
