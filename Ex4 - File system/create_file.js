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

    fs.open('file2.txt', 'a+', (err,  fileSave)=>{
        if (err){
            rep.writeHead(200, {'Content-Type':'text/html'});
            rep.write(err.message);
            console.log(err.message);
            rep.end();
        } ;
        fs.write(fileSave, 'test 12', 0, 'UTF8', (err, wr) =>{
            let buf = new Buffer(1024);
            fs.read(fileSave, buf, 0, buf.length, 0, (err, byt) => {
                if(byt > 0){
                    /* rep.writeHead(200, {'Content-Type':'text/html'});
                    rep.write("<br>");
                    rep.write(buf.slice(0, byt).toString());                    
                    rep.end(); */
                    console.log(buf.slice(0, byt).toString());
                }
            })
        });
    });

    fs.writeFile('test3.txt', 'tes data 3', (err) => {
        if(err) throw err;
        fs.renameSync('test3.txt', 'test3_a.txt', (err)=>{
            if(err) throw err;        
        });
        fs.unlinkSync('test3_a.txt');
    });

    
    
    
};

var server = http.createServer(requestListener);

server.listen(8080);