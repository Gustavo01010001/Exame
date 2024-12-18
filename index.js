import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();

function paginaInicial(requisição, resposta) {
      resposta.send(`<h1>Bem vindo!</h1>
                     <br>
                     <h2> Petshop </h2>
                     
   `);
}             // paginaIncial = parametro

app.get("/", paginaInicial); // rota raiz http://localhost:3000/

function mostrarSobre(requisição, resposta) {
    resposta.write(`<html>`);
    resposta.write(`<head> 
                    <meta charset="UTF-8">
                     <title>Sobre</title>
                    </head>
                    <body>`);
    resposta.write(`<h1>Sobre nós</h1>`);
    resposta.write(`<p> Somos um petshop especializado em vender animais, geralmente filhotes</p>`);
    resposta.write(`<p> destinados a serem animais de estimação, bem como alimentos, acessórios e artigos para entusiastas</p>`);
    resposta.write(`<p> dalém de oferecer serviços de embelezamento como banho, tosa e perfumaria.</p>`);
    resposta.write(`</html>`);
    resposta.end();
}

app.get("/sobre", mostrarSobre);

app.listen(porta, host, () => {
    console.log("Servidor rodando em http://" + host + ":" + porta);
});