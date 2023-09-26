const express = require('express');
const router = express.Router();
const materialesController = require('../controller/materialesController.js');

router.get('/', materialesController.getAll);

module.exports = router;