const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (input) => {
  lines.push(input.split(" ").map(Number));
});

let arr = [];
rl.on("close", () => {
  lines[1]
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
      arr.push(acc + cur);
      return acc + cur;
    }, 0);
  console.log(arr.reduce((acc, cur) => acc + cur));
  process.exit();
});
