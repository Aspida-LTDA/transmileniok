const sqlite3 = require('better-sqlite3');
const express = require('express');
const router = express.Router();
const db = new sqlite3('tm.db');
// Ruta para la página de inicio

router.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación');
});



// Ruta para realizar consultas a la base de datos
router.get('/consultar', (req, res) => {
  const result = db.prepare('SELECT * FROM usuarios').all(); // Ejemplo de consulta
  res.json(result);
});

router.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;
  if (!usuario || !contrasena) {
    return res.status(400).json({ error: 'Falta el usuario o la contraseña' });
  }

  const stmt = db.prepare('SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?');
  const usuarioEncontrado = stmt.get(usuario, contrasena);

  if (usuarioEncontrado) {
    res.status(200).json({ role: usuarioEncontrado.rol_id, nombre: usuarioEncontrado.nombres });
  } else {
    res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
  }
});

module.exports = router;