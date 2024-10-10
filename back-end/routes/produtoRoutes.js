const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Certifique-se de que este arquivo existe e exporta a conexão com o MySQL

// Rota para listar todos os produtos
router.get('/produtos', (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    return res.json(results);
  });
});

// Rota para listar produtos do tipo "Cerveja"
router.get('/cervejas', (req, res) => {
  db.query('SELECT * FROM produtos WHERE tipo = "Cerveja"', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    return res.json(results);
  });
});

// Rota para listar produtos do tipo "Whisky"
router.get('/whisky', (req, res) => {
  db.query('SELECT * FROM produtos WHERE tipo = "Whisky"', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    return res.json(results);
  });
});

// Rota para listar produtos do tipo "Refrigerante"
router.get('/refrigerantes', (req, res) => {
  db.query('SELECT * FROM produtos WHERE tipo = "Refrigerante"', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    return res.json(results);
  });
});

// Rota para listar produtos do tipo "Suco"
router.get('/sucos', (req, res) => {
  db.query('SELECT * FROM produtos WHERE tipo = "Suco"', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    return res.json(results);
  });
});

// Rota da SearchBar
router.get('/pesquisa', (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).send('Parâmetro de pesquisa não fornecido.');
  }

  const sql = 'SELECT * FROM produtos WHERE nome LIKE ? OR tipo LIKE ?';
  const values = [`%${query}%`, `%${query}%`];

  db.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erro ao realizar a pesquisa.');
    }

    res.json(results);
  });
});

// Exporta o roteador
module.exports = router;
