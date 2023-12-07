// Run using `node day2.js /path/to/input`
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

  let power = 0;
  let games = data.split('\n');
  for (let game of games) {
    let trials = game.split(': ')[1].split(';');
    let minBlue = 0;
    let minRed = 0;
    let minGreen = 0;
    for (let trial of trials) {
      let colors = trial.split(',').map((s) => s.trim());

      for (let color of colors) {
        let c = color.split(' ');
        let numColor = parseInt(c[0]);
        if (c[1] === 'red') minRed = Math.max(minRed, numColor);
        else if (c[1] === 'blue') minBlue = Math.max(minBlue, numColor);
        else if (c[1] === 'green') minGreen = Math.max(minGreen, numColor);
      }
    }
    power += minRed * minBlue * minGreen;
  }

  console.log(power);
});
