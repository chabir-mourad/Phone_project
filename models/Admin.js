const mongoose = require('mongoose');





AdminSchema = new mongoose.Schema({
  email : {
    type : String , 
    required : true 
},
  password : {
  type : String , 
  required : true 
}
})




const Admin = mongoose.model('Admin' , AdminSchema)


module.exports = Admin