var http = require('http');
var url = require('url');
var router = require('./router');
http.createServer(function(req,res){
	res.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
	var pathname = url.parse(req.url).pathname;
	pathname = pathname.replace(/\//,'');
	console.log(pathname);
	if(pathname!='favicon.ico'){
		router[pathname](req,res);
	}	
}).listen(8888);
console.log("server running at http://127.0.0.1:8888");
