const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = input.shift();

const list = input
  .map((i) => i.split(" "))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[2] === b[2]) {
        if (a[3] === b[3]) {
          let min = Math.min(a[0].length, b[0].length);
          for (let i = 0; i < min; i++) {
            if (a[0][i] !== b[0][i]) {
              return a[0][i].charCodeAt() - b[0][i].charCodeAt();
            }
          }
          return a[0].length - b[0].length;
        }
        return b[3] - a[3];
      }
      return a[2] - b[2];
    }

    return b[1] - a[1];
  })
  .map((a) => a[0])
  .join("\n");

console.log(list);
