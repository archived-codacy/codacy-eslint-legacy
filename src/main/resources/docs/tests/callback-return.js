//#Patterns: callback-return


//Warn: callback-return
function foo(callback) {
    if (err) {
        setTimeout(callback, 0); // this is bad, but WILL NOT warn
    }
    callback();
}

function foo() {
    if (err) {
        return callback(err);
    }
    callback();
}

