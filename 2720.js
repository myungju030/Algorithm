const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (input) => {
  lines.push(+input);
});

rl.on("close", () => {
  function solution(change) {
    let count = [0, 0, 0, 0];
    const coins = [25, 10, 5, 1];
    for (let i = 0; i < coins.length; i++) {
      count[i] += Math.floor(change / coins[i]);
      change %= coins[i];
    }
    return count.join(" ");
  }

  for (let i = 1; i <= lines[0]; i++) {
    console.log(solution(lines[i]));
  }

  process.exit();
});
