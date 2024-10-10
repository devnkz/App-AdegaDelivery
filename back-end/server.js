
const express = require('express');
const db = require('./config/db')
const routeUser = require('./routes/auth')
const routeProduto = require('./routes/produtoRoutes')
require('dotenv').config();

const app = express();

app.use(express.json());

//rotas

app.use('/api/auth', routeUser);
app.use('/api/produtoRoutes', routeProduto);


// Rota para verificar se a API está funcionando
app.get('/', (req, res) => {
  return res.json({ mensagem: 'Nossa API está funcionando' });
});

const port = 3000;

// Inicie o servidor Express
app.listen(port, () => {
  console.log(`Servidor funcionando na porta ${port}...`);
});
