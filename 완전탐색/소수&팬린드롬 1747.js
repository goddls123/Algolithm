const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim();

let n = Number(input);

const isPrime = (v) => {
  if (v < 2) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(v)); i++) {
    if (v % i === 0) return false;
  }
  return true;
};

while (1) {
  if (!isPrime(n)) {
    n++;
    continue;
  }

  const n2 = String(n).split("").reverse().join("");

  if (n2 == n) {
    break;
  }
  n++;
}

console.log(n);
