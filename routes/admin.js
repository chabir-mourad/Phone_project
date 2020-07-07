const express = require('express')
const router =express.Router()
const jwt = require('jsonwebtoken')
const config = require('config');
const bcrypt = require('bcryptjs');

// @route  /createAdmin
//@desc   Create Admin to manage product & Users
// @access  Private


router.get('/' , async(req,res)=> {
try {
    const user = new User({
        name: 'Mourad',
        email: 'chabirmourad26@gmail.com',
        password: '123456789',
        adress : 'Gabes',
        zipCode: 6052 ,
      phoneNumber:99165007,
        isAdmin: true,

      })
      // Haash & Salt the password


const salt = await  bcrypt.genSalt(10)

user.password = await bcrypt.hash(password, salt)

const newUser = await user.save()
console.log(newUser)
const payload = {
    newUser : {
        id : newUser.id
    }

}

jwt.sign(payload,config.get('jwtSecret') , {expiresIn : 460000} , function(err,token) {
    if (err) {console.log(err)}
    else {
        res.json({token})
    }
    
})


} catch (err) {
   console.error(err.message);
   res.status(500).send('Server is out ...')
    
}


})










module.exports = router