//#Patterns: max-nested-callbacks

//#Warn: max-nested-callbacks
foo(function () {
    bar(function () {
        baz(function() {
            qux(function () {

            });
        });
    });
});
