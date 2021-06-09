// const DataTypes = require("sequelize")
// const product = require('../models/products')
  
const { Op } = require("sequelize");
const db = require('../models/index')
const { QueryTypes } = require('sequelize');

exports.viewProduct = async (req, res) => {
    
    const product = await db.sequelize.query("SELECT * FROM products INNER JOIN stocks ON products.product_id = stocks.product_id", { type: QueryTypes.SELECT });
    const brand = await db.sequelize.query("SELECT * FROM brands WHERE brands.brand_id = :brand_id", {replacements: {brand_id: product[0].brand_id}, type: QueryTypes.SELECT });

    res.render("productDetails", { product: product, brand: brand, user: req.isAuthenticated()});
};