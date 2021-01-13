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

    get = (id) => {
        return this.usersList.find((el) => {
            if(el.id == id) return true
            else return false
        })
    }
}