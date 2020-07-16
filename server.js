const express = require('express')
const app = express()
const connectMongo = require('./config/db')
const cors = require('cors');
// Connect  Database
app.use(cors())
connectMongo()

// initialise Body Parser

app.use(express.json({extended : false}))

app.get('/', (req, res) => {
 
    res.send("api is running")


    


})




// Deploy The Routes 


app.use('/users',require('./routes/users'))

app.use('/login',require('./routes/auth'))

app.use('/admin', require('./routes/index')) 


app.use('/createAdmin' , require('./routes/admin'))


// app.use('/command')






const PORT = 5000 || process.env.PORT


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))