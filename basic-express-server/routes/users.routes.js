const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller');

router
    .get('/:id', controller.get)
    .post('/', controller.create)
    .put('/:id', controller.update)
    .delete('/:id', controller.delete)

module.exports = router;