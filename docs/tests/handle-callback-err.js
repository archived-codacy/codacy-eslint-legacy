//#Patterns: handle-callback-err


//#Warn: handle-callback-err
function loadData (err, data) {
    doSomething();
}

function loadData2 (err, data) {
    if (err) {
        console.log(err.stack);
    }
    doSomething();
}
