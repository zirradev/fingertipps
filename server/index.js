import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


const app = express()


// firmware setups
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());


// connect to my database
const CONNECTION_URL = "mongodb+srv://amainooti:hacker2016>@fingertipps.0tok4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false})
.then(()=> app.listen(PORT, ()=> console.log(`server running at port: ${PORT}`)))
.catch((error)=> console.log(error.message));



