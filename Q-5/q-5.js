var fs = require("fs");
var zlib = require('zlib');


// Compress the file input.txt to input.txt.gz
fs.createReadStream('./files/text1.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./files/text1.txt.gz'));


console.log("File is successfully Compressed.");