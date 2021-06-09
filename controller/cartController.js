const db = require('../models/index')
const { QueryTypes } = require('sequelize');

const Cart = db.cart;

exports.addToCart = async (req, res) => {
    

    req.body.account_id = req.user.account_id

    console.log(req.body)

    const stocks = await db.sequelize.query('SELECT availableStocks FROM stocks WHERE size = :size && product_id = :product_id', {replacements: {size: req.body.size, product_id: req.body.product_id}, type: QueryTypes.SELECT })

    if(req.body.qty > stocks[0].availableStocks){
        req.flash('failed', 'Not enough stocks');
        res.locals.message = req.flash();
        res.redirect('/product/' + req.body.product_id)
    }else{
        let newStock = stocks[0].availableStocks - req.body.qty

        console.log("NEWSTOOOKCSSS" + newStock)

        const newStocks = await db.sequelize.query('UPDATE stocks SET availableStocks = :newStocks WHERE product_id = :product_id && size = :size', {replacements: {newStocks: newStock ,product_id: req.body.product_id, size: req.body.size, }, type: QueryTypes.UPDATE })

        let product = await Cart.create(
            req.body
         )
     
         if(product){res.redirect('/product/' + req.body.product_id)}
    }
}

exports.getCart = async (req, res) => { 
    const product = await db.sequelize.query("SELECT * FROM cart INNER JOIN products ON cart.product_id = products.product_id WHERE account_id = :account_id", {replacements: {account_id: req.user.account_id}, type: QueryTypes.SELECT });
   
    res.render('customerCart', {product: product, user: req.isAuthenticated(), id: req.user.account_id})
}

exports.removeProduct = async (req, res) => {
    await db.sequelize.query("DELETE FROM cart WHERE cart_id = :cart_id", {replacements: {cart_id: req.query.cart_id}, type: QueryTypes.DELETE })

    res.redirect('/cart')
}
















