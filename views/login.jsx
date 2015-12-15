var React = require('react');
var DefaultLayout = require('./default.jsx');
var LoginCnt = require('./loginCnt.jsx');
var Reg = React.createClass({
  render: function() {
    return (<DefaultLayout title={this.props.title}>
      <LoginCnt/>
      </DefaultLayout>
      );
  }
});

module.exports = Reg;