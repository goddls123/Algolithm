const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const T = Number(input.shift());

const gcd = (n, m) => {
  let x = Math.max(n, m);
  let y = Math.min(m, n);
  let remain;

  while (y) {
    remain = x % y;
    x = y;
    y = remain;
  }
  return x;
};
const result = [];
for (let i = 0; i < T; i++) {
  const [M, N, x, y] = input[i].split(" ").map(Number);

  const lcm = (N * M) / gcd(M, N);
  let flag = false;
  for (let j = x; j <= lcm; j += M) {
    if ((j - y) % N === 0) {
      flag = true;
      result.push(j);
      break;
    }
  }
  if (flag) continue;
  result.push(-1);
}

console.log(result.join("\n"));
