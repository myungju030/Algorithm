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
let money = 0;
let result = 0;
let change = 0;
rl.on("close", () => {
  for (let i = 1; i < lines.length; i++) {
    arr.push(+lines[i]);
  }
  money = lines[0][1];
  for (let i = lines.length - 1; i >= 0; i--) {
    change = Math.floor(money / arr[i]);
    if (change > 0) {
      result += change;
      money -= change * arr[i];
    }
  }
  console.log(result);
  process.exit();
});
