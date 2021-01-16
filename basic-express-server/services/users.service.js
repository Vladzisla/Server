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
    create =  (userBody) => {
        this.usersList.push({id: new Date(), ...userBody});
        this.writeToFile(this.usersList);
        return {message: 'User was created.'}

    }
    update = (id, ...userBody) => {
        if(this.usersList.some((el) => {return el.id == id})){

            //this.usersList.find((el) => {return el.id == id}) = {id, ...userBody}
            Object.assign(this.usersList.find((el) => {return el.id == id}), ...{id, ...userBody})

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