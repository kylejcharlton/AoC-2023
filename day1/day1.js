// Run using `node day1.js /path/to/input`
const fs = require('node:fs');
const STRING_NUMS = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};
const REG = new RegExp('^' + '(' + Object.keys(STRING_NUMS).join('|') + ')', 'g');

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
      let match = line.substring(i).match(REG);
      if (match) {
        first = STRING_NUMS[match[0]];
        break;
      }
    }
    for (let i = line.length - 1; i >= 0; i--) {
      if (!isNaN(line[i])) {
        last = line[i];
        break;
      }
      let match = line.substring(i).match(REG);
      if (match) {
        last = STRING_NUMS[match[0]];
        break;
      }
    }
    total += parseInt(first + last);
  }

  console.log(total);
});
