const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const array = input[1].split(" ").map(Number);
const deleteNode = Number(input[2]);

const tree = new Map();
let root = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === -1) {
    root = i;
    continue;
  }
  if (i === deleteNode) continue;

  if (tree.has(array[i])) {
    tree.get(array[i]).push(i);
  } else {
    tree.set(array[i], [i]);
  }
}
let count = 0;
const recursion = (node) => {
  if (deleteNode === node) return;
  if (!tree.has(node)) {
    count++;
    return;
  }
  const tmp = tree.get(node);
  for (let i = 0; i < tmp.length; i++) {
    recursion(tmp[i]);
  }
};
tree.delete(deleteNode);
recursion(root);
console.log(count);
