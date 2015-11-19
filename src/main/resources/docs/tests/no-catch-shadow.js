//#Patterns: no-catch-shadow



var err = "x";
try {
    throw "problem";
//#Warn: no-catch-shadow
} catch (err) {      
}

var err = "x";
try {
    throw "problem";
} catch (e) {

}
