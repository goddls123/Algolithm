const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim();

const N = Number(input);

const array = new Array(N).fill(1).map((a, i) => a + i);

const permutation = (arr) => {
  if (arr.length === 1) {
    return arr.map((a) => [a]);
  }

  const result = [];

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permu = permutation(rest);
    const attach = permu.map((p) => [fixed, ...p]);
    result.push(...attach);
  });

  return result;
};

console.log(
  permutation(array)
    .map((p) => p.join(" "))
    .join("\n")
);
