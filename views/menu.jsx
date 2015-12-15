var React = require('react');
var Menu = React.createClass({
  render: function() {
    return (
      <div>
        <ul className="am-list">
          {this.props.urlConfig.map(function(urlC) {
            return (<li><a href={urlC.url}>{urlC.text}</a></li>);
          })}
        </ul>
      </div>
    );
  }
});

module.exports = Menu;