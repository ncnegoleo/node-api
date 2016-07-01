var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var ProdutoSchema = new Schema ({
    nome: String,
    descricao: String,
    valor: String,
});

ProdutoSchema.plugin(autoIncrement.plugin, 'Produto');

module.exports = mongoose.model('Produto', ProdutoSchema);