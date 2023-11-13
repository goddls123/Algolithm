const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);

const alphabet = input[1].split(" ").sort();
const vowel = ["a", "e", "i", "o", "u"];
const result = [];

const backtracking = (depth, pos, list) => {
  if (depth === L) {
    let count = 0;
    vowel.forEach((v) => {
      if (list.includes(v)) {
        count++;
      }
    });
    if (count > 0 && L - count > 1) {
      result.push(list.join(""));
    }
    return;
  }
  for (let i = pos; i < C; i++) {
    list.push(alphabet[i]);
    backtracking(depth + 1, i + 1, list);
    list.pop();
  }
};

backtracking(0, 0, []);

console.log(result.join("\n"));
