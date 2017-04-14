var optfile = require('./optfile');
module.exports = {
	login:function(req,res){
		function recall(data){
			res.write(data);
			res.end();
		}
		optfile.readfile('./html/login.html',recall);
	},//注意这里的逗号一定要加	
	regeist:function(req,res){
		function recall(data){
			res.write(data);
			res.end();
		}
		optfile.readfile('./html/regeist.html',recall);
	}
}
