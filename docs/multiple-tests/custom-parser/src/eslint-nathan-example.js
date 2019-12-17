import React, { Component, PropTypes } from 'react';
export default class Foo extends Component {
  static propTypes = {
    actions: PropTypes.shape({}),
    data: PropTypes.shape({
      trades: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        score: PropTypes.number,
        progress: PropTypes.bool
      }),
    }),
  }
}
const IndexLink = React.createClass({
  render() {
    return <span className="a" />;
  }
});
