import express from "express";
import cors from "cors";
import dbConnection from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
dbConnection();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:5000`);
});
