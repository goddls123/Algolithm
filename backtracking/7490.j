const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
input = input.map(Number);
let result = "";
const operator = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
};

function isZero(list) {
  const l = list.replaceAll(" ", "");
  const tmp = [];
  let num = "";
  for (let i = 0; i < l.length; i++) {
    if (l[i] === "+" || l[i] === "-") {
      tmp.push(Number(num));
      tmp.push(l[i]);
      num = "";
    } else {
      num += l[i];
    }
  }
  tmp.push(Number(num));
  let sum = tmp[0];
  for (let i = 1; i < tmp.length; i++) {
    if (tmp[i] === "+" || tmp[i] === "-") {
      sum = operator[tmp[i]](sum, tmp[i + 1]);
    }
  }
  return sum === 0;
}

function recursion(L, nums, list) {
  if (L === nums.length) {
    if (isZero(list)) {
      result += list + "\n";
    }
    return;
  }
  recursion(L + 1, nums, list + " " + nums[L]);
  recursion(L + 1, nums, list + "+" + nums[L]);
  recursion(L + 1, nums, list + "-" + nums[L]);
  return;
}

for (let i = 0; i < N; i++) {
  const nums = new Array(input[i]).fill(0).map((a, i) => i + 1);
  recursion(1, nums, "1");

  result += "\n";
}

console.log(result);
