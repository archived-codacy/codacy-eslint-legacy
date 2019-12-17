//#Patterns: guard-for-in


//#Info: guard-for-in
for (key in foo) { doSomething(key); }

for (key in foo) {
    if ({}.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
}
