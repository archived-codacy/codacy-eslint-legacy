When developing with a lot of people all having different editors, VCS applications and operating systems it may occur that different line endings are written by either of the mentioned (might especially happen when using the windows and mac versions of SourceTree together).
The linebreaks (new lines) used in windows operating system are usually carriage returns (CR) followed by a line feed (LF) making it a carriage return line feed (CRLF) whereas Linux and Unix use a simple line feed (LF). The corresponding control sequences are "\n" (for LF) and "\r\n" for (CRLF).
Many versioning systems (like git and subversion) can automatically ensure the correct ending. However to cover all contingencies you can activate this rule.

```
//Bad:
 	var a = 'a', // \r\n /*error Expected linebreaks to be 'LF' but found 'CRLF'.*/ 
	b = 'b';// \n

//Good:
var a = 'a', // \n
    b = 'b'; // \n
// \n
function foo(params) {// \n
    // do stuff \n
}// \n

```

[Source](http://eslint.org/docs/rules/linebreak-style)
