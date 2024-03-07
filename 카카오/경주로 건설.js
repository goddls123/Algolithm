function solution(board) {
  const n = board.length;
  const visited = Array.from(new Array(n), () =>
    Array.from(new Array(n), () => new Array(4).fill(Infinity))
  );
  visited[0][0] = [0, 0, 0, 0];
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  const bfs = () => {
    const queue = [
      [0, 0, 2],
      [0, 0, 3],
    ];
    while (queue.length) {
      const [x, y, dir] = queue.shift();

      if (x === n - 1 && y === n - 1) continue;

      for (let i = 0; i < 4; i++) {
        const ax = dx[i] + x;
        const ay = dy[i] + y;
        const cost = dir === i ? 100 : 600;
        if (ax >= 0 && ay >= 0 && ax < n && ay < n) {
          if (
            !board[ax][ay] &&
            visited[ax][ay][i] > visited[x][y][dir] + cost
          ) {
            visited[ax][ay][i] = visited[x][y][dir] + cost;
            queue.push([ax, ay, i]);
          }
        }
      }
    }
  };

  bfs();
  return Math.min(...visited[n - 1][n - 1]);
}
