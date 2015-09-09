var express     = require('express'),
    app         = express(),
    http        = require('http'),
    httpServer  = http.Server(app),
    port        = 3000;

app.use(express.static(__dirname+'/app'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/app/index.html');
});

app.listen(port);