const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller');
const auth = require('../middlewares/auth.middleware');

router
    .get('/:id', controller.get)
    .post('/', controller.create)
    .put('/login', controller.login)
    .put('/:id', auth('user'), controller.update)

    .delete('/:id', controller.delete)

module.exports = router;