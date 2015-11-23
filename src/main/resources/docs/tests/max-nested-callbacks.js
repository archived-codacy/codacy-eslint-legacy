//#Patterns: max-nested-callbacks {"unnamedParam": 3}

foo(function () {
    bar(function () {
        baz(function() {
            //#Warn: max-nested-callbacks
            qux(function () {

            });
        });
    });
});
