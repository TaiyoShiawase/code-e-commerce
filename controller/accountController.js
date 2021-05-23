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
    res.render('customerLogin')
}

exports.login = async (req, res) => {
    let customer = await account.model.findOne({
        where: {
            email: req.body.email
        },
        raw:true
    })
    
    if(customer != null){
        bcrypt.compare(req.body.password, customer.password, (err, result) => {
            if(result === true){
                req.session.loggedIn = true
                req.session.uuid = customer.account_uuid
                res.redirect('/checkout')
            }else{
            res.render('customerLogin', {err: "Incorrect Password."})
            }
        })
    }else{
        res.render('customerLogin', {err: "Incorrect Email."})
    }

    console.log(customer)
}

exports.getCustomerRegisterPage = async (req, res) => {
    res.render('customerRegister')
}

exports.registerCustomer = async (req, res) => {
    req.body.account_uuid = uuid.v4()

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    req.body.password = hashedPassword

    let created_account = await account.model.create(
        req.body
    ).catch((err) => {
        res.render('customerRegister', {err: "Email Already Taken."})
    })
       
    if(created_account != undefined){
        res.render('customerLogin', {completed: "Successfully Registered."})
    }
    
    console.log(created_account)
}

exports.logout = (req, res) => {
    req.logOut()
    res.redirect('/login')
}