const fs = require('fs')
let lines = 0

fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
    lines = fileContents.split("\n").length - 1;
    console.log(lines)
})
