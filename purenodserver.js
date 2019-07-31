1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
const http = require('http');
const url = require('url');

function handler(req, res) {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write('Hello, I am a webserver!');
        return res.end();
    } else {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        return res.end();
    }
}

const server = http.createServer(handler);

server.listen(3000);