// Projeto Simulador de Partida de Futebol -------------
// Dev: Denilson Brito ---------------------------------
// Linguagem: NodeJs -----------------------------------

var express = require("express"); // Chamando a dependência Express
var app = express(); // Armazenando a dependência em uma varíavel
app.set('view engine', 'ejs'); // Definindo a extensão do arquivo de páginas
app.set('views', './views'); // Definindo diretório de páginas
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // Habilitando passagem de parâmetros via Ajax
app.use(express.json());
app.use("/public", express.static("./public")); // Permitindo acesso de todos usuários à pasta Public


// Página inicial
app.use("/", (req, res, next) => {
    res.render('index');
});

// Aponta o servidor local para a porta 3000
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Funcionando na porta %s', port);
});