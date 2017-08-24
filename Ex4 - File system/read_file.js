var http = require("http");
var fs = require("fs");
var server = http.createServer((rep, res)=>{
    fs.readFile('demofile1.html', (err, data) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
    
});
server.listen(8080);