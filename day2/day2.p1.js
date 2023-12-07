// Run using `node day2.p1.js /path/to/input`
const fs = require('node:fs');

if (process.argv.length < 3) {
  console.log('Input file path must be passed as an argument.');
  process.exit(1);
}

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let sum = 0;
  let games = data.split('\n');
  for (let game of games) {
    let gameNum = game.split(': ')[0].split(' ')[1];
    let trials = game.split(': ')[1].split(';');
    let isPossible = true;
    for (let trial of trials) {
      if (!isPossible) break;

      let colors = trial.split(',').map((s) => s.trim());
      for (let color of colors) {
        let c = color.split(' ');
        let numColor = parseInt(c[0]);
        if (
          (c[1] === 'red' && numColor > 12) ||
          (c[1] === 'blue' && numColor > 14) ||
          (c[1] === 'green' && numColor > 13)
        ) {
          isPossible = false;
          break;
        }
      }
    }

    if (isPossible) sum += parseInt(gameNum);
  }

  console.log(sum);
});
