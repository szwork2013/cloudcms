var React = require('react');
var DefaultLayout = require('./default.jsx');
var HelloMessage = React.createClass({
    render: function() {
    	var users = this.props.user;
    	var arr = [];
    	for (var iuser in users) {
    		arr.push(users[iuser]);
    	}
	    return (
	      <DefaultLayout title={this.props.title}>
	        <div>
		        <table className="am-table am-table-bordered am-text-center">
			        <thead>
			        <tr className="am-text-center">
			          <th>ID</th>
			          <th>用户名</th>
			          <th>邮箱</th>
			          <th>密码</th>
			          <th>_V</th>
			         </tr>
			        </thead>
			        <tbody>
			        	{arr.map(function(iuser){
			        		return(
			        			<tr>
			        			<td>{iuser['id']}</td>
			        			<td>{iuser['userName']}</td>
			        			<td>{iuser['password']}</td>
			        			<td>{iuser['email']}</td>
			        			<td>{iuser['__v']}</td>
			        			</tr>
			        		);
			        	})}
			        </tbody>
		        </table>
	        </div>
	      </DefaultLayout>
	    );
	}
});

module.exports = HelloMessage;