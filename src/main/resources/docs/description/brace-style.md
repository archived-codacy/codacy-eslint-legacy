Brace style is closely related to indent style in programming and describes the placement of curly braces relative to their control statement and body. There are probably a dozen, if not more, brace styles in the world.
The one true brace style is one of the most common brace styles in JavaScript, in which the opening curly brace of a block is placed on the same line as its corresponding statement or declaration.
One common variant of one true brace style is called Stroustrup, in which the else statements in an if-else construct, as well as catch and finally, must be on its own line after the preceding closing brace.
The rule takes two options:
    A string which must be either "1tbs", "stroustrup" or "allman". The default is "1tbs".
    An object that further controls the behaviour of this rule. Currently, the only available parameter is allowSingleLine, which indicates whether start and end braces may be on the same line.


```
//Bad with 1tbs:
function foo()       /*error Opening curly brace does not appear on the same line as controlling statement.*/
{
  return true;
}

//Good with 1tbs:
function foo() {
  return true;
}

//With allowSingleLine true this is also valid:
function nop() { return; }

if (foo) { bar(); }


```
for more information on the arguments and examples:
[Source](http://eslint.org/docs/rules/brace-style)
