import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    staff: {
      type: Object,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    superAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
