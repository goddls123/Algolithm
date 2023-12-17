const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim();

const [N, M] = input.split(" ").map(Number);

const nums = new Array(N).fill(1).map((n, i) => n + i);

function getPermu(arr, L) {
  if (L === 1) {
    return arr.map((a) => [a]);
  }
  const result = [];

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const perm = getPermu(rest, L - 1);
    const attach = perm.map((p) => [fixed, ...p]);

    result.push(...attach);
  });

  return result;
}

console.log(
  getPermu(nums, M)
    .map((p) => p.join(" "))
    .join("\n")
);
