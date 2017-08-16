var http = require('http');
var p_date = require('./mod_getDatebyFormat');

http.createServer(function (rep, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Current date time is : ' + p_date.fcDateTime());    
    res.write('<br/>- Current date time is : ' + p_date.fcDateTimeFormat());
    res.write('<br/>- Current Date is : ' + p_date.fcDateTimeFormat('date'));
    res.write('<br/>- Current mm/dd/yy is : ' + p_date.fcDateTimeFormat('mm/dd/yyyy'));
    res.write('<br/>- Current time is : ' + p_date.fcDateTimeFormat('time'));
    res.write('<br/>- Current hh:mm:ss is : ' + p_date.fcDateTimeFormat('hh:mm:ss'));
    res.write('<br/>- Current date time is : ' + p_date.fcDateTimeFormat('datetime'));
    res.end();
}).listen(8080); 