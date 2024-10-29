const express = require('express')
const app = express()
const port = 3000
const rotasHome = require("./rotas/rotas")
const rotasLogin = require("./rotas/login")
 
app.use('/home', rotasHome)
app.use('/', rotasLogin)

app.listen(port, () => {
    console.log('Servidor rodando')
})


