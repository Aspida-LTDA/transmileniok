/*
const sqlite3 = require('better-sqlite3');
const bodyParser = require('body-parser');
const db = new sqlite3('tm.db');
const app = express();
var cors = require('cors');
app.use(cors())*/
const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/admin');
const auxiliaresRouter = require('./routes/auxiliares');
const ciclistasRouter = require('./routes/ciclistas');
const bicicletasRouter = require('./routes/bicicletas');
var cors = require('cors');
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use('/auth', authRouter);
app.use('/ciclistas', ciclistasRouter);
app.use('/auxiliares', auxiliaresRouter);
app.use('/bicicletas', bicicletasRouter);

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});