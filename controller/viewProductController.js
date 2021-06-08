// const DataTypes = require("sequelize")
// const product = require('../models/products')
  
const { Op } = require("sequelize");
const db = require('../models/index')

const Brand = db.brands;
const Product = db.products;

exports.viewProduct = async (req, res) => {
	

	
	try {
		const product = await Product.findAll({
            where: {
                product_id: req.params.product_id,
            },
        }
    )
      
        
		res.render("productDetails", { product: product});
	} catch (err) {
		console.log(err)
	// }
	}
    //  const brands = await Brand.findAll();
    //  console.log(brands)
};