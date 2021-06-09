exports.passcomp = (req, res, next) => {
    if(req.body.password === req.body.confPassword){
        next()
    }else{
        res.render('customerRegister', {err: "Passwords didn't match"})
    }
}

exports.checkAuthentication = (req, res, next) => {
    if(req.isAuthenticated()) {
        next()
    }else{
        res.redirect('/login')    
    }
}

exports.checkNotAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
        return res.redirect('/checkout')
    }else{
        next()
    }
}