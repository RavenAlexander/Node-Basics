const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.write('<a href="http://127.0.0.1:3000/text">Text page</a><br>');
    res.write('<a href="http://127.0.0.1:3000/about">About page</a>');
   
    res.end(); }
    else if(url === "/text") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: red">This is another text page</h1>');
        res.write('<p>Check out the text here.</p>');
        res.write('<a href="http://127.0.0.1:3000/">Home page</a><br>');
    res.write('<a href="http://127.0.0.1:3000/about">About page</a>');
        res.end(); }
    else if(url === "/about") {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1 style="color: red">This is the about page</h1>');
            res.write('<p>See what it is all about</p>');
            res.write('<a href="http://127.0.0.1:3000/">Home page</a></br>');
    res.write('<a href="http://127.0.0.1:3000/text">Text page</a>');
            res.end(); }    
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });