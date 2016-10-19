var http = require('http');
var fs = require('fs');

function handleRequest(request, response) {
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


var io = require('socket.io')(server);
var twitter = require('twitter');

io.on('connection', function (socket) {
    console.log('Received a connection on socket.io .');
});

var twitterInfos;
var twitterClient;
fs.readFile('twitter_infos.json', 'utf8', function (error, data) {
    if (error)
        return console.log(error);
    twitterInfos = JSON.parse(data);
    console.log('Collected data from twitter_infos.json.');
    console.log('Initiating twitter client.');
    twitterClient = new twitter(twitterInfos);
    SetStream();
});

function SetStream() {
    var stream = twitterClient.stream('statuses/filter', { track: '#' + twitterInfos.hashtag });
    stream.on('data', function (tweet) {
        io.emit('newTweet', { 'text': tweet.text });
    });
    console.log("Tracking #" + twitterInfos.hashtag);
}