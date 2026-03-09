const express = require('express');
const router = express.Router();

const mailCtrl = require('../controller/mail')
const userCtrl = require('../controller/users')

router.post('/email', userCtrl.createUser, mailCtrl.order)

module.exports = router