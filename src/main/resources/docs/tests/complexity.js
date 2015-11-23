//#Patterns: complexity


//#Warn: complexity
function a(x) {
  if (true) {
    return x;
  } else if (false) {
    return x + 1;
  } else if (true) {
    return 4;
  } else if (true) {
    return 5;
  } else {
    return 6;
  }
}

