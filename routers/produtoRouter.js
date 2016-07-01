var express = require('express');
var router = express.Router();
var produtoController = require('../controllers/produtoController');

router.get('/', function(req, res) {
    produtoController.list(function (produtos) {
        res.json(produtos);
    })
});

router.get('/:id', function (req, res) {
    var id = req.params.id;
    produtoController.getById(id, function (produto) {
        res.json(produto);
    })
});

router.post('/save', function (req, res) {
    var nome = req.body.nome;
    var descricao = req.body.descricao;
    var valor = req.body.valor;

    produtoController.save(nome, descricao, valor, function (prduto) {
        res.json(prduto);
    });
});

router.delete('/delete/:id', function (req, res) {
    var id = req.params.id;
    produtoController.delete(id, function(produto) {
        res.json(produto);
    })
});

module.exports = router;
