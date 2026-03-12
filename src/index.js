import dotenv from 'dotenv'
import connect_db from "./db/index.js";

dotenv.config({
    path:'./.env'
})




connect_db()


















/*
import express from 'express'
const app = express()

;(async()=>{
    try {
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
      app.on("error",(error)=>{
        console.log("ERR",error);
        throw error
        
      })
      app.listen(process.env.PORT,()=>{
        console.log(`server is live on port ${process.env.PORT}`);
        
      })
    } catch (error) {
        console.error(error)
        throw error
    }
})()

*/