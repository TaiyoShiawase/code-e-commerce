const account = require('../models/account')

exports.getCustomerHomepage = async (req, res) => {
    res.render('customerHome')
}

exports.getCustomerCart = async (req, res) => {
    res.render('customerCart')
}

exports.getCustomerCheckoutPage = async (req, res) => {
    res.render('customerCheckout')
}