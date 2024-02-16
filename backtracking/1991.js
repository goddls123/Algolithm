const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const tree = {};

for (let i = 0; i < N; i++) {
  const [parent, left, right] = input[i].split(" ");
  tree[parent] = [left, right];
}

const result = [];
function preOrder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  result.push(node);
  preOrder(left);
  preOrder(right);
}
function inOrder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  inOrder(left);
  result.push(node);
  inOrder(right);
}
function postOrder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  postOrder(left);
  postOrder(right);
  result.push(node);
}

preOrder("A");
result.push("\n");
inOrder("A");
result.push("\n");
postOrder("A");

console.log(result.join(""));
