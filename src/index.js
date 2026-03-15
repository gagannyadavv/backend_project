import dotenv from 'dotenv'
import connect_db from "./db/index.js";

dotenv.config({
    path:'./.env'
})




connect_db()

.then(()=>{
  
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running at ${process.env.PORT}`);
    
  })
})

.catch((error)=>{
  console.log("Mongodb connection failed!!",error);
  
})
















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


api - req , res in express 
after async function , call promises , cors ,app.use , creating utilities , nodejs api error .



*/
