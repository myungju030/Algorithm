const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (input) => {
  lines.push(input.split(" ").map(Number));
});

let result = 0;
rl.on("close", () => {
  let p, l, v;
  for (let i = 0; i < lines.length - 1; i++) {
    p = lines[i][1];
    l = lines[i][0];
    v = lines[i][2];
    result = Math.floor(v / p) * l;
    if (v % p > l) result += l;
    else if (v % p <= l) result += v % p;
    console.log(`Case ${i + 1}: ${result}`);
  }
  process.exit();
});
