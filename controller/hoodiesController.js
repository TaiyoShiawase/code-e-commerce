

exports.getAllHoodieProducts = async (req, res) => {
    res.render('allHoodiesProduct', {user: req.isAuthenticated()})
}
