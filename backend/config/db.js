import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConnection = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Failed to connect database");
  }
};
export default dbConnection;
