import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose
    .connect(
      process.env.MONGO_URI ||
        "mongodb+srv://amainooti:hacker2016>@fingertipps.0tok4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .catch((error) => {
      console.log(`Error occured while connecting to database: ${error}`);
      process.exit(1);
    });
  console.log(`MongoDB connected: ${conn.connection.host}`);
};

export default connectDB;
