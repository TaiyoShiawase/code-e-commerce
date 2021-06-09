

exports.getAllShirtProducts = async (req, res) => {
    res.render('allShirtProducts', {user: req.isAuthenticated()})
}
