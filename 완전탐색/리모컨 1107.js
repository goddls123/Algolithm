const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const channel = Number(input.shift());
const N = Number(input.shift());
const broken = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
};
input[0]?.split(" ").forEach((n) => {
  broken[n] = true;
});

if (N === 100) {
  console.log(0);
  return;
}

let min = Math.abs(channel - 100);

for (let i = 0; i <= 1000000; i++) {
  const c = String(i);
  let flag = true;
  for (let j = 0; j < c.length; j++) {
    if (broken[c[j]]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    min = Math.min(min, c.length + Math.abs(i - channel));
  }
}

console.log(min);
