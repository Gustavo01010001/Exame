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
    resposta.write(`</body>`);
    resposta.write(`</html>`);
    resposta.end();
}

app.get("/sobre", mostrarSobre);

function depositar(requisicao, resposta) {
    const valor = requisicao.query.valor;
    if (valor) {
        resposta.write(`<html>
                        <head>
                        <meta charset='UTF-8'>
                        <title>Deposito realizado</title>
                        </head>
                        <body>
                            <h1>Deposito realizado</h1>
                            <h1>Valor depositado: ${valor}</h1>
                            <h1>Obrigado!</h1>
                        </body>
                        </html>`);
        resposta.end();	
    }
    else {
        resposta.write("<html>");
        resposta.write("<head>");
        resposta.write("<meta charset='UTF-8'>");
        resposta.write("</head>");
        resposta.write("<body>");
        resposta.write("<h1>Nennhm valor informado</h1>");
        resposta.write("Exemplo: http://localhost:3000/depositar?valor=100");
        resposta.write("</body>");
        resposta.write("</html>");                       
        resposta.end();
    }


}

app.get("/depositar", depositar);

function contar(requisicao, resposta) {
    const inicio = parseInt(requisicao.query.inicio); // Corrigido para "requisicao"
    const fim = parseInt(requisicao.query.fim); // Corrigido para "requisicao"

    if (inicio > 0 && fim > 0 && inicio <= fim) {
        resposta.write("<html>");
        resposta.write("<head><meta charset='UTF-8'></head>");
        resposta.write("<body>");
        resposta.write("<p>Contando...</p>");
        resposta.write("<ul>");
        for (let i = inicio; i <= fim; i++) {
            resposta.write(`<li>${i}</li>`);
        }
        resposta.write("</ul>");
        resposta.write("</body>");
        resposta.write("</html>");
        resposta.end();
    } else {
        resposta.write("<html>");
        resposta.write("<head><meta charset='UTF-8'></head>");
        resposta.write("<body>");
        resposta.write("<h1>Informe corretamente o início e o fim.</h1>");
        resposta.write("<p>Exemplo: http://localhost:3000/contar?inicio=1&fim=10</p>");
        resposta.write("</body>");
        resposta.write("</html>");
        resposta.end();
    }
}

app.get("/contar", contar)

app.listen(porta, host, () => {
    console.log("Servidor rodando em http://" + host + ":" + porta);
});