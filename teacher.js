//teacher extends user
var User = require('./user');
function Teacher(id,name){
	User.apply(this,[id,name]);
	this.teach = function(){
		console.log("teacher"+this.name);
	}
}

module.exports = Teacher;
