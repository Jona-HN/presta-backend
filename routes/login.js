const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/loginController.js');

router.post('/', usuariosController.validateCredentials);

module.exports = router;