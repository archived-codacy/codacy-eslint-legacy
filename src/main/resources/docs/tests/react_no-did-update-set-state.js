//#Patterns: react_no-did-update-set-state

var Hello = React.createClass({
  componentDidUpdate: function() {
    //#Warn: react_no-did-update-set-state
    this.setState({
      data: data
    });
  }
});
