It is considered good practice to use the type-safe equality operators === and !== instead of their regular counterparts == and !=.
The reason for this is that == and != do type coercion which follows the rather obscure Abstract Equality Comparison Algorithm. For instance, the following statements are all considered true:
[] == false
[] == ![]
3 == "03"
If one of those occurs in an innocent-looking statement such as a == b the actual problem is very difficult to spot.
You can choose the equlityStyle you prefer, either "smart" or "allow-null"
* "smart"
This option enforces the use of === and !== except for these cases:
  * Comparing two literal values
  * Evaluating the value of typeof
  * Comparing against null

* "allow-null"
This option will enforce === and !== in your code with one exception - it permits comparing to null to check for null or undefined in a single expression.

```
//Smart:
//Good:
	typeof foo === 'undefined'
	'hello' !== 'world'
	0 === 0
	true === true
	foo === null
//Bad:
	a == b 
	foo == true
	bananas != 1
	value == undefined

```
[Source](http://eslint.org/docs/rules/eqeqeq)
