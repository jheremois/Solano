const express = require('express')
const path = require('path')
const env = require('node-env-file')

const app = express()

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

env('./.env')

app.use(express.urlencoded(
    {
        extended: true
    }
))

const router = require('./router')

app.use('/', router())

app.use((req, res)=>{

    res.status(404)

    res.render('404', { url: req.url })

    return

})

const port = process.env.PORT || 1305

app.listen(port)