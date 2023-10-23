//보안이 필요

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const maps = input.map((i) => i.split(""));

const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

let max = -1;
const visited = {};
const DFS = ([x, y], count) => {
  visited[maps[x][y]] = true;
  max = Math.max(count, max);
  for (let i = 0; i < 4; i++) {
    const ax = x + dx[i];
    const ay = y + dy[i];

    if (ax >= 0 && ay >= 0 && ax < N && ay < M) {
      if (!visited[maps[ax][ay]]) {
        visited[maps[ax][ay]] = true;
        DFS([ax, ay], count + 1);
        visited[maps[ax][ay]] = false;
      }
    }
  }
};

DFS([0, 0], 1);
console.log(max);
