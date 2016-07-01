var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var urlString = 'mongodb://localhost/API'

var connection = mongoose.createConnection(urlString);
autoIncrement.initialize(connection);

mongoose.connect(urlString, function (err, res) {
    if(err) {
        console.log('Não foi possivel conectar a url: ' + urlString);
    } else {
        console.log('Conctado a: ' + urlString);
    }
});
