const express = require('express')
const passport = require('passport')
const router = express.Router()
const auth = require('../auth')
const accountController = require('../controller/accountController')
const customerHomeController = require('../controller/customerHomeController')
const checkoutController = require('../controller/checkoutController')
const allShirtController = require('../controller/shirtController')
const allHoodiesProduct = require('../controller/hoodiesController')

const allBrandsController = require('../controller/allBrandsController')

const searchController = require('../controller/searchController')

const productDetailsController = require('../controller/viewProductController')

const cart = require('../controller/cartController')

//HOMEPAGE

router.get('/', customerHomeController.getCustomerHomepage)


//LOGIN REGISTER LOGOUT

router.get('/login', auth.checkNotAuthenticated, accountController.getCustomerLoginPage)
router.post('/login', auth.checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/register', auth.checkNotAuthenticated, accountController.getCustomerRegisterPage)
router.post('/register', auth.checkNotAuthenticated, auth.passcomp, accountController.registerCustomer)


router.delete('/logout', accountController.logout)

//PRODUCTS

router.get('/product/shirts-all', allShirtController.getAllShirtProducts)

router.get('/product/hoodies-all', allHoodiesProduct.getAllHoodieProducts)

router.get('/search-brand', searchController.searchByBrand)

 router.get('/product/all-brands', allBrandsController.getAllProducts)


 //get product details

 router.get('/product/:product_id', productDetailsController.viewProduct)

 //CART

 router.post('/addToCart', auth.checkAuthentication,cart.addToCart)
 router.get('/cart', auth.checkAuthentication,cart.getCart)
 router.get('/removeProduct', cart.removeProduct)


 //CHECKOUT
 
 router.post('/checkout', auth.checkAuthentication, checkoutController.checkoutCart)
 

module.exports = router













