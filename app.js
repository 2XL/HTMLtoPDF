var express = require('express');
var app = express();

var http = require('http').Server(app);

var port = process.env.PORT || 8080;



app.use('/nexio', express.static(__dirname + '/nexio-pdf'));
app.use('/libs', express.static(__dirname + '/bower_components'));

app.get('/client', function (req, res) {
    res.sendFile(__dirname + '/client.html');
});


app.get('/', function (req, res) {
    res.send('<h1>Hello server Up!!!</h1>');
});


http.listen(port, function () {
    console.log('listening on port *:' + port)
});