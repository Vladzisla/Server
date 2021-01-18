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
    create = async (req, res) => {
        res
            .status(200)
            .send(await this.service.create(req.body))
    }
    login = async (req, res) => {
        res
            .status(200)
            .send(await this.service.login(req.body))
    }
    update =  (req, res) => {
        res
            .status(200)
            .send( this.service.update(req.params.id, req.body))
    }
    delete = (req, res) => {
        res
            .status(200)
            .send(this.service.delete(req.params.id))
    }
}

module.exports = new UsersController();