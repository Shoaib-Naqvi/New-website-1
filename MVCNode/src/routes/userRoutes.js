const express = require('express');

const router = express.Router();

const userController = require('../controllers/usercontroller');

router.get('/routes', userController.getAllUsers);

router.get('/routes/:Id', userController.getUserById);

router.post('/routes', userController.createUser);

router.put('/routes/:Id', userController.updateUser);

module.exports = router;