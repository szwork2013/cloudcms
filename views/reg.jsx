var React = require('react');
var DefaultLayout = require('./default.jsx');
var RegCnt = require('./regCnt.jsx');
var Reg = React.createClass({
  render: function() {
    return (<DefaultLayout title={this.props.title}>
    	<RegCnt/>
      </DefaultLayout>);
  }
});

module.exports = Reg;