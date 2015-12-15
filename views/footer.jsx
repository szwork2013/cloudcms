var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div className="imco-footer">
        <p>版权归<a href="http://www.reactjs.top" target="_blank">{this.props.company}</a></p>
      </div>
    );
  }
});

module.exports = Footer;