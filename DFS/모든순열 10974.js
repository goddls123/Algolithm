const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim();

const n = Number(input);

const array = new Array(n).fill(1).map((a, i) => a + i);

const getPermutation = (arr) => {
  if (arr.length === 1) {
    return arr.map((a) => [a]);
  }
  const result = [];
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permu = getPermutation(rest);
    const attach = permu.map((p) => [fixed, ...p]);
    result.push(...attach);
  });

  return result;
};

const a = getPermutation(array);

console.log(
  getPermutation(array)
    .map((a) => a.join(" "))
    .join("\n")
);
