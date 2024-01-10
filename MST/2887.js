const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
const dpX = Array.from(new Array(N), () => []);
const dpY = Array.from(new Array(N), () => []);
const dpZ = Array.from(new Array(N), () => []);

for (let i = 0; i < N; i++) {
  dpX[i] = [input[i][0], i];
  dpY[i] = [input[i][1], i];
  dpZ[i] = [input[i][2], i];
}

dpX.sort((a, b) => a[0] - b[0]);
dpY.sort((a, b) => a[0] - b[0]);
dpZ.sort((a, b) => a[0] - b[0]);
const result = [];

for (let i = 0; i < N - 1; i++) {
  result.push([dpX[i][1], dpX[i + 1][1], dpX[i + 1][0] - dpX[i][0]]);
  result.push([dpY[i][1], dpY[i + 1][1], dpY[i + 1][0] - dpY[i][0]]);
  result.push([dpZ[i][1], dpZ[i + 1][1], dpZ[i + 1][0] - dpZ[i][0]]);
}
result.sort((a, b) => a[2] - b[2]);
const dp = new Array(N).fill(0).map((a, i) => i);

let sum = 0;

function getParent(node) {
  if (dp[node] !== node) {
    dp[node] = getParent(dp[node]);
  }
  return dp[node];
}
function union(parentA, parentB) {
  if (parentA > parentB) {
    dp[parentA] = parentB;
  } else {
    dp[parentB] = parentA;
  }
}

for (let i = 0; i < result.length; i++) {
  const [from, to, cost] = result[i];
  const parentA = getParent(from);
  const parentB = getParent(to);
  if (parentA === parentB) continue;

  union(parentA, parentB);
  sum += cost;
}

console.log(sum);
