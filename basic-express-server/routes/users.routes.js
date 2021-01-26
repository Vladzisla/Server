const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller');
const auth = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validation.middleware');
const createUserScheme = require('../validation-schemes/create-user.scheme');
const updateUserScheme = require('../validation-schemes/update-user.scheme');

router
    // .get('/1', controller.get1)
    .get('/:id', controller.get)
    .post('/registration',validate(createUserScheme), controller.create)
    .put('/login', controller.login)
    // .put('/:id', auth('admin'),validate(updateUserScheme), controller.update)
    .put('/:id', controller.update)
    .delete('/:id', controller.delete)

module.exports = router;