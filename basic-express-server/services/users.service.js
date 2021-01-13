class JSONUsersService {
    usersList = [
        {
            id: 1,
            name: 'asd'
        },
        {
            id: 2,
            name: 'fgh'
        }
    ]

    getUser = (id) => {
        return this.usersList.find((el) => {
            return el.id == id
        })
    }
    createUser = (id, name) => {
        if(this.usersList.some((el) => {return el.id == id})) {
            return {message: 'This user already exists.'}
        }
        else {
            this.usersList.push({id, name})
            return {message: 'User was created.'}
        }
    }
    updateUser = (id, name) => {
        if(this.usersList.some((el) => {return el.id == id})){
            this.usersList.find((el) => {
                return el.id == id
            }).name = name
            return {message: 'User was updated.'}
        }
        else {
            return {message: 'User does not exist.'}
        }

    }
    deleteUser = (id) => {
        if(this.usersList.some((el) => {return el.id == id})) {
            let delElementIndex = 0;
            this.usersList.find((el, index) => {
                delElementIndex = index;
                return el.id == id
            })
            this.usersList.splice(delElementIndex, 1)
            return {message: 'User was deleted.'}
        }
        else {
                return {message: 'User does not exist.'}
        }
    }
}
module.exports = new JSONUsersService();