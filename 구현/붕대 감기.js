function solution(bandage, health, attacks) {
  const [time, x, y] = bandage;
  let life = health;
  let t = 0;

  for (let [atime, demage] of attacks) {
    let duration = atime - t - 1;
    duration = duration >= 0 ? duration : 0;
    life += duration * x + Math.floor(duration / time) * y;
    life = life > health ? health : life;
    life -= demage;
    if (life <= 0) {
      life = -1;
      break;
    }
    t = atime;
  }

  return life;
}
