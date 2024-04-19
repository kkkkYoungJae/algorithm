const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

let answer = 0;
if (input === 0) answer;
for (let i = 1; i <= input; i++) {
  if (i % 5 === 0) answer++;
  if (i % 25 === 0) answer++;
  if (i % 125 === 0) answer++;
}

console.log(answer);
