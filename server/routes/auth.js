// routes/auth.js
const express = require('express');
const router = express.Router();

// Definir rutas de autenticación
router.post('/login1', (req, res) => {
  // Lógica de autenticación
});

router.post('/logout1', (req, res) => {
  // Lógica de cierre de sesión
});

module.exports = router;