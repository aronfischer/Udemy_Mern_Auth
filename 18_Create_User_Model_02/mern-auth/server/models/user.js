const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema(
  {
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    role: { type: String, default: "member" },
    hashed_password: { type: String, required: true },
    salt: { type: String, required: true },
    resetPasswordToken: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

// Virtuals

// Methods
