//#Patterns: no-unsafe-innerhtml_no-unsafe-innerhtml

var src = "img.png";
//#Warn: no-unsafe-innerhtml_no-unsafe-innerhtml
foo.innerHTML = src;
//#Warn: no-unsafe-innerhtml_no-unsafe-innerhtml
bar.innerHTML = "<a href='" + src + "'>About</a>";
