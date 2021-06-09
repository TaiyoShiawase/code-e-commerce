const Checkout = require('../models/checkout')
const db = require('../models/index')

const Cart = db.cart;

exports.checkoutCart = async (req, res) => {
    let c = await Checkout.model.create(
        req.body
    )

    let d = await Cart.destroy({
        where: {
            account_id: req.user.account_id
        }
    })

    if(c){
        res.render('customerCheckout', {user: req.isAuthenticated(), details: req.body, user: req.user})
    }
}

