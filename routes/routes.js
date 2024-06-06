const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/controllers.js');


router.get('/consultarFolios', controller.consultarFolios);
router.post('/registrarInfante', controller.registrarInfante);


module.exports = router;


