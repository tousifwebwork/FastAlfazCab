const express = require('express');
const router = express.Router();

const { CarsController } = require('../controllers/Controller');

router.get('/cars',CarsController);

module.exports = router;