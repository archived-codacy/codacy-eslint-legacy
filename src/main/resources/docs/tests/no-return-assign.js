//#Patterns: no-return-assign : {"unnamedParam" : "always"}

function doSomething() {
//#Warn: no-return-assign
  return foo = bar + 2;
}

function doSomething2() {
//#Warn: no-return-assign
  return foo = bar + 2;
}

function doSomething3() {
//#Warn: no-return-assign
  return foo += 2;
}

function doSomething4() {
//#Warn: no-return-assign
  return (foo = bar + 2);
}
function doSomething5() {
  return  2;
}
