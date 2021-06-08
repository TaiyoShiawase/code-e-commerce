const db = require('../models/index')

const Cart = db.cart;
const Product = db.products
const Stock = db.stocks

exports.addToCart = async (req, res) => {
    console.log(req.query)
    
    let product = await Cart.create(
       req.query
    )

    console.log(product);

    if(product){res.redirect('/cart')}
}

exports.getCart = async (req, res) => {
    res.render('customerCart')
}


exports.searchByBrand = async (req, res) => {
	try {
		const product = await Product.findAll({
			include: 
				{
					model: Brand,
					attributes: ["brand_name", "brand_id"], 
					where:{
						brand_name: req.query.search,	
					} 
				},
		})		
			
		res.render("brandProducts", { product: product });
	} catch (err) {
		console.log(err)
	}
};














