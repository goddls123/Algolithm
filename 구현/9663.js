const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim();

const N = +input;

const board = Array.from(new Array(N), () => new Array(N).fill(0));

const viisted = new Array(N).fill(0);
let count = 0;

const isPossible = (list, x, y) => {
  for (let i = 0; i < list.length; i++) {
    if (Math.abs(list[i][0] - x) === Math.abs(list[i][1] - y)) return false;
  }
  return true;
};

const dfs = (L, list) => {
  if (L === N) {
    count++;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!viisted[i] && isPossible(list, L, i)) {
      viisted[i] = true;
      list.push([L, i]);
      dfs(L + 1, list);
      viisted[i] = false;
      list.pop();
    }
  }
};
dfs(0, []);
console.log(count);
