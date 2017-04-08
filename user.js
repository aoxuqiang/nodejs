//module
function User(id,name){
	this.id = id;
	this.name = name;
	this.enter=function(){
		console.log(this.name+"进入");
	}
}
module.exports = User;
