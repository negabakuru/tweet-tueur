var http = require('http');
var fs = require('fs');

var twitter = require('twitter');
var twitterInfos;
fs.readFile('twitter_infos.json', 'utf8', function (error, data) {
    if (error)
        return console.log(error);
    twitterInfos = JSON.parse(data);
    console.log('Data from twitter_infos.json: ' + twitterInfos.hashtag + ' ' + twitterInfos.consumer_key + ' ' + twitterInfos.consumer_secret + ' ' + twitterInfos.access_token_key + ' ' + twitterInfos.access_token_secret);
});


function handleRequest(request, response)
{
    console.log("Server received a request.");

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

