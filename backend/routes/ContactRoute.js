const express = require('express');
const router = express.Router();

const { ContactController } = require('../controllers/Controller');

router.post('/contact', ContactController );

module.exports = router;