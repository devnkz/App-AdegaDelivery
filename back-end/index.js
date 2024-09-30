const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pel4n1ck',
  database: 'appdb'
});

// Conecte-se ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});

// Rota para verificar se a API está funcionando
app.get('/', (req, res) => {
  return res.json({ mensagem: 'Nossa API está funcionando' });
});

// Rota para consultar dados do banco de dados
app.get('/produtos', (req, res) => {
  connection.query('SELECT * FROM produtos', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    return res.json(results);
  });
});

app.get('/cervejas', (req, res) => {
  connection.query('SELECT * FROM produtos where tipo = "Cerveja"', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    return res.json(results);
  });
});

app.get('/whisky', (req, res) => {
  connection.query('SELECT * FROM produtos where tipo = "Whisky"', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    return res.json(results);
  });
});

app.get('/refrigerantes', (req, res) => {
  connection.query('SELECT * FROM produtos where tipo = "Refrigerante"', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    return res.json(results);
  });
});

app.get('/sucos', (req, res) => {
  connection.query('SELECT * FROM produtos where tipo = "Suco"', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    return res.json(results);
  });
});

//Rota da SearchBar

app.get('/pesquisa', (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).send('Parâmetro de pesquisa não fornecido.');
  }

  const sql = `SELECT * FROM produtos WHERE nome LIKE ? OR tipo LIKE ?`;
  const values = [`%${query}%`, `%${query}%`];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erro ao realizar a pesquisa.');
    }

    res.json(results);
  });

});

// Inicie o servidor Express
app.listen(port, () => {
  console.log(`Servidor funcionando na porta ${port}...`);
});
