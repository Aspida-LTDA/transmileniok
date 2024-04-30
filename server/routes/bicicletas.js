const sqlite3 = require('better-sqlite3');
const express = require('express');
const router = express.Router();
const db = new sqlite3('tm.db');

router.post('/', (req, res) => {
  const { serie, usuario_id, color_id, marca_id, tipo_id, model, observaciones, foto } = req.body;

  // Validar los campos obligatorios
  if (!serie || !usuario_id || !color_id || !marca_id || !tipo_id || !model || !observaciones || !foto) {
      return res.status(400).json({ error: 'Todos los campos obligatorios deben ser proporcionados' });
  }

  // Insertar el nuevo ciclista en la base de datos
  const stmt = db.prepare(`
      INSERT INTO bicicletas (serie, usuario_id, color_id, marca_id, tipo_id, model, observaciones, foto)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);
  stmt.run(serie, usuario_id, color_id, marca_id, tipo_id, model, observaciones, foto);

  // Devolver una respuesta de éxito
  res.status(201).json({ mensaje: 'Bicicleta creada exitosamente' });
});

router.get('/', (req, res) => {
  const { serie } = req.query;
  if (serie) {
    // Si se proporciona un ID, realizar una consulta filtrada
    const stmt = db.prepare('SELECT * FROM bicicletas LEFT JOIN ciclistas ON usuario_id = id WHERE serie = ?');
    const bicicleta = stmt.get(id);

    if (bicicleta) {
      res.json(bicicleta);
    } else {
      res.status(404).json({ error: 'Bicicleta no encontrada' });
    }
  } else {
    const result = db.prepare('SELECT * FROM bicicletas LEFT JOIN ciclistas ON usuario_id = id').all();
    res.json(result);
  }
});
module.exports = router;