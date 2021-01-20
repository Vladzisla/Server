const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller');
const auth = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validation.middleware');
const createUserScheme = require('../validation-schemes/create-user.scheme');

router
    .get('/:id', controller.get)
    .post('/registration',validate(createUserScheme), controller.create)
    .put('/login', controller.login)
    .put('/update', auth('admin'), controller.update)
    .delete('/:id', controller.delete)

module.exports = router;