//#Patterns: security_detect-pseudoRandomBytes

var crypto = require("crypto");

//#Warn: security_detect-pseudoRandomBytes
crypto.pseudoRandomBytes(256, function() {
});
