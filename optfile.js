var fs = require('fs');
module.exports={
	readfileSync:function(path,res){
		var data = fs.readFileSync(path,'utf-8');
		console.log(data);
		res.write(data);
		res.end();
		console.log('sync ok');
	},
	readfile:function(path,res){
		fs.readFile(path,function(err,data){
			if(err){
				console.log(err);
			}else{
				res.write(data);
				res.end();
				console.log(data.toString());
			}
		});
		console.log('ajax ok');
	}
}
		
