//#Patterns: no-implied-eval


//#Info: no-implied-eval
setTimeout("alert('Hi!');", 100);

setTimeout(function() {
    alert("Hi!");
}, 100);

