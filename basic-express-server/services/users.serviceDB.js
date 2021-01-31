const jwt = require("jsonwebtoken");
bcrypt = require("bcryptjs")
const User = require('../models/users.model')
fs = require("fs")
const SECRET_KEY = 'secret'

class DBUsersService {

    get = async (id) => {
        return await User.findAll({
            where: {
                id: id
            }
        })
    }

    create = async (userBody) => {
        const user = await User.findOne({
            where: {
                login: userBody.login
            }
        })
        if (user) {
            return {message: 'This login is already taken.'}
        } else {
            await User.create({
                login: userBody.login,
                password: userBody.password
            });
            return {message: 'User was created.'}
        }
    }

    login = async (login, password) => {
        const user = await User.findOne({
            where: {
                login: login
            }
        })

        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({login, type: 'access'}, SECRET_KEY)
                return {token, user}
            } else {
                return {message: 'Incorrect password.'}
            }
        }
        else {
            return {message: 'User does not exist.'}
        }
    }

    update = async (id, userBody) => {
        userBody.filePath = userBody.file.path
        const user = await User.findOne({
            where: {
                id: id
            }
        })

        if (user) {
            try{
                await User.update(userBody,{
                    where:{
                        id: id
                    }
                })
            }
            catch (e) {
                if(e.errors[0].path == 'filePath'){
                    try{
                        fs.unlinkSync(userBody.file.path)
                    }
                    catch (e) {
                        return {message: 'Failed to save file on DB and to delete file from server'}
                    }
                    return {message: 'Failed to save file on DB'}
                }
                return {message: e.message}
            }
            return {message: 'User was updated.'}
        }
        else {
            return {message: 'User does not exist.'}
        }
    }

    delete = async (id) => {
        const user = await User.findOne({
            where: {
                id: id
            }
        })

        if(user){
            await User.destroy({
                where: {
                    id: id
                }
            })
            return {message: 'User has been deleted.'}
        }
        else {
            return {message: 'User does not exist.'}
        }
    }
}

module.exports = new DBUsersService();
