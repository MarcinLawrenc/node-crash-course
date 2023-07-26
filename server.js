const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel="stylesheet" href="#"></head>')
    res.write('<p>hello, node</p>');
    res.end();
});

server.listen(3000,'localhost', () => {
    console.log('listening on port 3000');
});