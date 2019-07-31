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
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
const http = require('http');
const url = require('url');

function handler(req, res) {
    const parsedUrl = url.parse(req.url, true);

    res.setHeader('x-server-date', new Date());

    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write('Hello, I am a webserver!');
        return res.end();
    } else if (parsedUrl.pathname === '/time') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write(new Date().toString());
        return res.end();
    } else if (parsedUrl.pathname === '/hello') {
        const name = parsedUrl.query.name;
        if (!name) {
            res.writeHead(400, { 'Content-type': 'text/plain' });
            return res.end();
        }
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write(`Hello ${name}`);
        return res.end();
    } else if (parsedUrl.pathname.startsWith('/user/')) {
        const regex = new RegExp('\/user\/(.+)');
        const matches = regex.exec(parsedUrl.pathname);
        if (!matches || !matches[1]) {
            res.writeHead(400, { 'Content-type': 'text/plain' });
            return res.end();
        }
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write(`Userpofile of ${matches[1]}`);
        return res.end();
    } else {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        return res.end();
    }
}

const server = http.createServer(handler);

server.listen(3000);