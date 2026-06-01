import express from "express";
import cors from "cors";
import dbConnection from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import dotenv from "dotenv";
dotenv.config();
dbConnection();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);

// app.listen is only for local dev; Vercel uses the exported app
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

export default app;
