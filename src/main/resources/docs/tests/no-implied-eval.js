//#Patterns: no-implied-eval


//#Warn: no-implied-eval
setTimeout("alert('Hi!');", 100);

setTimeout(function() {
    alert("Hi!");
}, 100);

