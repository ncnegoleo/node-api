var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;

var app = module.exports = express();

app.listen(port, function () {
    'Servidor rodando na porta: ' + port;
})

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


