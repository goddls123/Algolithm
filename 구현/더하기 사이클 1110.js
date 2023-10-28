const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +require("fs").readFileSync(file).toString().trim().split("\n");

if (input === 0) {
  console.log(1);
  return;
}
let n = ((Math.floor(input / 10) + (input % 10)) % 10) + (input % 10) * 10;

let count = 1;
while (n !== input) {
  const num1 = Math.floor(n / 10);
  const num2 = n % 10;
  n = num2 * 10 + ((num1 + num2) % 10);
  count++;
}

console.log(count);
