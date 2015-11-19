ES5 §15.1.1 Value Properties of the Global Object (NaN, Infinity, undefined) as well as strict mode restricted identifiers eval and arguments are considered to be restricted names in JavaScript. Defining them to mean something else can have unintended consequences and confuse others reading the code.

```
//Bad:
var undefined = "foo";
function NaN(){}
!function(Infinity){};
var undefined; 
try {} catch(eval){}

```

[Source](http://eslint.org/docs/rules/no-shadow-restricted-names)
