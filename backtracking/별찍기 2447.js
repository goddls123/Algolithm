const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString();

const N = Number(input);

const array = Array.from(new Array(N), () => new Array(N).fill(0));

function recursion(x, y, star, n) {
  if (n === 1) {
    array[x][y] = star;
    return;
  }
  n /= 3;
  const n2 = n * 2;
  recursion(x, y, star, n);
  recursion(x, y + n, star, n);
  recursion(x, y + n2, star, n);
  recursion(x + n, y, star, n);
  recursion(x + n, y + n, " ", n);
  recursion(x + n, y + n2, star, n);
  recursion(x + n2, y, star, n);
  recursion(x + n2, y + n, star, n);
  recursion(x + n2, y + n2, star, n);
}

recursion(0, 0, "*", N);
console.log(array.map((a) => a.join("")).join("\n"));
