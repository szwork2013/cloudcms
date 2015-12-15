var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
	console.log('连接成功')
		//在这里创建你的模式和模型
});
var Schema = mongoose.Schema;
var userSchema = new Schema({
	userName: String,
	password: String,
	email   : String
})

var User = mongoose.model('User', userSchema)

//倒出模型
module.exports = User;