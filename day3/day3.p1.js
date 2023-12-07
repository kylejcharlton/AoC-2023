// Run using `node day3.p1.js /path/to/input`
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

});