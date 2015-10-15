//#Patterns: no-param-reassign : {"props":false}

  function foo2(bar2) {
    //#Warn: no-param-reassign
    bar2 = 13;       /*error Assignment to function parameter 'bar'.*/
  }

  function foo(bar) {
    bar.prop = "value"; /* only a error if props = true*/
  }

