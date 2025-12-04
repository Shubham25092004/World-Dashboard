
const mysql = require('mysql2/promise')
require('dotenv').config()

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
})

const testConnection =async()=>{
    try {
        const conn = await pool.getConnection()
        
        console.log("Database Connected......")
        
        conn.release()

    } catch (error) {
        console.log("Database Failed",error)
        
    }

}

testConnection()


module.exports= pool









































// const mysql =require('mysql')
// require('dotenv').config();

// const connection =mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER ,
//     password: process.env.PASSWORD ,
//     database: process.env.DATABASE,
// })

// connection.connect(function (error) {

//   if (error) throw error;
// console.log("databse connected...");
// });


// module.exports = connection

