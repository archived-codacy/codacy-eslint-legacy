//#Patterns: no-catch-shadow
//#Warn: no-catch-shadow

var err = "x"; try { throw "problem"; } catch (err) { } console.log(err) // err is 'problem', not 'x'