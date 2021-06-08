const { Op } = require("sequelize");
const db = require('../models/index')

const Brand = db.brands;
const Product = db.products;

exports.getAllProducts = async (req, res) => {
    try {
		const product = await Product.findAll()		
			
		res.render("allProducts", { product: product });
	} catch (err) {
		console.log(err)

	}
}
