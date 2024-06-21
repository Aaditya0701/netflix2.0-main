// //step-1
// // const express = require("express");
// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./utils/database.js";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js";
// import cors from "cors";

// databaseConnection();

// dotenv.config({
//     path:".env"
// })

// const app = express();
// //middlewares 
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(cookieParser());
// const corsOptions = {
//     origin:'http://localhost:3000',
//     credentials:true
// }
// app.use(cors(corsOptions));
 
// // api
// app.use("/api/v1/user", userRoute);

// app.listen(process.env.PORT,() => {
//     console.log(`Server listen at port ${process.env.PORT}`);
// });
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

databaseConnection();

dotenv.config({
    path:".env"
});

const app = express();

//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = ['http://localhost:3000', 'https://netflix2-0-main-cgbe.onrender.com'];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
});
