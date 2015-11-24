//#Patterns: max-nested-callbacks

foo(function () {
  bar(function () {
    baz(function () {
      qux(function () {
        baz(function () {
          //#Warn: max-nested-callbacks
          qux(function () {
            //#Warn: max-nested-callbacks
            baz(function () {
              //#Warn: max-nested-callbacks
              qux(function () {
              });
            });
          });
        });
      });
    });
  });
});
