const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split(" ");

const year = Number(input[2]);
const [hour, minute] = input[3].split(":").map(Number);
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const calendar = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  months[1] = 29;
}
const month = calendar[input[0]];
const days = Number(input[1].slice(0, -1));

const total = months.reduce((a, c) => a + c, 0) * 60 * 24;
let now = 0;

for (let i = 0; i < month; i++) {
  now += months[i];
}
now = now * 60 * 24 + (days - 1) * 60 * 24 + hour * 60 + minute;
console.log(((now / total) * 100).toFixed(9));
