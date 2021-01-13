const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller');

router
    .get('/', controller.get)
    .put('/:id', controller.refresh)
    .post('/', controller.create)
    .delete('/:id', controller.delete)

module.exports = router