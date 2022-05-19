import express from "express";
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routes/auth.js";
import connectDB from "./db.js";

dotenv.config();

const app = express();

// middleware setups
// app.use(bodyParser.json({limit: "30mb", extended: true}))
// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// connect to my database
// const CONNECTION_URL = "mongodb+srv://amainooti:hacker2016>@fingertipps.0tok4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const PORT = process.env.PORT || 5000;

// mongoose.connect(
//     CONNECTION_URL,
//     {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// },(err) => {
// if (err) {
// console.log("error in connection");
// } else {
// console.log("mongodb is connected");
// }}
// )

connectDB();

app.get("/", (req, res) => {
  res.send("<h1> Welcome to fingertipps backend... </h1>");
});
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    mesage: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running at port: ${process.env.PORT || 5000}`);
});
