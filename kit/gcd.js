function gcd(a, b) {
  let x = Math.max(a, b);
  let y = Math.min(a, b);
  let remain;
  while (y) {
    remain = x % y;
    x = y;
    y = remain;
  }

  return x;
}
