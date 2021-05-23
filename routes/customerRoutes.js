const express = require('express')
const passport = require('passport')
const router = express.Router()
const auth = require('../auth')
const accountController = require('../controller/accountController')
const customerHomeController = require('../controller/customerHomeController')

router.get('/', customerHomeController.getCustomerHomepage)

router.get('/login', auth.checkNotAuthenticated, accountController.getCustomerLoginPage)
router.post('/login', auth.checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/checkout',
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/register', auth.checkNotAuthenticated, accountController.getCustomerRegisterPage)
router.post('/register', auth.checkNotAuthenticated, auth.passcomp, accountController.registerCustomer)

router.get('/cart', customerHomeController.getCustomerCart)

router.get('/checkout', auth.checkAuthentication, customerHomeController.getCustomerCheckoutPage)

router.delete('/logout', accountController.logout)

module.exports = router