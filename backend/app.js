const express = require('express')
require('dotenv').config()

const dashboardRoute = require('./routes/dashboardRoute')
// const connection =require('./config/db')

const app = express()
const port = process.env.PORT || 5000


app.use('/api',dashboardRoute)




app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))




//http://localhost7001/totalPopulation