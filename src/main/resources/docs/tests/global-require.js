//#Patterns: global-require


function readFile(filename, callback) {
    //#Warn: global-require
    var fs = require('fs'); 
    fs.readFile(filename, callback)
}
