var React = require('react');
var LoginCnt = React.createClass({
  render: function() {
    return (<div>
      <form method="POST" action="/regR" className="am-form am-form-horizontal">
  <div className="am-form-group am-form-group-sm">
    <label htmlFor="imco-user" className="am-form-label am-u-sm-2">用户名</label>
    <div className="am-u-sm-10">
      <input type="text" id="imco-user" className="am-form-field" placeholder="用户名" name="user[userName]"/>
    </div>
  </div>

  <div className="am-form-group am-form-group-sm">
    <label htmlFor="imco-password" className="am-u-sm-2 am-form-label">密码</label>
    <div className="am-u-sm-10">
      <input type="password" id="imco-password" className="am-form-field" placeholder="密码" name="user[password]"/>
    </div>
  </div>
{/*
  <div className="am-form-group am-form-group-sm">
    <label htmlFor="imco-password" className="am-u-sm-2 am-form-label">确认密码</label>
    <div className="am-u-sm-10">
      <input type="password" id="imco-password" className="am-form-field" placeholder="确认密码" name="resetpassword"/>
    </div>
  </div>
  */}
  <div className="am-form-group am-form-group-sm">
    <label htmlFor="imco-password" className="am-u-sm-2 am-form-label">邮箱</label>
    <div className="am-u-sm-10">
      <input type="email" id="imco-password" className="am-form-field" placeholder="邮箱" name="user[email]"/>
    </div>
  </div>
  <div className="am-form-group">
    <div className="am-u-sm-10 am-u-sm-offset-2">
      <button type="submit" className="am-btn am-btn-default">注册</button>
    </div>
  </div>
</form>
	  </div>
	);
  }
});

module.exports = LoginCnt;