import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


const app = express()


// middleware setups
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());


app.get("/", (req, res)=>{
    res.send("<h1> Welcome to fingertipps backend... </h1>")
})

// connect to my database
const CONNECTION_URL = "mongodb+srv://amainooti:hacker2016>@fingertipps.0tok4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(
    CONNECTION_URL,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err) => {
if (err) {
console.log("error in connection");
} else {
console.log("mongodb is connected");
}}
)


app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
})
