const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
let X = [];
let Y = [];
let Z = [];
const dp = new Array(N).fill(0).map((a, i) => i);

for (let i = 0; i < N; i++) {
  const [x, y, z] = input[i].split(" ").map(Number);
  X.push([x, i]);
  Y.push([y, i]);
  Z.push([z, i]);
}

X.sort((a, b) => a[0] - b[0]);
Y.sort((a, b) => a[0] - b[0]);
Z.sort((a, b) => a[0] - b[0]);

const getParent = (n) => {
  if (n === dp[n]) {
    return dp[n];
  }
  dp[n] = getParent(dp[n]);
  return dp[n];
};

const union = (a, b) => {
  if (a < b) {
    dp[b] = a;
  } else {
    dp[a] = b;
  }
};
let cost = 0;
let list = [];

for (let i = 0; i < N - 1; i++) {
  list.push([X[i + 1][0] - X[i][0], X[i][1], X[i + 1][1]]);
  list.push([Y[i + 1][0] - Y[i][0], Y[i][1], Y[i + 1][1]]);
  list.push([Z[i + 1][0] - Z[i][0], Z[i][1], Z[i + 1][1]]);
}
list.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < list.length; i++) {
  const [value, from, to] = list[i];
  const parentA = getParent(from);
  const parentB = getParent(to);

  if (parentA === parentB) continue;

  union(parentA, parentB);
  cost += value;
}

console.log(cost);
