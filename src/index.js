import dotenv from "dotenv";
import express from 'express';
import connectDB from "./db/index.js";

dotenv.config();

const app = express(); 




const start = async () => {
  try {
    await connectDB("mongodb+srv://bhupendrau6:Hitit3060@cluster0.rnzlpm6.mongodb.net")
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()