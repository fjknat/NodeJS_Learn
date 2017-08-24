var http = require('http');
var url = require('url');

http.createServer(function(res, rep){
    rep.writeHead(200, {'Content-Type': 'text/html'});
    rep.write(res.url);
    let q = url.parse(res.url, true).query;
    rep.write('<br/>' + q.year + '/' + q.month);
    rep.end();
}).listen(8080);