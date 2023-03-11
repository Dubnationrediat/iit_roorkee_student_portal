// imported dependency
import express from 'express';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';
// imported routs
import tableRoute from './Routes/createTableR.js'
import Register from './Routes/RigesterR.js'
// initializing express
let app = express();
// initializing dotenv
dotenv.config()
// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
// custom routes 
app.use('/admin',tableRoute)
app.use('/user',Register)

// connection info for database 
let connectionInfo = mysql2.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})

async function  connectionHierarchy() {
    try {
        //* connection with database
        await  connectionInfo.connect((err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("successfully connected to database")
                 //* server 
                let port = process.env.PORT1 ||  process.env.PORT2
                app.listen(port,()=>{
                console.log(`server is listening to port ${port}`)
        })
            }
        })
       
    } catch (error) {
        console.log(error)
    }
}

// initializing function
connectionHierarchy()

export default connectionInfo



