const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = 0;
rl.on("line", (input) => {
  let number = +input;
  while (number > 0) {
    if (number % 5 === 0) {
      number -= 5;
    } else {
      number -= 3;
    }
    answer++;
  }

  console.log(number === 0 ? answer : -1);
});

rl.on("close", () => {
  process.exit();
});
