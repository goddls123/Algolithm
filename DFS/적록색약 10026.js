//BFS
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");
const N = Number(input.shift());

const maps = input.map((i) => i.split(""));

const check = ([x, y], flag) => {
  for (let i = 0; i < flag.length; i++) {
    if (maps[x][y] === flag[i]) {
      return true;
    }
  }

  return false;
};

const BFS = (start, flag) => {
  const queue = [start];
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ax = x + dx[i];
      const ay = y + dy[i];

      if (ax >= 0 && ay >= 0 && ax < N && ay < N) {
        if (!visited[ax][ay] && check([ax, ay], flag)) {
          visited[ax][ay] = true;
          queue.push([ax, ay]);
        }
      }
    }
  }
};

let visited = Array.from(new Array(N), () => new Array(N).fill(false));
let cnt1 = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      BFS([i, j], [maps[i][j]]);
      cnt1++;
    }
  }
}
visited = Array.from(new Array(N), () => new Array(N).fill(false));
let cnt2 = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      if (maps[i][j] === "B") {
        BFS([i, j], [maps[i][j]]);
      } else {
        BFS([i, j], ["R", "G"]);
      }
      cnt2++;
    }
  }
}

console.log(`${cnt1} ${cnt2}`);
