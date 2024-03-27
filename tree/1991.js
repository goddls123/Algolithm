class Tree {
  constructor() {
    this.value;
    this.left;
    this.right;
  }
}

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = Number(input.shift());

const root = new Tree();

const makeNode = (tree, value, left, right) => {
  if (tree.value === value) {
    if (left !== ".") {
      tree.left = new Tree();
      tree.left.value = left;
    }
    if (right !== ".") {
      tree.right = new Tree();
      tree.right.value = right;
    }
  } else {
    tree.left && makeNode(tree.left, value, left, right);
    tree.right && makeNode(tree.right, value, left, right);
  }
};

input.forEach((i) => {
  const [parent, left, right] = i.split(" ");
  if (!root.value) {
    root.value = parent;
    if (left !== ".") {
      root.left = new Tree();
      root.left.value = left;
    }
    if (right !== ".") {
      root.right = new Tree();
      root.right.value = right;
    }
  } else {
    makeNode(root, parent, left, right);
  }
});

const pre = [];
const post = [];
const mid = [];

const traveral = (tree) => {
  pre.push(tree.value);
  tree.left && traveral(tree.left);
  mid.push(tree.value);
  tree.right && traveral(tree.right);
  post.push(tree.value);
};

traveral(root);
console.log(pre.join(""));
console.log(mid.join(""));
console.log(post.join(""));
