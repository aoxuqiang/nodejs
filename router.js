var optfile = require('./optfile');
module.exports = {
	login:function(req,res){
		optfile.readfile('./html/login.html',res);
	},//注意这里的逗号一定要加	
	regeist:function(req,res){
		optfile.readfile('./html/regeist.html',res);
	}
}
