// Run using `node day1.p1.js /path/to/input`
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

  let total = 0;
  let lines = data.split('\n');
  for (let line of lines) {
    let first, last;
    for (let i = 0; i < line.length; i++) {
      if (!isNaN(line[i])) {
        first = line[i];
        break;
      }
    }
    for (let i = line.length - 1; i >= 0; i--) {
      if (!isNaN(line[i])) {
        last = line[i];
        break;
      }
    }
    total += parseInt(first + last);
  }

  console.log(total);
});
