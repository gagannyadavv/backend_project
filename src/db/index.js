import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connect_db = async ()=>{
    try {
      const connectionInstance  =   await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      console.log(`\n Mongodb connected to instance:${connectionInstance.connection.host}`);
      
    } catch (error) {
        console.log(`Databases failed to connect ,${error}`);
        process.exit(1)
        
    }
}


export default connect_db