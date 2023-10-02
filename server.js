servidor.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/voto", (req, res) => {
  const nome = req.query.nome;
  const email = req.query.email;

  const votos = [
    { nome: "Opção 1", votos: 0 },
    { nome: "Opção 2", votos: 0 },
    { nome: "Opção 3", votos: 0 },
  ];
  let opcaoVotada = null;

  opcaoVotada = votos.find((opcaoVotada) => opcaoVotada.nome === nome);


  if (opcaoVotada) {
    opcaoVotada.votos++;
  }
  res.send(votos);
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080!");
});

index.ejs

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Formulario de Avaliação interna</title>
</head>
<body>
  <h1>Vote no IFF</h1>
  <h3>Se você pudesse classificar o IFF. Como você classificaria:</h3>
  <form action="/voto" method="post">
    <input type="radio" name="opcao" value="Opção	1"> Ruim
    <input type="radio" name="opcao" value="Opção 2"> Média
    <input type="radio" name="opcao" value="Opção 3"> Ótima
    <br><br>
    <input type="text" name="nome" placeholder="Seu nome">
    <input type="email" name="email" placeholder="Seu e-mail">
    <input type="submit" value="Votar">
  </form>
</body>
</html>