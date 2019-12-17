//#Patterns: accessor-pairs

var o = {
  //#Info: accessor-pairs
  set a(value) {
    this.val = value;
  }
};

var o = {d: 1};
Object.defineProperty(o, 'c', {
  set: function(value) {
    this.val = value;
  },
  get: function() {
    return this.val;
  }
});
