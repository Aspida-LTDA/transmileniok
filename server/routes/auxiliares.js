const sqlite3 = require('better-sqlite3');
const express = require('express');
const router = express.Router();
const db = new sqlite3('tm.db');

router.get('/marcas', (req, res) => {
    const result = db.prepare('SELECT * FROM marcas').all();
    res.json(result);
});
router.get('/colores', (req, res) => {
  const result = db.prepare('SELECT * FROM colores').all();
  res.json(result);
});
router.get('/tipos', (req, res) => {
  const result = db.prepare('SELECT * FROM tipos').all();
  res.json(result);
});
router.get('/tipodoc', (req, res) => {
  const result = db.prepare('SELECT * FROM tipodoc').all();
  res.json(result);
});
module.exports = router;