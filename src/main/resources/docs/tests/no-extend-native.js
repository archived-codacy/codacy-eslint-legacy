//#Patterns: no-extend-native

//#Warn: no-extend-native
Object.prototype.extra = 55;

// loop through some userIds
var users = {
  "123": "Stan",
  "456": "David"
};

// not what you'd expect
for (var id in users) {
  console.log(id); // "123", "456", "extra"
}
