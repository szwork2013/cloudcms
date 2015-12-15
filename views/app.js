var React = require('react');
var DefaultLayout = require('./default.jsx');
var HelloMessage = React.createClass({
  render: function() {
    return (<DefaultLayout title={this.props.title}>
        <div>Hello {this.props.name}</div>
      </DefaultLayout>);
  }
});

module.exports = HelloMessage;