const jwt =  require('jsonwebtoken')
const fs = require("fs")


const auth = (req, res, next) => {
    try{
        const usersList = JSON.parse(fs.readFileSync("users.json", "ascii"))
        const [, token] = req.headers['authorization'].split(' ');
        const result = jwt.verify(token, 'secret')

        if(usersList.some((el) => {return el.login == result.login})){
            next()
        }
        else {
            throw new Error('User is not found.')
        }
    }
    catch (e) {
        res.status(401).send(e.message)
    }
}

module.exports = auth;