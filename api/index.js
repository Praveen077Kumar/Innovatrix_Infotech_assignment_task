import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const PORT = 3300;

dotenv.config();
mongoose
  .connect(process.env.MongoUri)
  .then(() => {
    console.log("MongoDb connected Successfully");
  })
  .catch((err) => {
    console.error(err);
  });

//initialize the app
const app = express();

//initialize the routes
import userRoutes from "./routes/authentication.route.js";

//middleware
app.use(express.json());

app.use("/user", userRoutes);

// for error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error !";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(PORT, () => {
  try {
    console.log(`listening on port ${PORT}`);
  } catch (error) {
    console.error("Error listening on port ${PORT}", error);
  }
});
