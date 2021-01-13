const usersService = require('../services/users.service')
class UsersController{
    constructor() {
        this.get = this.get.bind(this)
    }
    service = usersService;
    get = (req, res) => {
        res
            .status(200)
            .send(this.service.getUser(req.params.id))
    }
    create = (req, res) => {
        res
            .status(200)
            .send(this.service.createUser(req.params.id, req.body.name))
    }
    update = (req, res) => {
        res
            .status(200)
            .send(this.service.updateUser(req.params.id, req.body.name))
    }
    delete = (req, res) => {
        res
            .status(200)
            .send(this.service.deleteUser(req.params.id))
    }
}

module.exports = new UsersController();