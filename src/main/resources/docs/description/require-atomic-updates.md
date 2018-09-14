This rule aims to report assignments to variables or properties where all of the following are true:

* A variable or property is reassigned to a new value which is based on its old value.
* A `yield` or `await` expression interrupts the assignment after the old value is read, and before the new value is set.
* The rule cannot easily verify that the assignment is safe (e.g. if an assigned variable is local and would not be readable from anywhere else while the function is paused).

Examples of **incorrect** code for this rule:

```
//Bad:
let result;
async function foo() {
  result += await somethingElse;
  result = result + await somethingElse;
  result = result + doSomething(await somethingElse);
}
function* bar() {
  result += yield;
  result = result + (yield somethingElse);
  result = result + doSomething(yield somethingElse);
}

//Good:
let result;
async function foo() {
  result = await somethingElse + result;
  let tmp = await somethingElse;
  result += tmp;
  let localVariable = 0;
  localVariable += await somethingElse;
}
function* bar() {
  result += yield;
  result = (yield somethingElse) + result;
  result = doSomething(yield somethingElse, result);
}
```

[Source](http://eslint.org/docs/rules/require-atomic-updates)
