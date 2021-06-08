const express = require('express')
const passport = require('passport')
const router = express.Router()
const auth = require('../auth')
const accountController = require('../controller/accountController')
const customerHomeController = require('../controller/customerHomeController')
const allShirtController = require('../controller/shirtController')
const allHoodiesProduct = require('../controller/hoodiesController')

const productDetails = require('../controller/productDetails')


const allBrandsController = require('../controller/allBrandsController')


const searchController = require('../controller/searchController')


const productDetailsController = require('../controller/viewProductController')

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


router.get('/product/shirts-all', allShirtController.getAllShirtProducts)

router.get('/product/hoodies-all', allHoodiesProduct.getAllHoodieProducts)

router.get('/product/shirts/id', productDetails.getProductDetails)






router.get('/search-brand', searchController.searchByBrand)

 router.get('/product/all-brands', allBrandsController.getAllProducts)   


 //get product details

 router.get('/product/:product_id', productDetailsController.viewProduct)


module.exports = router