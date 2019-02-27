const express = require('express');
const router = express.Router();

const userController = require('./controller.js');

router.post('/register', userController.create);
router.post('/authenticate', userController.autenticate);

module.exports = router;