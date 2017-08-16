var http = require('http');
http.createServer(function(request, response){
    var jsp = {'Name': 'Anh Hoai', 'Age':'20'};
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.end("Hello World ! 123");
    response.writeHead(200, {'Content-Type': 'application/json'});    
    response.end(JSON.stringify(jsp));

}).listen(8080); 
