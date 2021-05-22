const express = require('express')
const session = require('express-session')

const app = express()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(session({
    secret: 'esto-es-un-secreto',
    resave: false,
    saveUninitialized: false    
}));

app.listen(8080, () => console.log('Server is Running: PORT 8080'))