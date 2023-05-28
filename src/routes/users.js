const express = require('express');
const router = express.Router();


const userController = require('../app/controllers/UserController');

router.use('../resources/views/signup', userController.signup);
router.post('/store', userController.store);

module.exports = router;   