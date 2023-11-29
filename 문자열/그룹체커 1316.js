const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

const alphabet = new Array(26).fill(0);

let count = 0;
input.forEach((word) => {
  alphabet.fill(0);
  let before = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== before) {
      before = word[i];
      alphabet[word[i].charCodeAt() - 97]++;
    }
  }

  if (alphabet.filter((a) => a > 1).length) {
    count++;
  }
});

console.log(N - count);
