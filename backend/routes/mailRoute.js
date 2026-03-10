const express = require('express');
const router = express.Router();

const mailCtrl = require('../controller/mail')

router.post('/email', mailCtrl.contact)

module.exports = router