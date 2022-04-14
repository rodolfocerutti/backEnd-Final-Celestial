const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({credential: true, oringin: true}));
app.use(express.json());

const usuariosRouter = require('./routes/usuarios.route');

app.use('/usuarios', usuariosRouter);

module.exports = app;