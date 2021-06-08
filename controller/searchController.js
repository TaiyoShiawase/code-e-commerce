// const DataTypes = require("sequelize")
// const product = require('../models/products')
  
const { Op } = require("sequelize");
const db = require('../models/index')

const Brand = db.brands;
const Product = db.products;

exports.searchByBrand = async (req, res) => {
	

	
	try {
		const product = await Product.findAll({
			include: 
				{
					model: Brand,
					attributes: ["brand_name", "brand_id",], 
					where:{
						brand_name: req.query.search,	
					
					} 
				},
		})		
			
		res.render("brandProducts", { product: product });
	} catch (err) {
		console.log(err)
	// }
	}
    //  const brands = await Brand.findAll();
    //  console.log(brands)
};