//#Patterns: no-param-reassign : {"props":false}

  function foo2(bar2) {
    //#Info: no-param-reassign
    bar2 = 13; 
  }

  function foo(bar) {
    bar.prop = "value";
  }

