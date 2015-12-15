var React = require('react');
var Footer = require('./footer.jsx');
var Header = require('./header.jsx');
var Menu = require('./menu.jsx');
var urlConfig = [
  {
    url: '/',
    text: '首页'
  },
  {
    url: '/reg',
    text: '注册'
  },
  {
    url: '/login',
    text: '登陆'
  }
];
var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta charSet='utf-8'/>
          <link rel="stylesheet" href="public/style/amazeui.min.css"/>
          <link rel="stylesheet" href="public/style/app.css"/>
        </head>
        <body className="imco">
          <header data-am-widget="header"
            className="am-header am-header-default">
            <div className="am-header-left am-header-nav">
                <a href="/" className="">
                  <i className="am-header-icon am-icon-home"></i>
                </a>
            </div>
            <h1 className="am-header-title">
                <a href="/" className="">
                  microblog
                </a>
            </h1>
            <div className="am-header-right am-header-nav">
                <a href="/reg" className="">
                  <i className="am-header-icon am-icon-user-plus"></i>
                </a>
                <a href="/login" className="">
                  <i className="am-header-icon am-icon-user"></i>
                </a>
            </div>
          </header>
          {/*<Menu urlConfig={urlConfig}/>*/}
          <div className="am-g">
            <div className="am-u-sm-4 am-u-md-2 am-u-lg-2 imco-sidebar">
            本博客使用最新的web技术如
              <span className="am-badge am-badge-primary">react</span>
              <span className="am-badge am-badge-secondary">react-router</span>
              <span className="am-badge am-badge-success">webpack</span>
              <span className="am-badge am-badge-warning">node.js</span>
              <span className="am-badge am-badge-danger">express</span>
              <span className="am-badge am-badge-success">mongodb</span>
              <ul className="am-list am-list-static am-list-border">
                <li>搭建起简单的路由架构，前端用amazeui展现 <span className="am-badge am-badge-danger">2015.12.11</span></li>
              </ul>
            </div>
            <div className="am-u-sm-8 am-u-md-10 am-u-lg-10 imco-main">
              <Header title={this.props.title}/>
              {this.props.children}
            </div>
          </div>
          <Footer company="ifuture"/>
          <script charSet='utf-8' src="public/js/jquery.min.js"></script>
          <script charSet='utf-8' src="public/js/amazeui.min.js"></script>
          <script charSet='utf-8' src="public/js/app.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;