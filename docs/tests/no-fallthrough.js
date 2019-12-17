//#Patterns: no-fallthrough

//#Issue: {"severity": "Info", "line": 8, "patternId": "no-fallthrough"}

switch(foo) {
  case 1:
    doSomething();
  case 2:
    doSomethingElse();
}

switch(foo) {
  case 1:
    doSomething();
    break;

  case 2:
    doSomethingElse();
}
