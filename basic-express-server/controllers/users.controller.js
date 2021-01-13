const usersService = require('../services/users.service')
class UsersController{
    constructor() {
        this.get = this.get.bind(this)
    }
    service = usersService;
    get = (req, res) => {
        res
            .status(200)
            .send(this.service.get(req.params.id))
    }
    create = (req, res) => {
        res
            .status(200)
            .send(this.service.create(req.params.id, req.body.name))
    }
    update = (req, res) => {
        res
            .status(200)
            .send(this.service.update(req.params.id, req.body.name))
    }
    delete = (req, res) => {
        res
            .status(200)
            .send(this.service.delete(req.params.id))
    }
}

module.exports = new UsersController();