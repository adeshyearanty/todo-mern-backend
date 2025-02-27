import mongoose from "mongoose";
import { MongoDBUrl } from "../config/config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(MongoDBUrl)
        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;
