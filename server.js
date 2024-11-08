const express = require('express')
const app = express()
const port = 3000
const rotasHome = require("./router/rotas")
const rotasLogin = require("./router/login")
const mid = require("./middlewares/mid")




app.use('/home', mid, rotasHome)

app.use('/', rotasLogin)

app.listen(port, () => {
    console.log('Servidor rodando')
})


