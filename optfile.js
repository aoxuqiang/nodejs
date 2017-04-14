var fs = require('fs');
module.exports={
	readfileSync:function(path,res){
		var data = fs.readFileSync(path,'utf-8');
		res.write(data);
		res.end();
		console.log('sync ok');
	},
	readfile:function(path,recall){
		fs.readFile(path,function(err,data){
			if(err){
				console.log(err);
			}else{
				recall(data);
				console.log(data.toString());
			}
		});
		console.log('ajax ok');
	},
	readImg:function(path,recall){
		fs.readFile(path,'binary',function(err,data){
			if(err){
				console.log(err);
			}else{
				recall(data);
			}
		});
	}
}
		
