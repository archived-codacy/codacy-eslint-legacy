//#Patterns: space-return-throw-case
//#Warn: space-return-throw-case

/*eslint space-return-throw-case: 2*/ throw{a:0} /*error Keyword "throw" must be followed by whitespace.*/ function f(){ return-a; } /*error Keyword "return" must be followed by whitespace.*/ switch(a){ case'a': break; } /*error Keyword "case" must be followed by whitespace.*/