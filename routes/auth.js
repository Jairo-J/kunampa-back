const express = require('express');

const {loginCtrl, registerCtrl} = require('../controllers/auth');
const {validatorRegister, validatorLogin} = require('../validators/auth');


const router = express.Router();

/**
 * Registro nuevo usuario
 */
router.post('/register', validatorRegister, registerCtrl);

/**
 *
 */
router.post('/login', validatorLogin, loginCtrl);

module.exports = router;
