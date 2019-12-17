//#Patterns: no-return-assign : {"unnamedParam" : "always"}

function doSomething() {
//#Info: no-return-assign
  return foo = bar + 2;
}

function doSomething2() {
//#Info: no-return-assign
  return foo = bar + 2;
}

function doSomething3() {
//#Info: no-return-assign
  return foo += 2;
}

function doSomething4() {
//#Info: no-return-assign
  return (foo = bar + 2);
}
function doSomething5() {
  return  2;
}
