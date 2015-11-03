//#Patterns: no-inline-comments
//#Warn: no-inline-comments

/*eslint no-inline-comments: 2*/ var a = 1; // declaring a to 1 /*error Unexpected comment inline with code.*/ function getRandomNumber(){ return 4; // chosen by fair dice roll. /*error Unexpected comment inline with code.*/ // guaranteed to be random. } /* A block comment before code */ var b = 2; /*error Unexpected comment inline with code.*/ var c = 3; /* A block comment after code */ /*error Unexpected comment inline with code.*/