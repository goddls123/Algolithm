function solution(s, skip, index) {
  let answer = [];
  let alphabet = new Array(26)
    .fill(97)
    .map((a, i) => String.fromCharCode(a + i))
    .filter((a) => !skip.includes(a));

  answer = s
    .split("")
    .map((a) => alphabet[(alphabet.indexOf(a) + index) % alphabet.length]);

  return answer.join("");
}
