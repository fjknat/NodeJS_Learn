var http = require('http');
var fs = require('fs');

var requestListener = (req, rep) =>{
    
    fs.appendFile('file1.txt', '\r\n test ' + Date(), (err)=>{
        
        if (err){
            rep.writeHead(200, {'Content-Type':'text/html'});
            rep.write(err.message);
            console.log(err.message);
            rep.end();
        }  else {
            fs.readFile('file1.txt', (err, data) =>{
                rep.writeHead(200, {'Content-Type':'text/html'});
                rep.write(data);                
                rep.end(); 
            });
        };                    
    });

    fs.open('file2.txt', 'w+', (err,  fileSave)=>{
        if (err){
            rep.writeHead(200, {'Content-Type':'text/html'});
            rep.write(err.message);
            console.log(err.message);
            rep.end();
        } ;
        fs.write(fileSave, )
    });
    
    
};

var server = http.createServer(requestListener);

server.listen(8080);