//#Patterns: react_no-did-update-set-state

var Hello = React.createClass({
  componentDidUpdate: function() {
    //#Info: react_no-did-update-set-state
    this.setState({
      data: data
    });
  }
});
