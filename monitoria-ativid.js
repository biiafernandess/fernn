formulario.ejs

<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <h1>Formulário</h1>
    <form method="post" action="/enviar">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome"><br><br>
        <label for="usuario">Usuário:</label>
        <input type="text" id="usuario" name="usuario"><br><br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>

resultado.ejs
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <h1>Resultado</h1>
    <p>Nome: <%= nome %></p>
    <p>Usuário: <%= usuario %></p>
</body>
</html>

servidor.ejs
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('formulario');
});


app.post('/enviar', function(req, res) {
    res.render('resultado', {nome: req.body.nome, usuario: req.body.usuario });
});

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`);
});