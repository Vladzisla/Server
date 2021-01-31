const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./DBInit/DB.init')
const usersRouter = require('./routes/users.routes')
const multer = require('multer')


const app = express()
app.use(bodyParser.json());
// app.use(multer().array())


app.use('/users', usersRouter)

app.listen(3000, () => {
    console.log('Server started at port:3000')
})
