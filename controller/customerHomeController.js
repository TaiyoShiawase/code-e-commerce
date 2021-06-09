const account = require('../models/account')

exports.getCustomerHomepage = async (req, res) => {
    res.render('customerHome', {user: req.isAuthenticated()})
}

