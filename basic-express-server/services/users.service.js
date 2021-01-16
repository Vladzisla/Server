fs = require("fs")

class JSONUsersService {
    usersList = JSON.parse(fs.readFileSync("users.json", "ascii"))

    writeToFile(data){
        // new Promise(function(resolve, reject) {
        //     fs.writeFileSync("users.json", JSON.stringify(data), 'ascii')
        // })
        //     .then(() => {
        //         return
        //     })
        fs.writeFileSync("users.json", JSON.stringify(data), 'ascii')
    }

    get = (id) => {
        return this.usersList.find((el) => {
            return el.id == id
        })
    }
    create =  (id, name) => {
        if(this.usersList.some((el) => {return el.id == id})) {
            return {message: 'This user already exists.'}
        }
        else {
            this.usersList.push({id, name})
            this.writeToFile(this.usersList)
            return {message: 'User was created.'}
        }
    }
    update = (id, name) => {
        if(this.usersList.some((el) => {return el.id == id})){
            this.usersList.find((el) => {
                return el.id == id
            }).name = name
            this.writeToFile(this.usersList)
            return {message: 'User was updated.'}
        }
        else {
            return {message: 'User does not exist.'}
        }

    }
    delete = (id) => {
        if(this.usersList.some((el) => {return el.id == id})) {
            let delElementIndex = 0;
            this.usersList.find((el, index) => {
                delElementIndex = index;
                return el.id == id
            })
            this.usersList.splice(delElementIndex, 1)
            this.writeToFile(this.usersList)
            return {message: 'User was deleted.'}
        }
        else {
                return {message: 'User does not exist.'}
        }
    }
}
module.exports = new JSONUsersService();