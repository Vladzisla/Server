
bcrypt = require("bcryptjs")
fs = require("fs")

class JSONUsersService {
    usersList = JSON.parse(fs.readFileSync("users.json", "ascii"))

    writeToFile(data){
        fs.writeFileSync("users.json", JSON.stringify(data), 'ascii')
    }

    get = (id) => {
        return this.usersList.find((el) => {
            return el.id == id
        })
    }
    create = (userBody) => {
        if(this.usersList.some((el) => {return el.login == userBody.login})){
            return {message: 'This login is already taken.'}
        }
        else {
            //?
            bcrypt.hash(userBody.password, 10, (err, hash) => {
                userBody.password = hash
                this.usersList.push({id: new Date(), ...userBody, });
                this.writeToFile(this.usersList);
            })
            return {message: 'User was created.'}
        }

    }
    login = (userBody) => {
        let res = 'fail'
        const user = this.usersList.find((el) => {return el.login == userBody.login})

        new Promise((resolve, reject) => {
            bcrypt.compare(userBody.password, user.password, (err, res) => {
                resolve(res)
            })
        }).then(resp => {
            res = resp
        })

        return res
    }
    update = (id, ...userBody) => {
        if(this.usersList.some((el) => {return el.id == id})){
            Object.assign(this.usersList.find((el) => {return el.id == id}), ...userBody)

            this.writeToFile(this.usersList);
            return {message: 'User was updated.'}
        }
        else {
            return {message: 'User does not exist.'}
        }

    }
    delete = (id) => {
        if(this.usersList.some((el) => {return el.id == id})) {
            this.usersList.splice(this.usersList.findIndex((el, index) => {
                return el.id == id
            }), 1);

            this.writeToFile(this.usersList);
            return {message: 'User was deleted.'}
        }
        else {
                return {message: 'User does not exist.'}
        }
    }
}
module.exports = new JSONUsersService();