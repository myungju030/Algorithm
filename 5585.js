const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const count = [];
let number = 0;
rl.on("line", (input) => {
  const coins = [500, 100, 50, 10, 5, 1];
  number = 1000 - +input;
  for (let i = 0; i < coins.length; i++) {
    count.push(Math.floor(number / coins[i]));
    number -= coins[i] * count[i];
  }
});

rl.on("close", () => {
  console.log(count.reduce((acc, cur) => acc + cur));
  process.exit();
});
