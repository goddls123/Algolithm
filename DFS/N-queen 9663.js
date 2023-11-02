const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim();

const N = Number(input);

const queens = [];

function check(x, y) {
  for ([hx, hy] of queens) {
    if (x === hx || y === hy) return false;
    if (Math.abs(x - hx) === Math.abs(y - hy)) return false;
  }

  return true;
}

let count = 0;
function DFS(L) {
  if (L === N) {
    count++;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (check(L, i)) {
      queens.push([L, i]);
      DFS(L + 1);
      queens.pop();
    }
  }
}

DFS(0);

console.log(count);
