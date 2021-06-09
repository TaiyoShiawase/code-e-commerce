const uuid = require('uuid')
const bcrypt = require('bcrypt')
const passport = require('passport')
const account = require('../models/account')
const initializePassport = require('../passport-config')

initializePassport(passport, 
    email => customer = account.model.findOne({
        where: {
            email: email
        },
        raw:true
    }),

    id => customer = account.model.findOne({
        where: {
            account_id: id
        },
        raw:true
    })
)

exports.getCustomerLoginPage = async (req, res) => {
    res.render('customerLogin', {user: req.isAuthenticated()})
}

exports.getCustomerRegisterPage = async (req, res) => {
    res.render('customerRegister', {user: req.isAuthenticated()})
}

exports.registerCustomer = async (req, res) => {
    req.body.account_uuid = uuid.v4()

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    req.body.password = hashedPassword

    let created_account = await account.model.create(
        req.body
    ).catch((err) => {
        res.render('customerRegister', {err: "Email Already Taken.", user: req.isAuthenticated()})
    })
       
    if(created_account != undefined){
        res.render('customerLogin', {completed: "Successfully Registered.", user: req.isAuthenticated()})
    }
    
    console.log(created_account)
}

exports.logout = (req, res) => {
    req.logOut()
    res.redirect('/login')
}