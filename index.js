import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();

function paginaInicial(requisição, resposta) {
      resposta.send(`<h1>Bem vindo!</h1>
                     <br>
                     <h2> Petshop </h2>
                     <h3> href="/sobre" </h3>
   `);
}             // paginaIncial = parametro

app.get("/", paginaInicial); // rota raiz http://localhost:3000/

app.listen(porta, host, () => {
    console.log("Servidor rodando em http://" + host + ":" + porta);
});