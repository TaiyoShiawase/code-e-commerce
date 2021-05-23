const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserById){
    const authenticateUser = (email, password, done) => {
        const result = getUserByEmail(email)
        result.then((customer) => {
            if(customer === null){
                return done(null, false, {message: 'Incorrect Email'})
            }else{
                bcrypt.compare(password, customer.password, (err, result) => {
                    if(result === true){
                        return done(null, customer)
                    }else{
                        return done(null, false, {message: 'Incorrect Password'})
                    }
                })
            }
        })
    }
 
    passport.use(new LocalStrategy({ usernameField: 'email'}, authenticateUser))

    passport.serializeUser((customer, done) => done(null, customer.account_id))

    passport.deserializeUser((id, done) => {
        const res = getUserById(id)
        
        res.then((customer) => {
            return done(null, customer) 
        })
    }) 
}

module.exports = initialize