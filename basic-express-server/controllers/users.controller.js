const usersService = require('../services/users.serviceDB')
const auth = require('../middlewares/auth.middleware');

class UsersController{
    constructor() {
        this.get = this.get.bind(this)
    }
    service = usersService;

    get = async (req, res) => {
        res
            .status(200)
            .send(await this.service.get(req.params.id))
    }
    create = async (req, res) => {
        res
            .status(200)
            .send(await this.service.create(req.body))
    }
    login = async (req, res) => {
        res
            .status(200)
            .send(await this.service.login(req.body.login, req.body.password))
    }
    update = async (req, res) => {
        res
            .status(200)
            .send(await this.service.update(req.params.id, req.body))
    }
    delete = async (req, res) => {
        res
            .status(200)
            .send(await this.service.delete(req.params.id))
    }
}

module.exports = new UsersController();