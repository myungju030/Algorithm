const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const count = [];
let number = 0;
rl.on("line", (input) => {
  const minute = [300, 60, 10];
  number = +input;

  for (let i = 0; i < minute.length; i++) {
    count.push(Math.floor(number / minute[i]));
    number %= minute[i];
  }
});

rl.on("close", () => {
  if (number !== 0) console.log(-1);
  else {
    console.log(count.join(" "));
  }
  process.exit();
});
