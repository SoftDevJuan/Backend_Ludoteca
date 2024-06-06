const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/controllers.js');


router.get('/api/consultarFolios', controller.consultarFolios);
router.post('/api/registrarInfante', controller.registrarInfante);


module.exports = router;


