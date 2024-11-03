const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Formulário de Contato</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: center;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    width: 300px;
                }
                label, input, textarea {
                    margin-bottom: 10px;
                }
            </style>
        </head>
        <body>
            <h1>Formulário de Contato</h1>
            <form action="/submit" method="POST">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" rows="4" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </body>
        </html>
    `);
});

app.post('/submit', (req, res) => {
    const { nome, email, mensagem } = req.body;

    console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);

    res.send(`<h2>Obrigado, ${nome}! Seus dados foram recebidos com sucesso.</h2>`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
