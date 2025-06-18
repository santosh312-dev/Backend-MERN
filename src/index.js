import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
.then(()=>{
  app.on("error",(error)=>{
    console.log("ERROR: ",error);
    throw error;
  })
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running on : localhost: ${process.env.PORT}`);
    
  })
})
.catch((error)=>{
  console.log("MongoDB connection Fail !!!",error);
  
})

/*
import { DB_NAME } from "./constants";
// function connectDB(){}
import express from 'express'

import mongoose, { mongo } from "mongoose";

const app = express()
// connectDB()
(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})();
*/
