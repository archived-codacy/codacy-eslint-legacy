//#Patterns: jsx-quotes {"unnamedParam": "prefer-double"}

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  //#Warn: jsx-quotes
  <div id='c' />,
  document.getElementById('example')
);

ReactDOM.render(
  <div id="cc" />,
  document.getElementById('example')
);

ReactDOM.render(
  <div id='"' />,
  document.getElementById('example')
);