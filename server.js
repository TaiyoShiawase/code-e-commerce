const express = require('express')
const session = require('express-session')
const flash = require('express-flash')
const methodOverride = require('method-override')
const passport = require('passport')

const customerRoutes = require('./routes/customerRoutes')

const app = express()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(flash())
app.use(session({
    secret: 'esto-es-un-secreto',
    resave: false,
    saveUninitialized: false    
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.use('/', customerRoutes)

app.listen(8080, () => console.log('Server is Running: PORT 8080'))





