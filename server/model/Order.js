import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({}, { timestamps: true });

export default mongoose.model("Order", OrderSchema);
