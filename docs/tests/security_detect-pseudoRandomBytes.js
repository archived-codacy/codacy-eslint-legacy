//#Patterns: security_detect-pseudoRandomBytes

var crypto = require("crypto");

//#Info: security_detect-pseudoRandomBytes
crypto.pseudoRandomBytes(256, function() {
});
