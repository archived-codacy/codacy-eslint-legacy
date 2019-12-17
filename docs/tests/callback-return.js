//#Patterns: callback-return



function foo() {
    if (err) {
	//#Warn: callback-return
        callback(err);
    }
    callback();
}

function bar() {
    if (err) {
        return callback(err);
    }
    callback();
}

