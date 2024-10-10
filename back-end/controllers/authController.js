const db = require('../config/db');
const jwt = require('jsonwebtoken');

// Função para registro de usuário
exports.register = (req, res) => {
  const { email, password } = req.body;

  db.execute('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao verificar o usuário.' });
    }
    
    if (results.length > 0) {
      return res.status(400).json({ message: 'Usuário já existe.' });
    }

    // Se o usuário não existe, insira um novo
    db.execute('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao registrar o usuário.' });
      }

      res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    });
  });
};

// Função para login
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao verificar o usuário.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Email ou senha incorretos.' });
    }

    const user = results[0];

    // Gerar token JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  });
};
