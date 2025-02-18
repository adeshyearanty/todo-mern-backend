import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import router from './router.js';
dotenv.config()
const url = process.env.MongoDBUrl
const PORT = process.env.PORT
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

mongoose
    .connect(url)
    .then(() => {
        console.log("DB Connected");
        app.listen(PORT);
        console.log(`Server is live on PORT : ${PORT}`)
    })
