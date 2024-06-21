import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import express from "express";

const app = express();
app.use(cors());

dotenv.config({
    path:"../.env"
})

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
};
export default databaseConnection;