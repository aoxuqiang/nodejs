var http = require('http')
http.createServer(function(req,res){
	res.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
	res.write("hello,world<br/>");
	res.end("hello,世界");
}).listen(8888);
console.log("server running at http://127.0.0.1:8888");
