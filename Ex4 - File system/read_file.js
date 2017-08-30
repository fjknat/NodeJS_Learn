var http = require("http");
var fs = require("fs");
var server = http.createServer((rep, res)=>{
    
    fs.readFile('demofile11.html', (err, data) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        if (err) console.log(err.message); // throw err;
        res.end();
    });
    
    
});
server.listen(8080);