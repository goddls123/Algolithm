function solution(alp, cop, problems) {
  const n = Math.max(...problems.map((p) => p[0]));
  const m = Math.max(...problems.map((p) => p[1]));
  const visited = Array.from(new Array(151), () =>
    new Array(151).fill(Infinity)
  );

  problems.push([0, 0, 1, 0, 1]);
  problems.push([0, 0, 0, 1, 1]);

  const isPossible = (a, c, n) => {
    return a >= problems[n][0] && c >= problems[n][1];
  };
  const dfs = (a, c, cnt) => {
    if (n < a) a = n;
    if (m < c) c = m;

    if (visited[a][c] <= cnt) return;

    visited[a][c] = Math.min(visited[a][c], cnt);

    if (a === n && c === m) return;

    for (let i = 0; i < problems.length; i++) {
      if (!isPossible(a, c, i)) continue;
      dfs(a + problems[i][2], c + problems[i][3], cnt + problems[i][4]);
    }
  };

  dfs(alp, cop, 0);
  return visited[n][m];
}
