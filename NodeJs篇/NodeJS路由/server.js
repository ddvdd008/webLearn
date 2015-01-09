var http = require("http");
var url = require("url");

function start(route){
 function onRequest(request,response){
     var pathname = url.parse(request.url,true).query;//pathname { aa: '001', bb: '002' }
	 console.log("Request for" + pathname + "received1231231");
	route(pathname);
	response.writeHead(200,{"Content-Type":"text\plain"});
	response.write("Hello World");
	response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server has started.");
}
exports.start=start;

