var http=require('http');
var func1=require("./functions1.js");
http.createServer(function(request,response){
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  if(request.url!="/favicon.ico"){
    fun1(response);
    func1.fun2(response);
    func1['fun2'](response);
    func1.fun3(response);
    response.end('');
  }
}).listen(8000);
console.log("runing")
function  fun1(res){
  console.log("fun1");
  res.write("hello.我是fun1");
}