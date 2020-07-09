const express = require('express')
const router =express.Router()
const jwt = require('jsonwebtoken')
const config = require('config');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin')
const {check , validationResult} = require('express-validator')
const admin = require('../middlware/admin')


// @route  GET   createAdmin/auth
//@desc   Test routes
// @access  Public

router.get('/auth',admin ,async(req,res)=> {
  
    try {
        const user = await Admin.findById(req.admin.id).select('-passwword')
        res.json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')

        
    }
})


// @route  /createAdmin/createAdmin
//@desc   Create Admin to manage product & Users
// @access  Private


router.get('/createAdmin' , async(req,res) => {
try {
    const admin = new Admin({
        email : 'chabirmourad26@gmail.com' , 
        password:'123456789'
        })
    
    console.log(admin.password)
    // Haash & Salt the password
    
    
    const salt = await  bcrypt.genSalt(10)
    
    admin.password = await bcrypt.hash(admin.password, salt)
    
    
    // Save The user 
     await admin.save()
     res.json(admin)
} catch (err) {
    console.error(err.message);
    res.status(500).send('Server is out')
}
  
})

// @route  Post   /createAdmin/adminInterface
//@desc  Authenticate Admin & get  token
// @access  Public




router.post('/adminInterface' ,[
   
    check('email' , "Please include a Valid email").isEmail(),
    check('password' , "Password  is Required").not().isEmpty()
]  ,async (req,res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array()})
    }

    const {email , password } = req.body
try {
    


 
 
     let admin = await Admin.findOne({email})

     // Check the user Email
     if (!admin) {
         return res
         .status(400)
         .json({ errors: [{ msg: 'Invalid Credentials' }] });
     }
     
     // Check the user Passwword
     
      const isMatch = await  bcrypt.compare(password , admin.password)
     
     
      if (!isMatch) {
         return res
               .status(400)
               .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
     
     const payload = {
         admin : {
             id : admin.id
         }
     }
      jwt.sign(
             payload,
             config.get('jwtSecret'),
             { expiresIn: '5 days' },
             (err, token) => {
               if (err) throw err;
               res.json({ token });
             }
           );
     
     
    
 
        

    
} catch (err) {
    console.error(err.message);
res.status(500).send('Server is out')

}
  







})

module.exports = router