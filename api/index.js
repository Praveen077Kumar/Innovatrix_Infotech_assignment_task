import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import path from 'path';

const PORT = 3300;
const corsOptions = {
  origin:'*',
  Credentials:true,
  //access-control-allow-credentials:true
   optionSuccessStatus:200,

}
dotenv.config();
mongoose
  .connect(process.env.MongoUri)
  .then(() => {
    console.log("MongoDb connected Successfully");
  })
  .catch((err) => {
    console.error(err);
  });


const __dirname = path.resolve()

//initialize the app
const app = express();


//initialize the routes
import authRoutes from "./routes/authentication.route.js";
import userRoutes from "./routes/userData.route.js"

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/user", authRoutes);
app.use("/api/userdata",userRoutes)

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,'client','dist','index.html'));
});

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
