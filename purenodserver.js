const http = required('http');
function handler(req, res){
    res.writeHead(200,{'content-type':'text/plane'});
    res.write('hello, i am a webserver!');
    res.end();
}
const server = http.createServer(handler);
server.listen(3000);