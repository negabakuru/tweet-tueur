var http = require('http');
var fs = require('fs');

function handleRequest(request, response)
{
    console.log("Server received a request");

    fs.readFile('index.html', 'utf8', function (error, data) {
        if (error)
            return console.log(error);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
}
var server = http.createServer(handleRequest);
const port = 4242;
server.listen(port, function () {
    console.log("Server listening on port " + port)
});