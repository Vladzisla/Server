const usersService = require('../services/users.service')
class UsersController{
    constructor() {
        this.get = this.get.bind(this)
    }
    service = usersService;
    get(req, res){
        res
            .status(200)
            .send({
                users: this.service.getUsers(),
                login: req.login
        })
    }
}
module.exports = new UsersController();