// const DataTypes = require("sequelize")
// const product = require('../models/products')
  
const { Op } = require("sequelize");
const db = require('../models/index')
const { QueryTypes } = require('sequelize');

exports.viewProduct = async (req, res) => {
    const product = await db.sequelize.query("SELECT * FROM stocks INNER JOIN products ON stocks.product_id = products.product_id WHERE stocks.product_id =  :product_id", {replacements: {product_id: req.params.product_id}, type: QueryTypes.SELECT });
    const brand = await db.sequelize.query("SELECT * FROM brands WHERE brands.brand_id = :brand_id", {replacements: {brand_id: product[0].brand_id}, type: QueryTypes.SELECT });

    console.log(product)

    res.render("productDetails", { product: product, brand: brand, user: req.isAuthenticated()});
};