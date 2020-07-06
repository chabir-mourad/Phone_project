const mongoose = require('mongoose');




const UserSchema = new mongoose.Schema({
name : {
    type : String ,
    required : true
},

email : {
type : String ,
required : true
 
},

password  : {
    type : String ,
    required : true
},
adress : {
 type : String ,
 required : true

},

zipCode : {
    type : Number , 
    required :true , 
    default : 0 
},
avatar: {
    type: String
},


phoneNumber : {
type : Number , 
default : 0 ,
required  : true
},

date : {
    type : Date ,
default : Date.now()
},
isAdmin: { type: Boolean, required: true, default: false }



})




module.exports = User = mongoose.model('User' , UserSchema )