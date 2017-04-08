//module
function User(){
	this.id;
	this.name;
	this.enter=function(){
		console.log(this.name+"进入");
	}
}
module.exports = User;
