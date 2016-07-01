var Produto = require('../models/produto');


exports.save = function (nome, descricao, valor, callback) {
    new Produto({
        'nome': nome,
        'descricao': descricao,
        'valor': valor,
    }).save(function (error, produto) {
        if(error) {
            callback({error: 'Não foi possivel savar'});
        } else {
            callback(produto);
        }
    });
};

exports.getById = function (id, callback) {
    Produto.findById(id, function (error, produto) {
        if(error) {
            callback({error: 'Não foi possivel localizar o produto'})
        } else {
            callback(produto);
        }
    });
}

exports.list = function (callback) {
    Produto.find({}, function (error, produtos) {
        if(error) {
            callback({error: 'Não foi possivel encontrar os produtosRoutes'});
        } else {
            callback(produtos);
        }
    });
};

exports.delete = function (id, callback) {
    Produto.findById(id, function (error, produto) {
       if (error) {
           callback({error: 'Não foi possivel excluir'});
       } else {
           produto.remove(function (error) {
              if(!error) {
                  callback({response: 'Produto excluido com sucesso'})
              }
           });
       }
    });
}