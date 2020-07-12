const mongoose = require('mongoose');



// define a schema
const commandSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      phone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'phone'
      },



date : {
    type : Date ,
    default : Date.now()
}





})





  // compile our model 



  const Command = mongoose.model('command' , commandSchema)


  module.exports = Command





