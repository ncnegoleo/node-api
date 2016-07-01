var app = require('./config/appConfig');
var db  = require('./config/dbConfig');
var produtosRoutes = require('./routers/produtoRouter');


app.get('/', function (req, res) {
    res.end('Bem-Vindo a API  de produtosRoutes!');
});

// rota de produtosRoutes
app.use('/produtos', produtosRoutes);