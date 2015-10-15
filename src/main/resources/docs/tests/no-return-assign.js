//#Patterns: no-return-assign : {"unnamedParam" : "always"}

function doSomething() {
//#Warn: no-return-assign
  return foo = bar + 2;
}

function doSomething() {
//#Warn: no-return-assign
  return foo = bar + 2;   /*error Return statement should not contain assignment.*/
}

function doSomething() {
//#Warn: no-return-assign
  return foo += 2;        /*error Return statement should not contain assignment.*/
}

function doSomething() {
//#Warn: no-return-assign
  return (foo = bar + 2); /*error Return statement should not contain assignment.*/
}