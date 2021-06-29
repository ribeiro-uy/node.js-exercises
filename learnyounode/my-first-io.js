const fs = require('fs')
str = fs.readFileSync(process.argv[2], 'utf8')
var lines = str.split("\n").length - 1;
console.log(lines)
