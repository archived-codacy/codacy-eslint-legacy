//#Patterns: no-param-reassign : {"props":false}

  function foo2(bar2) {
    //#Warn: no-param-reassign
    bar2 = 13; 
  }

  function foo(bar) {
    bar.prop = "value";
  }

