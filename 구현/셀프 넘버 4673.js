const array = new Array(10001).fill(0).map((a, i) => i);

for (let a = 0; a < 10; a++) {
  for (let b = 0; b < 10; b++) {
    for (let c = 0; c < 10; c++) {
      for (let d = 0; d < 10; d++) {
        const num = 1001 * a + 101 * b + 11 * c + d * 2;
        array[num] = 0;
      }
    }
  }
}

console.log(array.filter((a) => a !== 0).join("\n"));
