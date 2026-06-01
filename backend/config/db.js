import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConnection = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not defined");
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    // Don't exit on Vercel
    if (process.env.NODE_ENV !== "production") {
      process.exit(1);
    }
  }
};

export default dbConnection;
