class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

let tree;
function getParent(node, value) {
  if (!node || node === null) return;
  if (node.value === value) {
    return node;
  }
  let left = getParent(node.left, value);
  let right = getParent(node.right, value);

  if (left) {
    return left;
  } else if (right) {
    return right;
  } else {
    return;
  }
}
for (let i = 0; i < N; i++) {
  const [parent, left, right] = input[i].split(" ");
  let node;
  if (!tree) {
    tree = new Node(parent);
    node = tree;
  } else {
    node = getParent(tree, parent);
  }
  if (left !== ".") {
    node.left = new Node(left);
  }
  if (right !== ".") {
    node.right = new Node(right);
  }
}

let result = "";
function preOrder(tree) {
  if (!tree || tree === null) {
    return;
  }
  result += tree.value;
  preOrder(tree.left);
  preOrder(tree.right);
}
function inOrder(tree) {
  if (!tree || tree === null) {
    return;
  }
  inOrder(tree.left);
  result += tree.value;
  inOrder(tree.right);
}
function postorder(tree) {
  if (!tree || tree === null) {
    return;
  }
  postorder(tree.left);
  postorder(tree.right);
  result += tree.value;
}

preOrder(tree);
result += "\n";
inOrder(tree);
result += "\n";
postorder(tree);

console.log(result);
