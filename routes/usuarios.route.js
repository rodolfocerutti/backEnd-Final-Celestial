const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controllers');

router.post(
    '/',
    usuariosController.cadastrarUsuario
);

router.get(
    '/',
    usuariosController.getUsuarios
);

module.exports = router;