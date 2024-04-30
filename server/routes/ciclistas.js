const sqlite3 = require('better-sqlite3');
const express = require('express');
const router = express.Router();
const db = new sqlite3('tm.db');

router.post('/', (req, res) => {
  const { id, nombres, apellidos, tipo_doc_id, fecha_nac, rh_id } = req.body;

  // Validar los campos obligatorios
  if (!nombres || !apellidos || !tipo_doc_id || !fecha_nac || !rh_id) {
      return res.status(400).json({ error: 'Todos los campos obligatorios deben ser proporcionados' });
  }

  // Campos opcionales
  const { direccion, celular, estrato, email, ocupacion } = req.body;

  // Insertar el nuevo ciclista en la base de datos
  const stmt = db.prepare(`
      INSERT INTO ciclistas (id, nombres, apellidos, tipo_doc_id, fecha_nac, rh_id, direccion, celular, estrato, email, ocupacion)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  stmt.run(id, nombres, apellidos, tipo_doc_id, fecha_nac, rh_id, direccion, celular, estrato, email, ocupacion);

  // Devolver una respuesta de éxito
  res.status(201).json({ mensaje: 'Ciclista creado exitosamente' });
});

router.get('/', (req, res) => {
  const { id } = req.query;
  if (id) {
    // Si se proporciona un ID, realizar una consulta filtrada
    const stmt = db.prepare('SELECT * FROM ciclistas WHERE id = ?');
    const ciclista = stmt.get(id);

    if (ciclista) {
      res.json(ciclista);
    } else {
      res.status(404).json({ error: 'Ciclista no encontrado' });
    }
  } else {
    const result = db.prepare('SELECT * FROM ciclistas').all(); // Ejemplo de consulta
    res.json(result);
  }
});
module.exports = router;