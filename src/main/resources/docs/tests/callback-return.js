//#Patterns: callback-return

//#Warn: callback-return
function foo() {
    if (err) {
        callback(err); /*error Expected return with your callback function.*/
    }
    callback();
}


function foo() {
    if (err) {
        return callback(err);
    }
    callback();
}

